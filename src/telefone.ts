export class Telefone {
  ddd: string;
  numero: string;

  constructor(ddd: string, numero: string) {
    this.ddd = ddd.toLowerCase();
    this.numero = numero.toLowerCase();
  }

  getDdd(): string {
    return this.ddd;
  }

  setDdd(ddd: string): void {
    this.ddd = ddd.toLowerCase();
  }

  getDddMaiusculo(): string {
    return this.ddd.toUpperCase();
  }

  getNumero(): string {
    return this.numero;
  }

  setNumero(numero: string): void {
    this.numero = numero.toLowerCase();
  }

  getNumeroMaiusculo(): string {
    return this.numero.toUpperCase();
  }
}
