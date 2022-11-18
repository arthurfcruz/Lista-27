class Funcionario{
    Nome
    Salario

    constructor(nome, salario) {
        this.Nome = nome
        this.Salario = salario
    }
}

class Gerente extends Funcionario{
    Departamento

    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.Departamento = departamento
    }

    exibirInformacoes(){
        console.log(this.Nome, this.Salario, this.Departamento)
    }
}

class Vendedor extends Funcionario{
    PercentualComissao

    calcularSalario(){
        let SalarioAumentado = this.Salario + (this.Salario * (this.PercentualComissao / 100))
        return SalarioAumentado
    }

    ExibirInformacoes(){
        console.log(this.Nome, this.Salario, this.calcularSalario(), this.PercentualComissao,"%")    
    }
}

class Produto{
    Nome
    Valor

    constructor(nome, valor) {
        this.Nome = nome
        this.Valor = valor
    }
}

class Venda{
    Vendedor
    ListaProdutos = []
    ValorTotal

    constructor(vendedor) {
        this.Vendedor = vendedor
    }

    AdicionarProduto() {
        let produto = new Produto()
        this.ListaProdutos.push(produto)
    }

    CalcularTotal() {
        this.ValorTotal = 0
        for (let index = 0; index < this.ListaProdutos.length; index++) {
            this.ValorTotal = this.ValorTotal + this.ListaProdutos[index].Valor
        } 
    }

    FinalizarVenda() {
        console.log(this.Vendedor.Nome, this.ValorTotal)
    }
}

let gerente = new Gerente("Giovanni", 10000, "ensinamentos")

let vendedor = new Vendedor("Argollo", 2500, 5)

let venda = new Venda(vendedor)