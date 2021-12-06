function Cliente (nome,cpf,email,saldo = 100){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

let andre = new Cliente("André","123456789")

andre.depositar(100)
console.log(andre)