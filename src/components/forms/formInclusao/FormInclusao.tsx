import React from "react";

export const FormInclusao = () => {
    return (
        <form>
            <div className="bs-example" data-example-ids="select-form-control">
                <select className="form-control" id="type">
                    <option value="">escolha o tipo...</option>
                    <option value="1">video</option>
                    <option value="2">playlist</option>
                </select>
            </div>
            <div className="bs-example" data-example-ids="select-form-control">
                <select className="form-control" id="category">
                    <option value="">escolha a categoria...</option>
                    <option value="1">python</option>
                    <option value="2">javascript vanilla</option>
                    <option value="3">vue</option>
                    <option value="4">lógica</option>
                    <option value="5">layout</option>
                    <option value="6">dev</option>
                    <option value="7">mercado</option>
                </select>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="title" placeholder="título" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="longtitle" placeholder="título longo" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="channel" placeholder="nome do canal" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="tags" placeholder="tags separada por vírgula" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="url" placeholder="url do vídeo" />
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>

        </form>
    );
}

