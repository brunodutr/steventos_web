import { Local } from "./local.model";

export class Evento {
  readonly type: string = Evento.name;

  id: number;

  nome: string;

  descricao: string;

  local: Local;

  dataFim: Date;

  dataIni: Date;

  constructor(object?: any) {
    Object.assign(this, object);
  }

  static display(): Function {
    return ((e?: Evento) => (e ? e.descricao : undefined)).bind(this);
  }
}
