import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./components/Routes/Routes";

function App() {
  return (
    <div className="bg-blue-200">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
