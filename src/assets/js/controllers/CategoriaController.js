class CategoriaController{
    constructor(){
        this._categorias = new Categorias()
        this._categoriaService = new CategoriaService()
        this._categoriaView = new CategoriaView()
    }

    montar(){
        this._categoriaService.listarTodas()
            .then(categoria => categoria.map( categoria => this._categorias.adicionar(categoria)))
            .then(() => this._categoriaView.montarListagem(this._categorias))
            .catch("Erro ao montar")
    } 
}