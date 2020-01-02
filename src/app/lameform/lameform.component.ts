import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lameform',
  templateUrl: './lameform.component.html',
  styleUrls: ['./lameform.component.scss']
})
export class LameformComponent implements OnInit {

  // nameForm = new FormGroup({
  //   name: new FormControl()
  // });

  constructor(private readonly router: Router) {
  }


  onSubmit(evt: any) {
    this.router.navigate(['infoform'], {
      state: {
        name: 'test' // this.nameForm.controls.name.value
      }
    })
    ;
  }

  ngOnInit() {
  }

}
