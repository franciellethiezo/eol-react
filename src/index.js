import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Css
import './index.css';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from './services/Auth';

// Importação das Páginas
import App from './App';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import Perfil from './pages/Perfil';
import NotFound from './pages/NotFound';

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
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
                <Route path="/perfil" component={Perfil} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
