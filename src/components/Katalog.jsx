import React from "react";
import barang1 from "../assets/barang1.jpg";
import barang2 from "../assets/barang2.jpg";
import barang3 from "../assets/barang3.jpg";
import barang4 from "../assets/barang4.jpg";

function Katalog() {
  return (
    <div className="container mt-3">
      <div className="text-center">
        <h1>Katalog Barang</h1>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="card">
            <img className="card-img-top" src={barang1} alt="" />
            <div className="card-body">
              <h5 className="card-title">Vidio / Audio</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="card">
            <img className="card-img-top" src={barang2} alt="" />
            <div className="card-body">
              <h5 className="card-title">Kitchen Appliance</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="card">
            <img className="card-img-top" src={barang4} alt="" />
            <div className="card-body">
              <h5 className="card-title">Climate Appliance</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="card">
            <img className="card-img-top" src={barang3} alt="" />
            <div className="card-body">
              <h5 className="card-title">Household Aplliance</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Katalog;
