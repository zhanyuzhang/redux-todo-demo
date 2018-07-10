import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    const { dispatch } = props; 
    this.state = {
      dispatch
    }
  }

  render() {
    let input
    const { dispatch } = this.state
    return (
      <div>
        <form onSubmit={
          e => {
            e.preventDefault()
            if(!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }
        }>
        <input type="text" ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
        </form>
      </div>
    )
  }
}

// const AddTodo = ({dispatch}) => {
//   let input
//   console.log(this)

//   return (
//     <div>
//       <form onSubmit={
//         e => {
//           e.preventDefault()
//           if(!input.value.trim()) {
//             return
//           }
//           dispatch(addTodo(input.value))
//           input.value = ''
//         }
//       }>
//       <input type="text" ref={node => input = node} />
//       <button type="submit">
//         Add Todo
//       </button>
//       </form>
//     </div>
//   )
// }

export default connect()(AddTodo)
