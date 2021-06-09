import HomePage from './components/HomePage.jsx'
import './index.css'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './redux/reducers/userReducer.jsx';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer)
// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(logger, thunk))
// )


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
