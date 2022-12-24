import { Component } from '@angular/core';
import { Magia } from '../../../../src/app/models/Magia';
import todasMagias from "../../../assets/data/magias.json"

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  iniciado:boolean = false
  magias:Magia[] = todasMagias
  mod:number = 0
  modAtual:number = 0
  elementoAtual:string[] = []
  isFirst:boolean = true;

  mpParaMod(mp:string) {
    if(mp <= "0") {
      this.iniciado = false
    } else {
      this.modAtual = parseInt(mp) % 3
      this.iniciado = true
    }
  }

  reset() {
    this.iniciado = false
    this.isFirst= true
  }

  playerChoice(proximoElemento:string[], proximoMod:number) {
    console.log(proximoElemento)
    console.log(proximoMod)
    this.elementoAtual = proximoElemento
    this.modAtual = proximoMod
    this.isFirst = false
  }
}
