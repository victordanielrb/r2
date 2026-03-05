import { Cliente } from "./cliente";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

const telefone = new Telefone("11", "999999999");
const endereco = new Endereco("SP", "Sao Paulo", "Av. Paulista", "987");
const cliente = new Cliente("Carlos", telefone, "carlos@email.com", endereco);

console.log(cliente.getDescricao());
