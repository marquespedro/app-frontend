import { Component, OnInit } from '@angular/core';
import { Mensagem } from 'src/app/model/mensagem-model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  websocketChat !: WebSocket;
  mensagemRecebida !: any;
  mensagemEnviar!: string;
  usuario!: string;
  desabilitarCampoUsuario = false;
  desabilitarBotaoConectar = false;
  usuarioEnviar!: string;
  constructor() { }

  ngOnInit(): void {
  }

  construirWebSocket() {
    let url = `ws://localhost:8080/app/chat/${this.usuario}`;
    this.websocketChat = new WebSocket(url);
    this.websocketChat.onmessage = ({ data }) => {
      this.mensagemRecebida = data;
      console.log('Mensagem recebida : ', this.mensagemRecebida);
    }
  }

  enviarMensagem() {
    if (this.websocketChat) {
      this.websocketChat.send(`{"from": ${this.usuario},"content" : ${this.mensagemEnviar}}`);
      this.mensagemEnviar = '';
    }
  }

  verificaSeTemUsuario() {
    this.desabilitarCampoUsuario = (this.usuario && this.usuario.length > 0) ? true : false;
  }

  criarConexao() {
    this.construirWebSocket();
    this.desabilitarBotaoConectar = true;
  }
}
