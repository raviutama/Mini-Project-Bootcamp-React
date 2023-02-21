import React from "react";

function TabelBarang({ showEdit }) {
  function editData() {
    showEdit();
  }

  return (
    <div>
      <h4>Tabel Data Barang</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Barang</th>
            <th>Jumlah Barang</th>
            <th>Harga</th>
            <th className="col-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Komputer</td>
            <td>10</td>
            <td>5.000.000</td>
            <td>
              <button
                className="btn btn-sm btn-warning mx-2"
                onClick={() => editData()}
              >
                Edit
              </button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TabelBarang;
