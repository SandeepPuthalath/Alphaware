import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="p-10">
        <Outlet />
      </div>
    </>
  );
}

export default App;
