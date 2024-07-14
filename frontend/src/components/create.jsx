import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';


export default function Create() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const unique_id = uuid();

  // function validateForm() {
  //     const {title, description} = formData;
  //     if(title === "" | description === "" ){
  //         return false;
  //     }
  //     return true;
  // }

  
  function handleInput(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function sendForm(e){
    e.preventDefault();

    axios.post('http://localhost:8000/api/todo', {id: unique_id, ...formData}).then(
        (res) => {
            console.log(res)
            window.location.href = "http://localhost:3000/";
        }
    )
    
  }

  return (
    <div className="contianer">
      <div className="card mt-3">
        <div className="card-header">
          <h5>Create Todo</h5>
        </div>
        <div className="card-body">
          <form onSubmit={sendForm}>
            <div className="form-group row mb-3">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={handleInput}
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <input
                  type="textarea"
                  className="form-control"
                  name="description"
                  onChange={handleInput}
                  placeholder="Description"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <div className="col-sm-12">
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
