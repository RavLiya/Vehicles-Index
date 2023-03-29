import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar>
      <h1>
        Vehicle registration platform
      </h1>
    </Navbar>
  );
};

export default Header;
