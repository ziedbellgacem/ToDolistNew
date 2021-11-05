import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Done, Delete, edit } from "../Redux/action/Add";

function Task({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(task.description);
  const dispatch = useDispatch();

  const handelDone = () => {
    dispatch(Done(task.id));
  };

  const handelDelete = () => {
    dispatch(Delete(task.id));
  };

  const toggle = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div className="task">
      {isEdit ? (
        <>
          <FormControl
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <Button
            variant="success"
            onClick={() => {
              dispatch(edit(task.id, text));
              setIsEdit(false);
            }}
          >
            Submit
          </Button>
        </>
      ) : (
        <>
          <h3 style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.description}
          </h3>
          <Button variant="outline-info" onClick={toggle}>
            Edit
          </Button>
          <Button variant="outline-primary" onClick={handelDelete}>
            Delete
          </Button>
          <Button variant="danger" onClick={handelDone}>
            {task.done ? "inDone" : "Done"}
          </Button>
        </>
      )}
    </div>
  );
}
export default Task;
