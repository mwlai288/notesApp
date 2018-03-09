import React from 'react';
import { BackgroundStyle, BoxView, ButtonStyle } from '../styles/Styles';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <BackgroundStyle>
      <BoxView>
        <h1>Page Not Found</h1>
        <p>Nothing here sorry!</p>
        <Link to="/">
          <ButtonStyle>HOME PAGE</ButtonStyle>
        </Link>
      </BoxView>
    </BackgroundStyle>
  );
};

export default NotFound;
