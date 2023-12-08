import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";

const log = logger.createLogger();

// const middleware = [thunk, logger]; // Can contain multiple middlewares if needed

// custom middleware logger
// const logger = createLogger({
//   // ...options
//   predicate: (getState, action) => action.type !== "INCREMENT",
//   collapsed: (getState, action, logEntry) => !logEntry.error,
//   duration: true,
//   timestamp: true,
//   level: "info",
//   logErrors: true,
// });

// Actions are objects with type property
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// function that returns an action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Second redux action",
  };
}

// initial state of the application
const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcream: 20,
};

// Reducer is a function that accepts state and action as arguments, and returns the next state of the application
// (previousState, action) => newStatexx
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // copy of the state object
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const IceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state, // copy of the state object
        numOfIcream: state.numOfIcream - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
});

// Redux store holds application state
const store = createStore(
  rootReducer,
  applyMiddleware(
    log
  ) /*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
