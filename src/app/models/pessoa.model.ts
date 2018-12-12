export class Pessoa {
  readonly type: string = Pessoa.name;
  public id: number;

  private nome: string;

  private email: string;

  private dataNascimento: Date;

  public perfil: number | string;

  constructor(object?: any) {
    if (object) {
      if (object.id) {
        this.id = object.id;
      }
      this.nome = object.nome;
      this.email = object.email;
      this.dataNascimento = object.dataNascimento;
      this.perfil = object.perfil;
    }
  }
}
