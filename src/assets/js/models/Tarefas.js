class Tarefas{
    constructor(){
        this._tarefas = []
    }

    adicionar(tarefas){
        this._tarefas.push(tarefas)
    }

    listar(){
        return this._tarefas
    }

    limpar(){
        this._tarefas = []
    }
}