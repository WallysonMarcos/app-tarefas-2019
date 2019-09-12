class Categorias{
    constructor(){
        this._categorias = []
    }

    adicionar(categorias){
        this._categorias.push(categorias)
    }

    listar(){
        return this._categorias
    }

    limpar(){
        this._categorias = []
    }
}