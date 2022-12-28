import { Component } from '@angular/core';
import { Magia } from '../../../../src/app/models/Magia';
import todasMagias from "../../../assets/data/magias.json"
import { MagiasComponent } from '../magias/magias.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  iniciado:boolean = false
  magias:Magia[] = todasMagias
  magiaSelecionada:any
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

  playerChoice(magia:Magia) {
    this.elementoAtual = magia.proxElem
    this.modAtual = magia.proxMod
    this.magiaSelecionada = magia
    this.isFirst = false
  }
}
