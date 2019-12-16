import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
// Css
import './index.css';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from './services/Auth';
=======
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import { usuarioAutenticado, parseJwt } from './services/';
>>>>>>> bac7eb58f5c5fea73ea9ea968aa11a3fecfde3c4

// Importação das Páginas
import App from './App';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import Perfil from './pages/Perfil';
import NotFound from './pages/NotFound';
import ControleUsuario from './pages/ControleUsuario';
import Interesse from './pages/Interesses';


// Import MDB
// import '@fortawesome/fontawesome-free/css/all.min.css';


// 
const PermissaoAdm = ({ component: Component }) => (
    <Route
        render={props =>
            usuarioAutenticado() && parseJwt().Role === 'Administrador' ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: 'login' }} />
                )
        }
    />
);

const PermissaoAluno = ({ component: Component }) => (
    <Route
        render={props =>
            usuarioAutenticado() && parseJwt().Role === 'Funcionário' ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: 'login' }} />
                )
        }
    />
);

// Rotas para páginas
const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
<<<<<<< HEAD
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
                <Route path="/perfil" component={Perfil} />
=======
                <Route path='/controleusuario' component={ControleUsuario}/>
                <Route path='/interesses' component={Interesse}/>
>>>>>>> bac7eb58f5c5fea73ea9ea968aa11a3fecfde3c4
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
