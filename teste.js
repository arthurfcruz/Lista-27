class Funcionario{
    Nome
    Salario
}

class Gerente extends Funcionario{
    Departamento

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
}

class Venda{
    Vendedor
    ListaProdutos = []
    ValorTotal

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