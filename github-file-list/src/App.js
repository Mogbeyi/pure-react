import React from "react";
import FileList from "./components/FileList";
import testFiles from "./testFiles";

const App = () => {
  return (
    <div>
      <FileList files={testFiles} />
    </div>
  );
};

export default App;
