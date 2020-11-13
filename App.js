import * as React from 'react';
import NavigationApp from './Nagivation';
import { Provider as PaperProvider } from 'react-native-paper';
import MyContext from './lib/context';

const initValue = {
  isLogin: false,
  token: ''
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setLogin":
      return { isLogin: action.payload };
    case "setToken":
      return { token: action.payload };
    default:
      throw new Error("wrong action.type");
  }
};
const useHoodux = () => {
  // set initial values
  const [isLogIn, setLogIn] = React.useState(false);
  const [token, setToken] = React.useState("");

  // set reducer
  const reducer = (dispatch, value) => {
    switch (dispatch) {
      case "setLogIn":
        setLogIn(value);
        break;
      case "setToken":
        setToken(value);
        break;
      default:
        break;
    }
  };

  return { isLogIn, token, reducer };
};


function App() {
  const value = useHoodux();
  const [state, dispatch] = React.useReducer(reducer, initValue);
  return (
    <MyContext.Provider value={{ ...value, state, dispatch }}>
      <PaperProvider >
        <NavigationApp></NavigationApp>
      </PaperProvider>
    </MyContext.Provider>

  )
}

export default App;