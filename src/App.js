import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './store';
import Home from './views/Home';
import './styles.scss';
import Detail from './views/Detail';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Provider>
  );
};

export default App;
