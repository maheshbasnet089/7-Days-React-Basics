import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    
  return (
   <>
    <button>{props.title}</button>
    {/* <h1>{props.subTitle}</h1> */}
   </>

  )
}
Button.defaultProps = {
    title : "Default Props bata aako"
}

Button.propTypes = {
    title : PropTypes.string.isRequired
}

export default Button