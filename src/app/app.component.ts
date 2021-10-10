import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prova-Numero-Binario';
  numeroDecimal:number = 0;
  numeroBinario:number = 0;
  NumeroBinarioParaDecimal(){
    let resultado = parseInt(this.numeroBinario.toString(), 2);
   this.numeroDecimal = resultado;
  
}
}
