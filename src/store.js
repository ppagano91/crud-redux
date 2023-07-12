import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducers";

// const store = configureStore({ reducer: reducer });
const store = configureStore({
  reducer: {
    rootReducer: reducer,
  },
  middleware: [thunk],
  devTools:
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
});

export default store;
