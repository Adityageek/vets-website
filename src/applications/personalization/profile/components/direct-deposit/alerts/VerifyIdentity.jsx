import React from 'react';
import PropTypes from 'prop-types';
import { CSP_IDS } from 'platform/user/authentication/constants';
import AccountLink from 'platform/user/authentication/components/AccountLink';

export default function VerifyIdentity() {
  const { ID_ME, LOGIN_GOV } = CSP_IDS;

  return (
    <va-alert status="continue" visible>
      <h2 slot="headline" data-testid="direct-deposit-mfa-message">
        Verify your identity with Login.gov or ID.me to change your direct
        deposit information online
      </h2>
      <p>
        Before we give you access to change your direct deposit information, we
        need to make sure you’re you—and not someone pretending to be you. This
        helps us protect your bank account and prevent fraud.
      </p>
      <p>
        <strong>If you have a verified Login.gov or ID.me account</strong>, sign
        out now. Then sign back in with that account to continue.
      </p>
      <p>
        <strong>If you don’t have one of these accounts</strong>, you can create
        one and verify your identity now.
      </p>
      {[ID_ME, LOGIN_GOV].map(csp => (
        <p key={csp}>
          <AccountLink csp={csp} className="" allowVerification />
        </p>
      ))}
      <p>
        <strong>Note:</strong> If you need help updating your direct deposit
        information, call us at <va-telephone contact="800-827-1000" /> (
        <a href="tel:711" aria-label="TTY: 7 1 1.">
          TTY: 711
        </a>
        ). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.
      </p>
    </va-alert>
  );
}

VerifyIdentity.propTypes = {
  type: PropTypes.string,
};