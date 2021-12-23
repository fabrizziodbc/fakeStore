import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './store';
import Home from './views/Home';
import './styles.scss';
import Detail from './views/Detail';
import Layaout from './components/Layout';
import About from './views/About';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <Provider store={store}>
      <Layaout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
