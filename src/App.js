import { Provider } from 'react-redux';
import store from './store';
import Home from './views/Home';
import './styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
