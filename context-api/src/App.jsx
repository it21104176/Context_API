import { UserProvider } from "./provider/UserProvider";
import { EquipmentProvider } from "./provider/EquipmentProvider";
import UserPage from "./Pages/User/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./Pages/User/AddUser";
import AddEquipment from "./Pages/Equipment/AddEquipment";
import Home from "./Pages/Home/Home";
import EditEquipment from "./Pages/Equipment/EditEquipment";
import EditUser from "./Pages/User/EditUser";
import Equipment from "./Pages/Equipment/Equipment";
export default function App() {
  return (
    <UserProvider>
      <EquipmentProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/addUser' element={<AddUser />} />
            <Route path='/equipment' element={<Equipment />} />
            <Route path='/editequipment' element={<EditEquipment />} />
            <Route path='/edituser' element={<EditUser />} />
            <Route path='/addEquipment' element={<AddEquipment />} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </EquipmentProvider>
    </UserProvider>
  );
}
