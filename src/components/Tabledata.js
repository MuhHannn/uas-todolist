import { useState } from "react";
import Button from "react-bootstrap/Button";

function Tabledata(props) {
  const [task, setTask] = useState(true);

  return (
    <tr task={task}>
      <td>
        <input type="checkbox"></input>
      </td>
      <td className="d-flex justify-content-between align-items-center">
        {props.text}
        <Button variant="warning">Edit</Button>
      </td>
      <td>
        <Button variant="danger" onClick={() => setTask(false)}>
          Hapus
        </Button>
      </td>
    </tr>
  );
}

export default Tabledata;
