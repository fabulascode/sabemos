import React from "react";
import LocationList from "./LocationList";

// TODO this probably goes on all the pages?
function Header() {
  return (
    <header>
      <h1>Sabemos</h1>
      <p>For all the juicy ICE knowledge</p>
    </header>
  );
}

function SearchBar() {
  return <div />;
}

/**
 * A landing page with a search bar and a list of offices.
 */
export default function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <LocationList />
    </div>
  );
}
