class CategoriaService extends Service{
    constructor(){
        super()
        this._path = `${this._url}/categorias`
    }

    listarTodas(){
        console.log(" --> CategoriaService:listarTodos")
        return fetch(`${this._path}`).then(res => res.json()).then("FOI").catch(e => console.log(e))
    }
}