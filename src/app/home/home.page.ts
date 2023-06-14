import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public numero = '0';
  public numeroAux = '0';

  constructor() {}

  ngOnInit() {
    this.numero = '0';
    this.numeroAux = '0';
  }

  somar() {}

  sub() {}

  mult() {}

  dividir() {}

  clear() {
    this.numero = '0';
    this.numeroAux = '0';
  }

  negativo() {
    if (this.numero !='0') {
      this.numero = this.numero.includes('-')
      ? this.numero.replace('-','')
      : '-' + this.numero;
    }
  }

  percent() {}

  igual() {}

  numeros(num: string) {
    if (this.numero.startsWith('0')) {
      this.numero = '';
    }
    if (this.numero.length <= 8) {
      this.numero += num;
    }
  }

  virgula() {
    if (this.numero.length <= 8 && !this.numero.includes(',')) {
      this.numero += ',';
    }
  }
}
