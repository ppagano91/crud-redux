import React from 'react'
import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction } from '../actions/productoActions'

const Producto = ({producto}) => {
  const {nombre, precio, id} = producto;
  const dispatch = useDispatch();

  // Confirmar si desea eliminarlo
  const confirmarEliminarProducto = id => {
    // Preguntar al usuario
    // console.log(id);
    // Pasarlo al action
    dispatch(borrarProductoAction(id));
  }
  return (
    (
        <tr key={id}>
          <td>{nombre}</td>
          <td>
            <span className="font-weight-bold">${precio}</span>
          </td>
          <td className='acciones'>
            <Link className="btn btn-primary mr-2" to={`/productos/editar/${id}`}>Editar</Link>
            <button type='button' className="btn btn-danger" onClick={()=>confirmarEliminarProducto(id)}>Eliminar</button>
          </td>
        </tr>
      )
  )
}

export default Producto