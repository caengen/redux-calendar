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
    <nav className='navigation-bar'>
      <div className='left'>
        <a>
          <div>
            <i className='material-icons'>menu</i>
            <span>Meny</span>
          </div>
        </a>
      </div>
      <div className='right'>
        <a className='login'>
          <div>
            <i className='material-icons'>account_circle</i>
            <span>Logg inn</span>
          </div>
        </a>
        <a className='logo'>
          <div>
            <i className='material-icons'>Σ</i>
          </div>
        </a>
      </div>
    </nav>
  );
};

const NavigationBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);

export default NavigationBar;
