import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
import WorkshopPage from './components/WorkshopPage';
import EventsPage from './components/EventsPage';
import ProfilePage from './components/ProfilePage';
import EditProfilePage from './components/EditProfilePage';
import SubscriptionPage from './components/SubscriptionPage';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/course' exact component={CoursePage} />
      <Route path='/workshop' exact component={WorkshopPage} />
      <Route path='/events' exact component={EventsPage} />
      <Route path='/profile' exact component={ProfilePage} />
      <Route path='/profile/edit' exact component={EditProfilePage} />
      <Route path='/subscription' exact component={SubscriptionPage} />
    </Switch>
  );
};

export default App;
