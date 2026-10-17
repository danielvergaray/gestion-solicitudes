import React from "react";
import Button from "react-bootstrap/Button";

const ButtonCreator = ({ texto }) => {
  return <Button variant="primary">{texto}</Button>;
};

export default ButtonCreator;
