
import { createStore } from "redux";
import { Addtodo } from "./Reducers/Add";


const store = createStore(
    Addtodo ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
