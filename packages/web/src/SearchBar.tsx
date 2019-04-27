import React from "react";
import { css } from "glamor";

export default function SearchBar() {
  const style = css({
    width: "100%",
    fontSize: "1.5rem",
    padding: ".5rem",
    border: "none",
    borderBottom: "2px black solid"
  });

  // TODO needs label
  return <input {...style} placeholder="Search..." type="text" />;
}
