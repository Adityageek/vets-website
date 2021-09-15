// Node modules.
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Relative imports.
import {
  deriveLOA1URL,
  deriveLOA2PlusURL,
  deriveDefaultURL,
} from '../../helpers';
import { selectProfile } from 'platform/user/selectors';

export const App = ({ loa, hidden }) => {
  // Do not render if the widget is hidden.
  if (hidden) {
    return null;
  }

  const deriveURL = () => {
    if (loa === 1) {
      return deriveLOA1URL();
    }

    if (loa >= 2) {
      return deriveLOA2PlusURL();
    }

    return deriveDefaultURL();
  };

  return (
    <a href={deriveURL()} rel="noreferrer noopener">
      Ask us a question online
    </a>
  );
};

App.propTypes = {
  hidden: PropTypes.bool,
  // From mapStateToProps.
  loa: PropTypes.number,
};

const mapStateToProps = state => ({
  loa: selectProfile(state)?.loa?.current,
});

export default connect(
  mapStateToProps,
  null,
)(App);