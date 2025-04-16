import "../styles/globals.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import InputF from "./components/InputF";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <InputF></InputF>
      <h1>Dashboard Report</h1>

      {/* <Card></Card> */}
      {/* <User></User> */}
    </div>
  );
}
