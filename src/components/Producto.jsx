import React from 'react'
import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction } from '../actions/productoActions'
import Swal from 'sweetalert2'

const Producto = ({producto}) => {
  const {nombre, precio, id} = producto;
  const dispatch = useDispatch();

  // Confirmar si desea eliminarlo
  const confirmarEliminarProducto = id => {
    // Preguntar al usuario
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Un producto que se elimina no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        // Pasarlo al action
        dispatch(borrarProductoAction(id));
      }
    })
    
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