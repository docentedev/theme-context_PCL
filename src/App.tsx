import { Provider } from 'react-redux'
import './App.css';
import Card from './components/card/Card';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Card />
      </div>
    </Provider>
  );
}

export default App;
