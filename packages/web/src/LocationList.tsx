import React from "react";
import { css } from "glamor";
import locationData from "./locationDataMock";
import LocationInfo from "./LocationInfo";

export default function LocationList() {
  const style = css({
    padding: "0 1rem"
  });

  const itemStyle = css({
    ":not(:last-child)": {
      borderBottom: "1px black solid"
    }
  });
  return (
    <ol {...style}>
      {locationData.map(location => (
        <li key={location.id} {...itemStyle}>
          <LocationInfo {...location} />
        </li>
      ))}
    </ol>
  );
}
