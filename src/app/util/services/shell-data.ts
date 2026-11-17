import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class ShellData {
  private channel = new BroadcastChannel('hub');

  /**
   *evento de envio del shell
   */
  send(type: string, payload: any) {
    this.channel.postMessage({
      type,
      payload
    });
  }

  /**
   *escucha de evento del shell
   */
    onMessage(callback: (message: any) => void) {
    this.channel.onmessage = ({ data }) => callback(data);
  }

  /**
   *cerrar el canal
   */
  close() {
    this.channel.close();
  }

}
