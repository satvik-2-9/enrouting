import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
import WorkshopPage from './components/WorkshopPage';
import EventsPage from './components/EventsPage';
import ProfilePage from './components/ProfilePage';
import EditProfilePage from './components/EditProfilePage';
import SubscriptionPage from './components/SubscriptionPage';
import PurchasesPage from './components/PurchasesPage';

export const history = createHistory();

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/course' exact component={CoursePage} />
        <Route path='/workshop' exact component={WorkshopPage} />
        <Route path='/events' exact component={EventsPage} />
        <Route path='/profile' exact component={ProfilePage} />
        <Route path='/profile/edit' exact component={EditProfilePage} />
        <Route path='/subscription' exact component={SubscriptionPage} />
        <Route path='/purchases' exact component={PurchasesPage} />
        <Route path='/notes' exact component={PurchasesPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
