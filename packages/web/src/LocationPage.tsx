import React from "react";
import data from "./locationDataMock";

export default function LocationPage({ id }: any) {
  // TODO this should be replaced with query (or looking at a cache)
  const { name } = data.find(loc => loc.id.toString() === id)!;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
