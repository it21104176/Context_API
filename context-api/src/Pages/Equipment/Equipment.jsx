import { useContext, useState } from "react";
import { EquipmentContext } from "../../context/EquipmentContext";
import { Link } from "react-router-dom";
import EditUserForm from "./EditEquipment";
import "./Equipment.css";

export default function Equipment() {
  const { equipment, deleteEquipment } = useContext(EquipmentContext);
  const [editEquipmentId, setEditEquipmentId] = useState(null);

  const handleEdit = (userId) => {
    setEditEquipmentId(userId);
  };

  const handleEditClose = () => {
    setEditEquipmentId(null);
  };

  const handleDelete = (userId) => {
    deleteEquipment(userId);
  };

  return (
    <div>
      <h2 className='header'>Power Equipment Renting System - Equipment</h2>
      <Link to='/addEquipment'>Add Equipment</Link>

      <table className='user-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Description</th>
            <th>Rental Price</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((userData) => (
            <tr key={userData.userId}>
              <td>{userData.userId}</td>
              <td>{userData.userName}</td>
              <td>{userData.description}</td>
              <td>{userData.rentalPrice}</td>
              <td>{userData.availability}</td>
              <td>
                <div className='user-button'>
                  <button className='user-button-edit' onClick={() => handleEdit(userData.userId)}>
                   <Link to='/editequipment'> Edit</Link>
                  </button>
                  <button
                    className='user-button-delete'
                    onClick={() => handleDelete(userData.userId)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editEquipmentId && <EditUserForm userId={editEquipmentId} onClose={handleEditClose} />}
      <Link to='/'>Back</Link>
    </div>
  );
}
