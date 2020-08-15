import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductAction, updateProductAction } from '../actions/actionsProducts'
import swal from 'sweetalert2';

const Product = ({product}) => {

    const { name, price, id} = product;

    const dispatch = useDispatch();

    // habilito history para redireccion
    const history = useHistory();

    // Confirmación de eliminar
    const deleteConfirm = (id) => {
        // confirmacion
        swal.fire({
            title: 'Estás seguro?',
            text: 'El producto se eliminará permanentemente',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if(result.value) {
                // pasar al action
                dispatch( deleteProductAction(id));
            }
        })
    }

    // funcion que redirige
    const redirectUpdate = product => {
        dispatch(updateProductAction(product));
        history.push(`/products/edit/${id}`)
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> ${price}</span></td>
            <td className="acciones">
                <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={() => redirectUpdate(product)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteConfirm(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Product;