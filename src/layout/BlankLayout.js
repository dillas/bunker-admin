import React from 'react'
import { Route } from 'react-router-dom'

const BlankLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="BlankLayout">
        <Component {...matchProps} />
      </div>
    )} />
  )
};

export default BlankLayout

