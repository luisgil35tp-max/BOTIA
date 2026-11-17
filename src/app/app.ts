import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgentService, ContractRecord } from './agent.service';
import { ShellData } from './util/services/shell-data';
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly message = signal('');
  protected readonly answer = signal('');
  protected readonly isAnswering = signal(false);
  protected readonly isProcessing = signal(false);
  protected readonly notice = signal('');
  protected readonly contracts;
  protected readonly completedCount;

  constructor(private readonly agent: AgentService, private readonly channel: ShellData) {
    this.contracts = this.agent.contracts;
    this.completedCount = computed(() => this.contracts().filter((item) => item.status === 'Procesado').length);
    this.channel.onMessage((message) => { if (message.type === 'LOGIN') this.agent.setCurrentUser(message.payload); });
  }

  async askAgent(): Promise<void> {
    const question = this.message().trim();
    if (!question || this.isAnswering()) return;
    this.isAnswering.set(true); this.answer.set('');
    try { this.answer.set(await this.agent.answer(question)); this.message.set(''); }
    finally { this.isAnswering.set(false); }
  }

  async processFiles(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    if (!files.length || this.isProcessing()) return;
    this.isProcessing.set(true); this.notice.set('Analizando y registrando los contratos…');
    try { const records = await this.agent.processContracts(files); this.notice.set(`${records.length} contrato(s) almacenado(s).`); }
    catch (error) { this.notice.set(error instanceof Error ? error.message : 'No fue posible procesar los archivos.'); }
    finally { this.isProcessing.set(false); input.value = ''; }
  }

  statusClass(contract: ContractRecord): string { return contract.status === 'Procesado' ? 'status status--success' : 'status status--review'; }
}
