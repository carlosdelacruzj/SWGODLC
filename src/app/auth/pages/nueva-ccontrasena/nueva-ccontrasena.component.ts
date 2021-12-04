import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-ccontrasena',
  templateUrl: './nueva-ccontrasena.component.html',
  styleUrls: ['./nueva-ccontrasena.component.css']
})
export class NuevaCContrasenaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  miFormulario: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
  });
  ngOnInit(): void {
  }
  validacion(){
    
  }

}
