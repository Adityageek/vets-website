// Node modules.
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Relative imports.
import Logo from '../Logo';
import UserNav from '../../../user-nav/containers/Main';
import { updateExpandedMenuIDAction } from '../../containers/Menu/actions';

export const LogoRow = ({
  isMenuOpen,
  setIsMenuOpen,
  updateExpandedMenuID,
}) => {
  const onMenuToggle = () => {
    updateExpandedMenuID();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-logo-row vads-u-background-color--primary-darkest vads-u-display--flex vads-u-align-items--center vads-u-justify-content--space-between vads-u-padding-y--1p5 vads-u-padding-left--1p5 vads-u-padding-right--1">
      {/* Logo */}
      <a
        aria-label="VA logo"
        className="header-logo vads-u-display--flex vads-u-align-items--center vads-u-justify-content--center"
        href="/"
      >
        <Logo />
      </a>

      <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-align-items--center">
        {/* Sign in button */}
        <UserNav isHeaderV2 />

        {/* Mobile menu button */}
        <button
          aria-controls="header-nav-items"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          className="header-menu-button usa-button vads-u-background-color--gray-lightest vads-u-color--link-default vads-u-padding-y--1 vads-u-padding-x--1p5 vads-u-margin--0 vads-u-margin-left--2 vads-u-position--relative"
          onMouseUp={onMenuToggle}
          onKeyDown={event => event.keyCode === 13 && onMenuToggle()}
          type="button"
        >
          {/* Menu | Close */}
          {!isMenuOpen ? 'Menu' : 'Close'}

          {/* Menu bars icon | Close icon */}
          {!isMenuOpen ? (
            <i
              aria-hidden="true"
              className="fa fa-bars vads-u-margin-left--1 vads-u-font-size--sm"
            />
          ) : (
            <i
              aria-hidden="true"
              className="fa fa-times vads-u-margin-left--1 vads-u-font-size--sm"
            />
          )}

          {/* Styling overlay */}
          {isMenuOpen && (
            <div className="header-menu-button-overlay vads-u-background-color--gray-lightest vads-u-position--absolute vads-u-width--full" />
          )}
        </button>
      </div>
    </div>
  );
};

LogoRow.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateExpandedMenuID: expandedMenuID =>
    dispatch(updateExpandedMenuIDAction(expandedMenuID)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LogoRow);