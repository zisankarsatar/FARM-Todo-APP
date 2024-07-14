import {useNavigate}  from "react-router-dom";

export default function Todo(props) {
  const navigate = useNavigate();

  return (
    <div className="col-sm-4" key={props.index}>
      <div className="card border-success m-3" style={{ maxwidth: "18rem" }}>
        <div className="card-header">
          <h5>{props.todo.title}</h5>
        </div>
        <div className="card-body text-success">
          <p className="card-text">{props.todo.description}</p>
          <hr/>
          <a type="button" className="btn btn-danger m-1" onClick={() => props.delete(props.todo.id)}>Delete</a>
          <button type="button" className="btn btn-primary" onClick={()=>{navigate('/update' , {state : {id : props.todo.id , title: props.todo.title, description: props.todo.description  }})}}>Edit</button>


        </div>
      </div>
    </div>
  );
}
