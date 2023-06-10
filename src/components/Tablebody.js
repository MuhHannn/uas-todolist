import Tabledata from "./Tabledata";
import Table from "react-bootstrap/Table";

function Tablebody() {
  return (
    <Table className="mt-5" striped bordered hover>
      <thead className="">
        <tr className="">
          <th className="col-2">Check</th>
          <th className="col-6">Kegiatan</th>
          <th className="col-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <Tabledata text="delectus aut autem" />
      </tbody>
    </Table>
  );
}

export default Tablebody;
