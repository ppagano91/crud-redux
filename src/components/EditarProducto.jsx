import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";
import { useNavigate } from "react-router-dom";

const EditarProducto = () => {
  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  // useNavigate
  const navigate = useNavigate();

  // nuevo state de producto
  const [producto, guardarProducto] = useState({
    nombre: "",
    precio: 0,
  });

  const productoeditar = useSelector(state => state.rootReducer.productos.productoeditar);
  
  // llenar el state automaticamente
  useEffect(() => {
    guardarProducto(productoeditar);
  }, [productoeditar]);
  
  // leer los datos del formulario
  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  
  
  
  if(!producto) return null;
  const {nombre, precio, id} = producto;


  const sumbitEditarProducto = e => {
    e.preventDefault();
    dispatch(editarProductoAction(producto)); 
    navigate("/");   
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form action="" onSubmit={sumbitEditarProducto}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  id="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className="form-group">
                <label htmlFor="precio">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  id="precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>
              <button
                type="sumbit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
