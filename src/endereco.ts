export class Endereco {
  estado: string;
  cidade: string;
  rua: string;
  numero: string;

  constructor(estado: string, cidade: string, rua: string, numero: string) {
    this.estado = estado.toLowerCase();
    this.cidade = cidade.toLowerCase();
    this.rua = rua.toLowerCase();
    this.numero = numero.toLowerCase();
  }

  getEstado(): string {
    return this.estado;
  }

  setEstado(estado: string): void {
    this.estado = estado.toLowerCase();
  }

  getEstadoMaiusculo(): string {
    return this.estado.toUpperCase();
  }

  getCidade(): string {
    return this.cidade;
  }

  setCidade(cidade: string): void {
    this.cidade = cidade.toLowerCase();
  }

  getCidadeMaiusculo(): string {
    return this.cidade.toUpperCase();
  }

  getRua(): string {
    return this.rua;
  }

  setRua(rua: string): void {
    this.rua = rua.toLowerCase();
  }

  getRuaMaiusculo(): string {
    return this.rua.toUpperCase();
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
