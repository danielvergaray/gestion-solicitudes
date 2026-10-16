import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
const Panel = () => {
  return (
    <section className="panel-container">
      <h1>Dashboard</h1>
      <div className="panel">
        <div className="panel-header">
          <h2>Invoice</h2>
          <div className="panel-header-lupa">
            <CiSearch />
          </div>
          <div className="panel-header-filter">
            <CiFilter />
          </div>
          <button>New invoice</button>
        </div>
      </div>
      <div>
        <p>Aca va la opcion del menu</p>
      </div>
    </section>
  );
};

export default Panel;
