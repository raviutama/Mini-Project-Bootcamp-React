import React, { useState } from "react";
import TabelBarang from "./TabelBarang";

function ManajemenBarang() {
  //PART DATA
  const [formMode, setFormMode] = useState("");
  //PART EVENT HANDLING
  function showCreateForm() {
    setFormMode("show");
  }
  function showEditForm() {
    setFormMode("show");
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Barang</h1>

      <button className="btn btn-sm btn-primary my-2" onClick={showCreateForm}>
        Tambah Barang
      </button>

      {/* input form */}
      {formMode === "show" && (
        <div id="form" className="card py-2 my-3 bg-primary">
          <div className="card-body">
            <h4>Form Barang</h4>
            <form className="row">
              <div className="col-lg-4 col-4 px-1">
                <input
                  type="text"
                  name="nama-barang"
                  className="form-control "
                  placeholder="Nama Barang..."
                />
              </div>
              <div className="col-lg-2 col-2 px-1">
                <input
                  type="text"
                  name="jumlah-barang"
                  className="form-control "
                  placeholder="Jumlah Barang.."
                />
              </div>
              <div className="col-lg-4 col-4 px-1">
                <input
                  type="text"
                  name="harga"
                  className="form-control "
                  placeholder="Harga Barang.."
                />
              </div>
              <div className="col-lg-2 col-2 px-1">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="submit"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {/* tabel data barang */}
      <TabelBarang showEdit={showEditForm} />
    </div>
  );
}

export default ManajemenBarang;
