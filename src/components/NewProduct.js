import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
// Actions
import { newProductAction } from '../actions/actionsProducts';

const NewProduct = ({history}) => {

    // State del form
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // Use dispatch crea una funcion
    const dispatch = useDispatch();

    // acceder al state del store
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);

    // llama el action de productos
    const addProduct = product => dispatch(newProductAction(product))

    const handleSubmit = e => {
        e.preventDefault();
        // validar form
        if(name.trim() === '' || price <= 0) {
            return;
        }
        // si no hay error

        // creo producto
        addProduct({
            name,
            price
        });

        // redireccionar al home
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label>Nombre del producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="name"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="price"
                                    onChange={e => setPrice(Number(e.target.value))}
                                    value={price}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>
                        { loading ? <p>Cargando...</p> : null}
                        { error ? <p className="alert alert-danger p-2 mt-4 text-center">Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;