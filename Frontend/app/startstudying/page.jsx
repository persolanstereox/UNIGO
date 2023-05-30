"use client";

import Sections from "./Sections";

import { FetchContextProvider } from "./FetchContext";

function StartStudying() {
  return (
    <FetchContextProvider>
      <main>
        <Sections />
      </main>
    </FetchContextProvider>
  );
}

export default StartStudying;
