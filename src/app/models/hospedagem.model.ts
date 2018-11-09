import { Local } from "./local.model";

export class Hospedagem {
  readonly type: string = Hospedagem.name;

  id: number;

  nome: string;

  local: Local;

  constructor(object?: any) {
    this.id = object.id;
    this.nome = object.nome;
    this.local = object.local;
  }

  static display(): Function {
    return ((h?: Hospedagem) => (h ? h.nome : undefined)).bind(this);
  }
}
