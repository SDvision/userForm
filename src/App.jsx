import HomePage from './components/HomePage.jsx'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducer from './redux/reducers/index'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <HomePage />
      </div>
    </Provider>
  );
}

export default App;
