import { Endereco } from "./endereco";
import { Telefone } from "./telefone";
//Novamente usei IA pra transcrever o que já existia no PDF de resto, coisa simples 

export class Cliente {
  nome: string;
  telefoneCelular: Telefone;
  email: string;
  endereco: Endereco;

  constructor(nome: string, telefoneCelular: Telefone, email: string, endereco: Endereco) {
    this.nome = nome.toLowerCase();
    this.telefoneCelular = telefoneCelular;
    this.email = email.toLowerCase();
    this.endereco = endereco;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome.toLowerCase();
  }

  getNomeMaiusculo(): string {
    return this.nome.toUpperCase();
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email.toLowerCase();
  }

  getEmailMaiusculo(): string {
    return this.email.toUpperCase();
  }

  getTelefoneCelular(): Telefone {
    return this.telefoneCelular;
  }

  setTelefoneCelular(telefoneCelular: Telefone): void {
    this.telefoneCelular = telefoneCelular;
  }

  getTelefoneCelularMaiusculo(): string {
    return `${this.telefoneCelular.getDdd()} ${this.telefoneCelular.getNumero()}`.toUpperCase();
  }

  getEndereco(): Endereco {
    return this.endereco;
  }

  setEndereco(endereco: Endereco): void {
    this.endereco = endereco;
  }

  getEnderecoMaiusculo(): string {
    return `${this.endereco.getRua()}, ${this.endereco.getNumero()} - ${this.endereco.getCidade()} / ${this.endereco.getEstado()}`.toUpperCase();
  }

  getDescricao(): string {
    return (
      "------------------------------\n" +
      "Informacoes do Cliente:\n" +
      `${this.getNome()}\n` +
      "------------------------------\n" +
      "Telefone:\n" +
      `DDD: ${this.telefoneCelular.getDdd()}\n` +
      `Numero: ${this.telefoneCelular.getNumero()}\n` +
      "------------------------------\n" +
      "Endereco:\n" +
      `Rua: ${this.endereco.getRua()}\n` +
      `Numero: ${this.endereco.getNumero()}\n` +
      `Cidade: ${this.endereco.getCidade()}\n` +
      `Estado: ${this.endereco.getEstado()}\n` +
      "------------------------------"
    );
  }
}
