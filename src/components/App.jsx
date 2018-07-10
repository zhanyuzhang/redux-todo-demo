import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterType: 'all',
//       id: 0,
//       todoList: []
//     }
//   }

//   addTodo(text) {
//     const { id, todoList } = this.state;
//     this.setState({
//       id: id + 1,
//       todoList: [{
//         id,
//         text,
//         completed: false
//       }].concat(todoList)
//     })
//   }

//   toggleTogo(id) {
//     const { todoList } = this.state;
//     this.setState({
//       todoList: todoList.map(item => {
//         if(item.id !== id) return item;
//         item.completed = !item.completed;
//         return item;
//       })
//     })
//   }

//   setFilterType(type = 'all') {
//     this.setState({
//       filterType: type
//     })
//   }

//   componentDidMount() {}

//   render() {
//     let input
//     const { filterType } = this.state;
//     return (
//       <div className="container">
//         <div className="row">
//           <form onSubmit={
//             e => {
//               const { value } = input;
//               e.preventDefault()
//               if(!value) {
//                 return
//               }
//               input.value = '';
//               this.addTodo(value)
//             }
//           }>
//           <input type="text" style={{marginRight: '10px'}} ref={node => input = node} />
//             <button type="submit">Add Todo</button>
//           </form>
//         </div>
//         <ul className="todo-list">
//           {
//             this.state.todoList.filter(todo => {
//               return filterType === 'all' ? todo
//               : filterType === 'completed' ? todo.completed
//               : !todo.completed
//             }).map((item) => {
//               const { text, id, completed } = item;
//               return (
//                 <li className="item" 
//                     style={{textDecoration: completed ? 'line-through' : 'none'}}
//                     key={id}
//                     onClick={this.toggleTogo.bind(this, id)}
//                 >
//                   {text}
//                 </li>
//               )
//             })
//           }
//         </ul>
//         <div className="row">
//           <span>Show: </span>
//           <button onClick={this.setFilterType.bind(this, 'all')}>All</button>
//           <button onClick={this.setFilterType.bind(this, 'active')} style={{ margin: '0 10px' }}>Active</button>
//           <button onClick={this.setFilterType.bind(this, 'completed')}>Completed</button>
//         </div>
//       </div>
//     )
//   }
// }

export default App