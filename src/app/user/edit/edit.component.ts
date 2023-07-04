import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id: number;
  person !: User;

  form = new FormGroup({
    nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
  });

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { 
		      this.id = this.route.snapshot.params['idPerson'];
          this.userService.find(this.id).subscribe((data: User)=>{
            this.person = data;
          });

          
    }


    get f(){
      return this.form.controls;
    }


    submit(){
      console.log(this.form.value);
      console.log(this.id);
      this.userService.update(this.id, this.form.value).subscribe(res => {
           console.log('User updated successfully!');
           this.router.navigateByUrl('user/index');
      })
    }

}
