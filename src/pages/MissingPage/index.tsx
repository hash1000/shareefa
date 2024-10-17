import React from "react";

function MissingPage(): React.ReactElement {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <span className="font-bold text-xl first-letter:text-red-800 first-letter:text-2xl">
        Error 404!! Page Not Found
      </span>
    </div>
  );
}

export default MissingPage;
