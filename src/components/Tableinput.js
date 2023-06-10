import Button from "react-bootstrap/Button";

function Tableinput() {
  return (
    <div className="mt-5">
      <div>
        <h1>Jadwal Kegiatan Harian</h1>
      </div>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <input
          placeholder="Tambahkan Kegiatan Anda"
          className="col-10 py-2 px-2"
        ></input>
        <Button variant="primary">Tambah Kegiatan</Button>
      </div>
    </div>
  );
}

export default Tableinput;
