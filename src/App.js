import React, { Component, Suspense, lazy } from 'react';
import { Switch , Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './Components/AppBar';
import Container from './Components/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from './Components/PritvatRoute';
import PublicRoute from './Components/PublicRoute';

const ContactsPage = lazy(() => import('./Pages/ContactsPage'));
const HomeView = lazy(() => import('./Pages/HomePage'));
const RegisterView = lazy(() => import('./Pages/RegisterPage'));
const LoginView = lazy(() => import('./Pages/LogInPage'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsPage}
            />
            <Route>
            {" "}
            <NotFoundPage />{" "}
            </Route>
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
