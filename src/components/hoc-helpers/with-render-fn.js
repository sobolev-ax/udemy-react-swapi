import React from 'react';

const withRenderFn = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props} >
        { fn }
      </Wrapped>
    )
  }
}

export default withRenderFn;
