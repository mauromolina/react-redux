import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/actionsProducts'
import swal from 'sweetalert2';

const Product = ({product}) => {

    const { name, price, id} = product;

    const dispatch = useDispatch();

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

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> ${price}</span></td>
            <td className="acciones">
                <Link
                    to={`/products/edit/${id}`}
                    className="btn btn-primary mr-2"
                >
                    Editar
                </Link>
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