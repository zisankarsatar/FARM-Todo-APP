import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Update() {
  const { state } = useLocation();
  const { id, title, description } = state;

  const [formData, setFormData] = useState({
    id: id,
    title: title,
    description: description,
  });

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

  function sendForm(e) {
    e.preventDefault();

    axios
      .put("http://localhost:8000/api/todo/" + id, formData)
      .then((res) => {
        console.log(res);
        window.location.href = "http://localhost:3000/";
      });
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
                  defaultValue={title}
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
                  placeholder="Description"
                  defaultValue={description}
                  onChange={handleInput}

                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <div className="col-sm-12">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
