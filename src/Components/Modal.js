import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../Redux/action/Add";

function EditCom({ task }) {
  const [text, setText] = useState(task.description);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="edit description"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(edit(task.id, text));
              handleClose();
            }}
          >
            edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCom;
