import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
  Prompt
} from "react-router-dom";

const AddBook = ({ factory }) => {
    const newBook = {userName: "", userPass: "" };
    const [book, setBook] = useState({ ...newBook });
    let [isBlocking, setIsBlocking] = useState(false);
  
    const handleChange = event => {
      const target = event.target;
      const value = target.value;
      const name = target.id;
      setBook({ ...book, [name]: value });
      setIsBlocking(true);
    };
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log(book)
      //if(book.userName !== "" || book.userPass !== "") {
      factory.createUser(book.userName, book.userPass);
      //}
      setBook({ ...newBook });
      event.target.reset();
      setIsBlocking(false);
    }
  
    return (
      <div>
        <h1>Add a book</h1>
        <form
          className="form-horizontal"
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <Prompt
            when={isBlocking}
            message={location =>
              `Are you sure you want to go to ${location.pathname}`
            }
          />
          <div className="form-group">
            <div className="col-sm-9">
              <input
                className="form-control"
                id="userName"
                placeholder="Enter userName"
                value={book.userName}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-9">
              <input
                className="form-control"
                id="userPass"
                placeholder="Enter userPass"
                value={book.userPass}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-primary">
                create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  export default AddBook;