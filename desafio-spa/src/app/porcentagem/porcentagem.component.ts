import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-porcentagem',
  templateUrl: './porcentagem.component.html',
  styleUrls: ['./porcentagem.component.scss'],
})
export class PorcentagemComponent implements OnInit {
  porcentagemParaValor;
  valorParaPorcentagem;
  resultadoPorcentagemParaValor: number;
  resultadoValorParaPorcentagem: number;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.porcentagemParaValor = this.formBuilder.group({
      porcentagem: ['', [Validators.required]],
      valorTotal: ['', [Validators.required]],
    });
    this.valorParaPorcentagem = this.formBuilder.group({
      valor: ['', [Validators.required]],
      valorTotal: ['', [Validators.required]],
    });
  }

  onPorcentagemParaValor() {
    let porcentagem = this.porcentagemParaValor.get('porcentagem').value;
    let valorTotal = this.porcentagemParaValor.get('valorTotal').value;
    this.resultadoPorcentagemParaValor = parseFloat(
      (valorTotal * (porcentagem / 100)).toFixed(2)
    );
  }
  onValorParaPorcentagem() {
    let valor = this.valorParaPorcentagem.get('valor').value;
    let valorTotal = this.valorParaPorcentagem.get('valorTotal').value;
    this.resultadoValorParaPorcentagem = parseFloat(
      ((valor * 100) / valorTotal).toFixed(2)
    );
  }
}
