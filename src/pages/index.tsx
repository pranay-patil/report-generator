import "../styles/globals.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import InputF from "./components/InputF";

import Cart from "./components/Cart";
import Chart1 from "./components/Chart1";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <InputF></InputF>
      <h1>Dashboard Report</h1>
      <Cart></Cart>
      <Chart1></Chart1>

      {/* <Card></Card> */}
      {/* <User></User> */}
    </div>
  );
}
