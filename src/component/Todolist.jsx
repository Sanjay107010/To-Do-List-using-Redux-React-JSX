import React, { useState } from "react";
import { FcAddDatabase } from "react-icons/fc";
import { addtodo, deletetodo, removetodo } from "../redux/action/index.jsx";
import { useSelector, useDispatch } from "react-redux";

const Todolist = () => {
  const [inputdata, setInputData] = useState("");
  const dispatch = useDispatch();
  const List = useSelector((state) => state.todoreducer.List);

  return (
    <div className="head">
      <p className="para">To Do List </p>
      <div>
        <input
          type="text"
          placeholder="enter list"
          value={inputdata}
          onChange={(e) => setInputData(e.target.value)}
        />
        <FcAddDatabase
          size={25}
          onClick={() => dispatch(addtodo(inputdata), setInputData(""))}
        />
      </div>
      {console.log("first", List)}
      {List.map((item) => {
        return (
          <div className="del" key={item.id}>
            <p>{item.data}</p>
            <button
              className="button"
              onClick={() => dispatch(deletetodo(item.id), setInputData(""))}
            >
              Delete
            </button>
            <br />
          </div>
        );
      })}
      <button className="btn" onClick={() => dispatch(removetodo())}>
        Remove
      </button>
    </div>
  );
};

export default Todolist;
