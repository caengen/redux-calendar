import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

const Bar = () => {
  return (
    <nav>
      <div className='left'>
        <a>
          <div>
            <i className='material-icons'>menu</i>
            Meny
          </div>
        </a>
      </div>
      <div className='right'>
        <a>
          <div>
            <i className='material-icons'>account_circle</i>
            Login
          </div>
        </a>
          <div>
            Σ
          </div>
        <a>
        </a>
      </div>
    </nav>
  );
};

export const NavigationBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);
