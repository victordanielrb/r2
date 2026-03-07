import { Cliente } from "./cliente";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

const telefone = new Telefone("11", "999999999");
const endereco = new Endereco("SP", "Sao Paulo", "Av. Paulista", "987");
const cliente = new Cliente("Flavio Caça-Rato", telefone, "ratao@email.com", endereco);

console.log(cliente.getDescricao());
console.log(cliente.getNomeMaiusculo());
//O default vai ser minusculo e pra pegar maiusculo tem que usar o get{funcao}Maiusculo
//Fiz isso pra nao ficar uma porrada de get set repetitivo, ele deixa minusculo no constructor kkkk