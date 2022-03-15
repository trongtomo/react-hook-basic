
const Todo =(props) =>{
    const{todos,title,deleteDataTodo}= props;
    // const todos=props.todos;
    const handleDelete =(id)=>{
        deleteDataTodo(id)
    }
return(

    <div className="title">
        {props.title}
          {todos.map(todo =>{
            return(
                <div key={todo.id}>
              <li className="todos-child" key={todo.id}>{todo.title}<span 
              onClick={()=>handleDelete(todo.id)}> x </span></li>
              </div>
            )
          })}
          <hr/>
        </div>
)
}
export default Todo;