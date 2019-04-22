import * as React from "react";
import { Dialog } from "@material-ui/core";
import { ReactNode, useState, useEffect } from "react";
import Container from "./Container";

let callback = (_node: ReactNode) => {};

const sendAlert = (node: ReactNode | string) => {
  if (callback) {
    callback(node);
  }
};

const Alert: React.FC = () => {
  const [children, setChildren] = useState(null as ReactNode);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    callback = (node: ReactNode | string) => {
      setChildren(node);
      setOpen(true);
    };
    return () => {
      callback = (_node: ReactNode | string) => {};
    };
  });
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Container>{children}</Container>
    </Dialog>
  );
};

export default Alert;

export { sendAlert };
