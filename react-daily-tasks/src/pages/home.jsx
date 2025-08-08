import { Typography } from "@mui/material";
import { Link } from "react-router";

function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-slate-900 min-h-screen">
      <div className="w-1/2 flex flex-col gap-5">
        <div>
          <Typography variant="h5" color="white" marginBottom={1}>
            Day 2
          </Typography>
          <div className="flex justify-center flex-wrap gap-5">
            <Link
              to="/login"
              className="bg-slate-800 px-8 py-3 text-white rounded-md w-48 text-center"
            >
              Login Page
            </Link>
            <Link
              to="/products"
              className="bg-slate-800 px-8 py-3 text-white rounded-md w-48 text-center"
            >
              Products
            </Link>
            <Link
              to="/dashboard"
              className="bg-slate-800 px-8 py-3 text-white rounded-md w-48 text-center"
            >
              Dashboard
            </Link>
          </div>
        </div>
        <div>
          <Typography variant="h5" color="white" marginBottom={1}>
            Day 3
          </Typography>
          <div className="flex  justify-center flex-wrap gap-5">
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
        </div>

        <div>
          <Typography variant="h5" color="white" marginBottom={1}>
            Day 4
          </Typography>
          <div className="flex justify-center flex-wrap gap-5">
            <Link
              to="/accordion"
              className="bg-slate-800 px-8 py-3 text-white rounded-md w-72 text-center"
            >
              Accordion
            </Link>
            <Link
              to="/todo"
              className="bg-slate-800 px-8 py-3 text-white rounded-md w-72 text-center"
            >
              Todo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
