import React from "react";
import { css } from "glamor";
import locationData from "./locationDataMock";
import LocationInfo from "./LocationInfo";

export default function LocationList() {
  const style = css({
    padding: "0 1rem"
  });
  return (
    <ol {...style}>
      {locationData.map(location => (
        <li>
          <LocationInfo {...location} />
        </li>
      ))}
    </ol>
  );
}
