import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
    children: ownProps.children,
  };
};

const App = (children) => (
  <div className="app">
    {children}
  </div>
);

export default App;
