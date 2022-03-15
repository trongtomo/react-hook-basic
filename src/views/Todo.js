
const Todo =(props) =>{
    
    const todos=props.todos;
return(

    <div className="title">
        {props.title}
          {todos.map(todo =>{
            return(
              <li className="todos-child" key={todo.id}>{todo.title}</li>
            )
          })}
          <hr/>
        </div>
)
}
export default Todo;