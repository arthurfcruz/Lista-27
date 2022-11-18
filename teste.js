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