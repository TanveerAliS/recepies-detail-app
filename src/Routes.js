import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Recipes from '../src/container/Recipes';
import RecipeDetails from '../src/container/RecipeDetails';

import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const Routes = props => {

    const redirectToHome = () => {
        browserHistory.push('/');
    };

    return (
        <Router history={browserHistory}>
            <Switch>
                <Route
                    component={Recipes}
                    exact
                    path="/"
                />
                <Route
                    path="/recipe-detail"
                    redirectToHome={redirectToHome}
                    render={(props) => <RecipeDetails {...props} redirectToHome={redirectToHome} />}
                />
            </Switch>
        </Router>
    );
}

export default Routes;
