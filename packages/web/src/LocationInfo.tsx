import React, { useRef } from "react";
import { css } from "glamor";
import { Link } from "react-router-dom";

export default function LocationInfo({
  id,
  name,
  tel,
  address,
  fax,
  email,
}: any) {
  const link: any = useRef(null);
  const down = useRef(0);

  // Make the entire card clickable accessibly
  // https://inclusive-components.design/cards/
  const handleMouseDown = (e: any) => {
    down.current = +new Date();
  };

  const handleMouseUp = (e: any) => {
    const up = +new Date();
    if (up - down.current < 200) {
      link.current.click();
    }
  };

  const style = css({
    padding: "1rem 2rem",
    lineHeight: 1.25,
    cursor: "pointer",
  });

  const headingStyle = css({
    fontWeight: 500,
    fontSize: "1.25rem",
    marginBottom: ".5rem",
  });

  const headingLinkStyle = css({
    color: "black",
    textDecoration: "none",

    ":hover": {
      textDecoration: "underline",
    },
  });

  const addressStyle = css({
    marginBottom: ".5rem",
  });

  return (
    <div {...style} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <h2 {...headingStyle}>
        <Link {...headingLinkStyle} innerRef={link} to={`/${id}`}>
          {name}
        </Link>
      </h2>
      <div {...addressStyle}>
        <p>
          {address.line1} {address.line2}
        </p>
        <p>
          {address.city}, {address.state} {address.zip}
        </p>
      </div>
      {tel && (
        <p>
          Tel: <a href={"tel:" + tel}>{tel}</a>
        </p>
      )}
      {fax && (
        <p>
          Fax: <a href={"tel:" + fax}>{fax}</a>
        </p>
      )}
      {email && (
        <p>
          Email: <a href={"mailto:" + email}>{email}</a>
        </p>
      )}
    </div>
  );
}
