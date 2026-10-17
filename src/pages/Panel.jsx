import React, { useContext } from "react";
import ButtonCreator from "../components/reutilizables/ButtonCreator";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import GeneralContext from "../context/GeneralContext";
import { NavLink } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import PaginationCreator from "../components/reutilizables/PaginationCreator";

const Panel = () => {
  const { panel, panelOperaciones } = useContext(GeneralContext);

  return (
    <section className="panel-container">
      <h1>Dashboard</h1>
      <div className="panel">
        <div className="panel-header">
          <h2>Invoice</h2>
          <div className="panel-header-opciones">
            <CiSearch />
            <CiFilter />

            <ButtonCreator texto={"Nueva Factura"} />
          </div>
        </div>
        <div className="panel-body">
          <div className="panel-body-titles">
            <i>pdf</i>
            <div>
              {panel.header.map((opcion) => (
                <p>{opcion}</p>
              ))}
            </div>
          </div>
          <div className="panel-body-content">
            {panel.body.map((item) => (
              <>
                <NavLink to={item.linkPdf}>
                  <FaFilePdf />
                </NavLink>
                <div>
                  <p>{item.numero}</p>
                  <p>{item.comprador}</p>
                  <p>{item.creado}</p>
                  <p>{item.monto}</p>
                  <p>{item.actualizacion}</p>
                  <p>{item.status}</p>
                  <p>{item.comprador}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="panel-footer">
          <div className="panel-footer-contador">
            <p>Total: X</p>
          </div>
          <div className="panel-footer-pages">
            <PaginationCreator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panel;
