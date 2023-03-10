import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>About Us</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem.
        </p>
      </div>
      <div className="row content">
        <div className="col-lg-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              <i className="ri-check-double-line"></i> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat
            </li>
            <li>
              <i className="ri-check-double-line"></i> Duis aute irure dolor in
              reprehenderit in voluptate velit
            </li>
            <li>
              <i className="ri-check-double-line"></i> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat
            </li>
          </ul>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
