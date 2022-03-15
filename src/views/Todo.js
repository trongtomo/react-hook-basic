
const Todo =(props) =>{
    
    const todos=props.todos;
return(

    <div className="todos-container">
          {todos.map(todo =>{
            return(
              <li className="todos-child" key={todo.id}>{todo.title}</li>
            )
          })}
        </div>
)
}
export default Todo;