import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './Components/AppBar';
import Container from './Components/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from './Components/PritvatRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() => import('./Pages/HomePage'));
const RegisterView = lazy(() => import('./Pages/RegisterPage'));
const LoginView = lazy(() => import('./Pages/LogInPage'));
// const Contact = lazy(() => import('./Pages/ContactPage'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/todos"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/todos"
              component={LoginView}
            />
            <PrivateRoute
              path="/todos"
              redirectTo="/login"
              // component={TodosView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
