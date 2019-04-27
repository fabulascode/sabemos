import React from "react";
import { css } from "glamor";
import SearchBar from "./SearchBar";
import LocationList from "./LocationList";

// TODO this probably goes on all the pages?
function Header() {
  const style = css({
    padding: "1rem 0"
  });

  const headingStyle = css({
    fontSize: "2.75rem"
  });

  const subheadingStyle = css({});
  return (
    <header {...style}>
      <h1 {...headingStyle}>Sabemos</h1>
      <p {...subheadingStyle}>Setting information free</p>
    </header>
  );
}

/**
 * A landing page with a search bar and a list of offices.
 */
export default function HomePage() {
  const style = css({
    width: "48rem",
    margin: "0 auto"
  });

  return (
    <div {...style}>
      <Header />
      <main>
        <SearchBar />
        <LocationList />
      </main>
    </div>
  );
}
