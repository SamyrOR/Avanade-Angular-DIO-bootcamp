import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  valor = new FormControl('', [Validators.required]);
  tabuada: Tabuada[] = [];
  colunas: string[] = ['Valor', 'Multiplicador', 'Resultado'];
  valoresTabuada = null;
  mostrarTable: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.tabuada = [];
    if (this.valor.value) {
      this.mostrarTable = true;
    } else {
      this.mostrarTable = false;
    }
    for (let i = 1; i < 11; i++) {
      this.tabuada.push({
        valorInserido: this.valor.value,
        multiplicador: i,
        resultado: this.valor.value * i,
      });
    }
    this.valoresTabuada = this.tabuada;
  }
}
