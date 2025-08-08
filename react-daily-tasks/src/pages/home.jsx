import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-3 bg-slate-900">
      <Link
        to="/count"
        className="bg-slate-800 px-8 py-3 text-white rounded-md w-48 text-center"
      >
        Counter
      </Link>
      <Link
        to="/greet"
        className="bg-slate-800 px-8 py-3 text-white rounded-md w-48 text-center"
      >
        Greet
      </Link>
      <Link
        to="/toggle-visibility"
        className="bg-slate-800 px-8 py-3 text-white rounded-md w-48 text-center"
      >
        Toggle Visibility
      </Link>
    </div>
  );
}

export default Home;
