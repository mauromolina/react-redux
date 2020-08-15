import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editProductAction } from '../actions/actionsProducts';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch();


    // state del producto
    const [product, setProduct] = useState({
        name: '',
        price: ''
    })

    // producto a editar
    const updateProduct = useSelector(state => state.products.updateProduct);
    // if(!product)return null;


    // llenar el state automaticamente
    useEffect( () => {
        setProduct(updateProduct);
    }, [updateProduct])

    // leer los datos del form
    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const { name, price} = product;

    const handleSubmit = e => {
        e.preventDefault();
        // validar
        dispatch(editProductAction(product));
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
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
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="price"
                                    value={price}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default EditProduct;