import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

export default function EditUserForm({ userId, onClose }) {
  const { user, updateUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rentedEquipment, setRentedEquipment] = useState("");

  useEffect(() => {
    // Fetch the user data based on the userId and populate the form fields
    const selectedUser = user.find((userData) => userData.userId === userId);
    if (selectedUser) {
      setUserName(selectedUser.userName);
      setAddress(selectedUser.address);
      setPhoneNumber(selectedUser.phoneNumber);
      setRentedEquipment(selectedUser.rentedEquipment);
    }
  }, [userId, user]);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleRentedEquipmentChange = (event) => {
    setRentedEquipment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the user data with the edited values
    const updatedUser = {
      userId,
      userName,
      address,
      phoneNumber,
      rentedEquipment,
    };
    updateUser(updatedUser);

    // Close the edit form
    onClose();
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='userName'>Username:</label>
          <input type='text' id='userName' value={userName} onChange={handleUserNameChange} />
        </div>
        <div>
          <label htmlFor='address'>address:</label>
          <input type='text' id='address' value={address} onChange={handleAddressChange} />
        </div>
        <div>
          <label htmlFor='phoneNumber'>Phone Number:</label>
          <input
            type='text'
            id='phoneNumber'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div>
          <label htmlFor='rentedEquipment'>rentedEquipment:</label>
          <input
            type='text'
            id='rentedEquipment'
            value={rentedEquipment}
            onChange={handleRentedEquipmentChange}
          />
        </div>
        <div>
          <button type='submit'>Save</button>
          <button type='button' onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
