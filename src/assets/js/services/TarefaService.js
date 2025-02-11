class TarefaService extends Service{
    constructor(){
        super()
        this._path = `${this._url}/tarefas?f=`
    }

    listarTodas(descricao){
        return fetch(`${this._path}${descricao}`)
                    .then(res => res.json())
                    .catch(e => console.log(e))
    }
}