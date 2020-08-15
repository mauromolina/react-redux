import {
    ADD_PRODUCT,
    SUCCESSFULL_ADD_PRODUCT,
    FAILED_ADD_PRODUCT,
    START_PRODUCTS_DOWNLOAD,
    SUCCESSFULL_PRODUCTS_DOWNLOAD,
    FAILED_PRODUCTS_DOWNLOAD,
    GET_DELETE_PRODUCT,
    FAILED_DELETE_PRODUCT,
    SUCCESSFULL_DELETE_PRODUCT
} from '../types';

import axiosClient from '../config/axios';
import swal from 'sweetalert2';

// Crear nuevos productos
export function newProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            // insertar en la api
            await axiosClient.post('/productos', product);
            // si todo sale bien
            dispatch(successfullAddProduct(product));
            swal.fire(
                'Correcto!',
                'El producto se agregó correctamente!',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(failedAddProduct(true));
            swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Ocurrió un error! Intente de nuevo más tarde...'
            })
        }
    }
}


// Agregar un producto
const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

// Se guarda bien el producto
const successfullAddProduct = product => ({
    type:SUCCESSFULL_ADD_PRODUCT,
    payload: product
})

// No se guarda bien
const failedAddProduct = status => ({
    type: FAILED_ADD_PRODUCT,
    payload: status
})

// Funcion para obtener los productos
export function getProductsAction() {
    return async (dispatch) => {
        dispatch(getProducts());
        try {
            const response = await axiosClient.get('/productos');
            dispatch(successfullGetProducts(response.data));
        } catch (error) {
            console.log(error);
            dispatch(failedGetProducts());
        }
    }
}

const getProducts = () => ({
    type: START_PRODUCTS_DOWNLOAD,
    payload: true
}) 

const successfullGetProducts = products => ({
    type: SUCCESSFULL_PRODUCTS_DOWNLOAD,
    payload: products
    
})

const failedGetProducts = () => ({
    type: FAILED_PRODUCTS_DOWNLOAD,
    payload: true
})

// Selecciona y elimina un producto
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getDeleteProduct(id));
        try {
            await axiosClient.delete(`/productos/${id}`);
            dispatch(successfullDeleteProduct());
            swal.fire(
                'Eliminado!',
                'El producto se eliminó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(failedDeleteProduct());
        }

    }
}

const getDeleteProduct = id => ({
    type:GET_DELETE_PRODUCT,
    payload: id
})

const successfullDeleteProduct = () => ({
    type: SUCCESSFULL_DELETE_PRODUCT
})

const failedDeleteProduct = () => ({
    type: FAILED_DELETE_PRODUCT,
    payload: true
})