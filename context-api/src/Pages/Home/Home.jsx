import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
    <h1>Power Equipment Renting System:</h1>
    <h2>Equipments</h2>
    <ul>
      <li>Water Pumps</li>
      <li>Chain Saws</li>
      <li>Generator</li>
    </ul><br></br>
    <button><Link to='/equipment'>Equipment</Link></button>
    
    <h2>Customers</h2>
    <ul>
      <li>john</li>
      <li>penny</li>
      <li>jane</li>
    </ul>
    <button><Link to='/user'>User</Link></button>
  </div>
  );
}
