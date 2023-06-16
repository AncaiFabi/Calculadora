import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public numero = '0';
  public numeroAux = '0';
  public operacao = '';
  public newNumber = false;

  constructor() {}

  ngOnInit() {
    this.numero = '0';
    this.numeroAux = '0';
  }

  somar() {
    this.operacao = 'mais';
    this.numeroAux = this.numero;
    this.newNumber = true;
  }

  sub() {
    this.operacao = 'menos';
    this.numeroAux = this.numero;
    this.newNumber = true;
  }

  mult() {
    this.operacao = 'mult';
    this.numeroAux = this.numero;
    this.newNumber = true;
  }

  dividir() {
    this.operacao = 'div';
    this.numeroAux = this.numero;
    this.newNumber = true;
  }

  clear() {
    this.numero = '0';
    this.numeroAux = '0';
    this.operacao = '';
    this.newNumber = false;
  }

  negativo() {
    if (this.numero != '0') {
      this.numero = this.numero.includes('-')
        ? this.numero.replace('-', '')
        : '-' + this.numero;
    }
  }

  percent() {
    if (this.numero.length <= 8) {
      this.operacao = '';
      this.numeroAux = '';
      const fixado = this.numero.includes(',')
        ? this.numero.split(',')[1].length + 2
        : 2;
      this.numero = (this.convert(this.numero) / 100)
        .toFixed(fixado)
        .toString()
        .replace('.', ',');
    }
  }

  igual() {
    const numeroFinal = this.convert(this.numero);
    const numeroFinalAux = this.convert(this.numeroAux);

    switch (this.operacao) {
      case 'mais':
        this.numero = this.sum(numeroFinal, numeroFinalAux).toString();
        break;

      case 'menos':
        this.numero = this.subtract(numeroFinalAux, numeroFinal).toString();
        break;

      case 'mult':
        this.numero = this.multiply(numeroFinal, numeroFinalAux).toString();
        break;

      case 'div':
        this.numero = this.divide(numeroFinalAux, numeroFinal).toString();
        break;
    }
    this.operacao = '';
  }

  numeros(num: string) {
    if (this.numero.startsWith('0') && !this.numero.startsWith('0,')) {
      this.numero = '';
    }
    if (this.numero.length <= 8) {
      if (this.newNumber) {
        this.numero = num;
        this.newNumber = false;
      } else {
        this.numero += num;
      }
    }
  }

  virgula() {
    if (this.numero.length <= 8 && !this.numero.includes(',')) {
      this.numero += ',';
    }
  }

  convert(dados: string): number {
    if (dados.includes(',')) {
      return parseFloat(dados.replace(',', '.'));
    } else {
      return parseInt(dados);
    }
  }

  sum(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
  divide(a: number, b: number): number {
    return a / b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
}
