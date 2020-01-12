import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './blueboard-logo.svg';
import messages from './messages';

const statusList = ['new', 'scheduled', 'redeemed', 'completed'];

function Header() {
  const location = useLocation();

  return (
    <div>
      <A href="https://www.blueboard.com/" target="_blank">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/" active={location.pathname === '/'}>
          <FormattedMessage {...messages.all} />
        </HeaderLink>
        {statusList.map(status => (
          <HeaderLink
            key={status}
            to={`/${status}`}
            active={location.pathname === `/${status}`}
          >
            <FormattedMessage {...messages[status]} />
          </HeaderLink>
        ))}
      </NavBar>
    </div>
  );
}

export default Header;
