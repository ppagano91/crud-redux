import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCAGRA_PRODUCTOS_EXITO,
  DESCAGRA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINAR_EXITO,
  PRODUCTO_ELIMINAR_ERROR,
  COMENZAR_EDICION_PRODUCTO,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITAR_EXITO,
  PRODUCTO_EDITAR_ERROR,
} from "../types";

// Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoeliminar: null,
  //   productoeditar: null,
  //   productoeditar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    
      case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };
    
      case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
      case COMENZAR_DESCARGA_PRODUCTOS:
      return {
        ...state,
        loading: action.payload,
      };

      case DESCAGRA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };

      case DESCAGRA_PRODUCTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoeliminar: action.payload,
      };

      case PRODUCTO_ELIMINAR_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoeliminar
        ),
        productoeliminar: null,
      };

      case PRODUCTO_ELIMINAR_ERROR:
      return {
        ...state,
        error: action.payload,
      };

      case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoeditar: action.payload,
      };      
      
      case PRODUCTO_EDITAR_EXITO:
        return {
          ...state,
          productoeditar: null,
          productos: state.productos.map((producto) =>
          producto.id === action.payload.id
          ? (producto = action.payload)
          : producto
          ),
        };
        
        case PRODUCTO_EDITAR_ERROR:
          return {
            ...state,
            error: action.payload,
          };
          
        // case COMENZAR_EDICION_PRODUCTO:
        // return {
        //   ...state,
        //   productoeditar: action.payload,
        // };
          
          default:
            return state;
  }
}
