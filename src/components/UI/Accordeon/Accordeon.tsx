import React, { useState } from "react";
import cl from "./Accordeon.module.css";

function Accordeon({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) {
  const [typeState, setTypeState] = useState(false);

  function click(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    setTypeState(!typeState);
    const temp = (e.target as HTMLInputElement).parentNode
      ?.childNodes[1] as HTMLElement;
    temp.style.height = !typeState ? `${temp.scrollHeight}px` : `0`;
  }

  return (
    <div className={cl.accordeon}>
      <div className={cl.name__block} onClick={click}>
        <h2 className={typeState ? cl.name : cl.name + " " + cl.opened}>
          {name}
        </h2>
      </div>
      <div className={cl.box}>{children}</div>
    </div>
  );
}

export default Accordeon;
