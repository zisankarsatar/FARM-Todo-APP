import axios from 'axios';


export default function Todo(props) {

  const deleteTodo = async (id) =>{
    if(id){
      axios.delete('http://localhost:8000/api/todo/' + id).then((res)=>{
        window.location.href = "http://localhost:3000/";
      });
    }
  }

  return (
    <div className="col-sm-4" key={props.index}>
      <div className="card border-success m-3" style={{ maxwidth: "18rem" }}>
        <div className="card-header">
          <h5>{props.todo.title}</h5>
        </div>
        <div className="card-body text-success">
          <p className="card-text">{props.todo.description}</p>
          <hr/>
          <a type="button" className="btn btn-danger m-1" onClick={() => deleteTodo(props.todo.id)}>Delete</a>
          <button type="button" className="btn btn-primary">Edit</button>


        </div>
      </div>
    </div>
  );
}
