/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import RewardsPage from 'containers/RewardsPage/Loadable';
import RewardPage from 'containers/RewardPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { statusList } from 'constants/rewards';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Blueboard rewards"
        defaultTitle="Blueboard rewards"
      >
        <meta name="description" content="A test task for blueboard project" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={RewardsPage} />
        {statusList.map(status => (
          <Route
            key={status}
            exact
            path={`/${status}`}
            component={RewardsPage}
          />
        ))}
        <Route path="/reward/:id" component={RewardPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
