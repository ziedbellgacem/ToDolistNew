import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { done, Add } from "../Redux/action/Add";

function AddTask() {
  const dispatch = useDispatch();
  const [des, setDes] = useState("");

  // methods
  const handlAdd = (e) => {
    e.preventDefault();
    dispatch(Add(des));
    setDes("");
  };

  // return
  return (
    <div>
      <Form
        className="add"
        onSubmit={des === "" ? () => alert("enter description") : handlAdd}
      >
        <Form.Control
          type="text"
          placeholder="enter text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />
        <Button variant="outline-warning" onClick={handlAdd}>
          Add
        </Button>
        <DropdownButton id="dropdown-basic-button" title="Filter">
          <Dropdown.Item onClick={() => dispatch(done("all"))}>
            All
          </Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(done("done"))}>
            Done
          </Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(done("undone"))}>
            InDone
          </Dropdown.Item>
        </DropdownButton>
      </Form>
    </div>
  );
}

export default AddTask;
