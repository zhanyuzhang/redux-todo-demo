import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component {
  render() {
    const { onClick, active, children } = this.props
    console.log(this.props)
    return (
      <button
        onClick={onClick}
        disabled={active}
        style={{
          marginLeft: '4px'
        }}
      >
        {children}
    </button>
    )
  }
}

// const Link = ({active, children, onClick}) => (
//   <button
//     onClick={onClick}
//     disabled={active}
//     style={{
//       marginLeft: '4px'
//     }}
//   >
//     {children}
//   </button>
// )

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link