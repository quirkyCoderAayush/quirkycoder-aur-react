import React from 'react'

const WithLogging = (WrappedComponent) => {
  return (props) => {
    console.log("Props: ", props);
    return <WrappedComponent {...props} />;
  }
}

export default WithLogging