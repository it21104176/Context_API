import { UserContext } from "../context/UserContext";
import { useState } from "react";
//address, phone number, and rented equipment.
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
      userId: 1,
      userName: "John Doe",
      address: "test address 1/A",
      phoneNumber: "123-456-7890",
      rentedEquipment: "equipment",
    },
    {
      userId: 2,
      userName: "Jane mite",
      address: "test address 2/A",
      phoneNumber: "123-456-7890",
      rentedEquipment: "equipment",
    },
    {
      userId: 3,
      userName: "John Smith",
      address: "test address 3/C",
      phoneNumber: "123-456-7890",
      rentedEquipment: "equipment",
    },
    {
      userId: 4,
      userName: "Jane Smith",
      address: "test address",
      phoneNumber: "123-456-7890 1/A",
      rentedEquipment: "equipment",
    },
    {
      userId: 5,
      userName: "John Doe",
      address: "test address 1/P",
      phoneNumber: "123-456-7890",
      rentedEquipment: "equipment",
    },
    {
      userId: 6,
      userName: "Jane mite",
      address: "test address 1/C",
      phoneNumber: "123-456-7890",
      rentedEquipment: "equipment",
    },
    {
      userId: 7,
      userName: "John Smith",
      address: "test address 4/B",
      phoneNumber: "123-456-7890",
      rentedEquipment: "equipment",
    },
    {
      userId: 8,
      userName: "Jane Smith",
      address: "test address",
      phoneNumber: "123-456-7890 S/A",
      rentedEquipment: "equipment",
    },
    {
      userId: 9,
      userName: "John Doe",
      address: "test address",
      phoneNumber: "123-456-7890 1/A",
      rentedEquipment: "equipment",
    },
    {
      userId: 10,
      userName: "Jane mite",
      address: "test address 1/A",
      phoneNumber: "123-456-7890",
      rentedEquipment: "equipment",
    },
  ]);

  const addUser = (newUser) => {
    setUser([...user, newUser]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = user.map((user) =>
      user.userId === updatedUser.userId ? updatedUser : user
    );
    setUser(updatedUsers);
  };

  const deleteUser = (userId) => {
    const updatedUsers = user.filter((userData) => userData.userId !== userId);
    setUser(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ user, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
