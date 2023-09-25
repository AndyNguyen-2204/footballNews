import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { Provider, useSelector } from 'react-redux';
import store from "./redux/Store"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
