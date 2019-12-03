import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import { usuarioAutenticado, parseJwt } from './services/';

// Importação das Páginas
import NotFound from './pages/NotFound';
import ControleUsuario from './pages/ControleUsuario';


// Import MDB
// import '@fortawesome/fontawesome-free/css/all.min.css';


// Rotas para páginas
const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path='/controleusuario' component={ControleUsuario}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
