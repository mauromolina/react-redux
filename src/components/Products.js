import React, {Fragment, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProductsAction } from '../actions/actionsProducts';
import Product from './Product';

const Products = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        // consultar la api
        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();
    }, []);

    // obtener el state
    const products = useSelector(state => state.products.products);
    const error = useSelector(state => state.products.error);
    const loading = useSelector(state => state.products.loading);

    return (
        <Fragment>
            <h2 className="text-center my-5">
                Listado de productos
            </h2>
            { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Error al descargar los productos</p> : null}
            { loading ? <p className="text-center font-weight-bold">Buscando productos...</p> : null}
            { products.length === 0 ? <p className="alert alert-info text-center font-weight-bold">No hay productos</p> : null }
            <table className="table table-stripped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">
                            Nombre
                        </th>
                        <th scope="col">
                            Precio
                        </th>
                        <th scope="col">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { products.length === 0 ? null : products.map( product => (
                        <Product
                            key={product.id}
                            product={product}
                        />
                    ) )}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Products;