import { Local } from "./local.model";

export class Transporte {
  readonly type: string = Transporte.name;
  id: number;

  valor: number;

  origem: Local;

  destino: Local;

  constructor(object?: any) {
    Object.assign(this, object);
  }

  static display(): Function {
    return ((t?: Transporte) =>
      t
        ? `${t.origem.cidade} - ${t.origem.estado} x ${t.destino.cidade} - ${
            t.destino.estado
          }`
        : undefined).bind(this);
  }
}
