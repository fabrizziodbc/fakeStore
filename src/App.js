import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import About from './views/About';
import Detail from './views/Detail';
import Home from './views/Home';
import Layaout from './components/Layout';
import NotFound from './views/NotFound';
import store from './store';

import './styles.scss';

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
