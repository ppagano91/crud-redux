import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";
import Producto from "./Producto";

const Productos = () => {

  const dispatch = useDispatch();
  

  useEffect(() => {
    // Consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();

    // eslint-disable-next-line
    
  }, []);

  // Obtener el state
  const productos = useSelector((state) => state.rootReducer.productos.productos);
  // console.log(productos);
  const error = useSelector((state) => state.rootReducer.productos.error);
  const cargando = useSelector((state) => state.rootReducer.productos.loading);
  
  return (
    <>
      <h2 className="text-center my-5">Lista de Productos</h2>
      {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
      {cargando ? <p className="text-center">Cargando...</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos == undefined ? null : productos.length === 0 ? (
            <tr key={0}>
              <td colSpan="3" className="text-center">
                No hay productos
              </td>
            </tr>
          ) : (
            productos.map((producto) => <Producto key={producto.id} producto={producto}/>)
          )
            }
        </tbody>
      </table>
    </>
  );
};

export default Productos;
