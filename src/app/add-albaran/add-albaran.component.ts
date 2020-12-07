import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-albaran',
  templateUrl: './add-albaran.component.html',
  styleUrls: ['./add-albaran.component.scss']
})
export class AddAlbaranComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
    ) { }

  registerForm = this.formBuilder.group({
    cliente: [''],
    cif: [''],
    direccion: [''],
    numAlbaran: 0,
    fecha: ['']
  })

  ngOnInit() {}
  
  submit(){
    console.log(this.registerForm.value)
  }

}
