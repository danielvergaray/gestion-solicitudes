import React from "react";
import GeneralContext from "./GeneralContext";
import { IoOpenOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const GeneralContextProvider = ({ children }) => {
  const panelOperaciones = {
    open: {
      icono: <IoOpenOutline />,
      linkIcono: "",
    },
    edit: {
      icono: <MdEdit />,
      linkIcono: "",
    },
    delete: {
      icono: <MdDelete />,
      linkIcono: "",
    },
  };

  const panel = {
    header: [
      "Numero",
      "Comprador",
      "Fecha creación",
      "Monto",
      "Ultima actualizacion",
      "Status",
      "Modificación",
    ],
    body: [
      {
        linkPdf: "",
        numero: 1,
        comprador: "Daniel",
        creado: "fecha creacion",
        monto: 5000,
        actualizacion: "fecha actualizacion",
        status: "Sucess",
        operacion: {
          panelOperaciones,
        },
      },
      {
        linkPdf: "",
        numero: 2,
        comprador: "Daniel",
        creado: "fecha creacion",
        monto: 5000,
        actualizacion: "fecha actualizacion",
        status: "Sucess",
        operacion: {
          panelOperaciones,
        },
      },
      {
        linkPdf: "",
        numero: 3,
        comprador: "Daniel",
        creado: "fecha creacion",
        monto: 5000,
        actualizacion: "fecha actualizacion",
        status: "Sucess",
        operacion: {
          panelOperaciones,
        },
      },
      {
        linkPdf: "",
        numero: 4,
        comprador: "Daniel",
        creado: "fecha creacion",
        monto: 5000,
        actualizacion: "fecha actualizacion",
        status: "Sucess",
        operacion: {
          panelOperaciones,
        },
      },
      {
        linkPdf: "",
        numero: 5,
        comprador: "Daniel",
        creado: "fecha creacion",
        monto: 5000,
        actualizacion: "fecha actualizacion",
        status: "Sucess",
        operacion: {
          panelOperaciones,
        },
      },
    ],
  };

  const values = {
    panel,
    panelOperaciones,
  };
  return (
    <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
