import React, {Fragment} from 'react';

const Products = () => {
    return (
        <Fragment>
            <h2 className="text-center my-5">
                Listado de productos
            </h2>
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
                    
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Products;