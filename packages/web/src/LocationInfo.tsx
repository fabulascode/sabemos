import React from "react";
import { css } from "glamor";

export default function LocationInfo({ name, tel, address, email }: any) {
  const style = css({
    padding: "1rem",
    borderBottom: "1px black solid",
    lineHeight: 1.25
  });

  const headingStyle = css({
    fontWeight: 500,
    fontSize: "1.25rem",
    marginBottom: ".5rem"
  });

  const addressStyle = css({
    marginBottom: ".5rem"
  });
  return (
    <div {...style}>
      <h2 {...headingStyle}>{name}</h2>
      <div {...addressStyle}>
        <p>
          {address.line1}, {address.line2}
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
      {email && (
        <p>
          Email: <a href={"mailto:" + email}>{email}</a>
        </p>
      )}
    </div>
  );
}
