import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
export interface Tabuada {
  valorInserido: number;
  multiplicador: number;
  resultado: number;
}

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.scss'],
})
export class TabuadaComponent implements OnInit {
  tabuadaForm;
  tabuada: Tabuada[] = [];
  colunas: string[] = ['Valor', 'Multiplicador', 'Resultado'];
  valoresTabuada = null;
  mostrarTable: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.tabuadaForm = this.formBuilder.group({
      valor: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.tabuada = [];
    if (this.tabuadaForm.get('valor').value) {
      this.mostrarTable = true;
    } else {
      this.mostrarTable = false;
    }
    for (let i = 1; i < 11; i++) {
      this.tabuada.push({
        valorInserido: this.tabuadaForm.get('valor').value,
        multiplicador: i,
        resultado: this.tabuadaForm.get('valor').value * i,
      });
    }
    this.valoresTabuada = this.tabuada;
  }
}
