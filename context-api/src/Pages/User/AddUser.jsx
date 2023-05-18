import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import "./User.css";

export default function AddUser() {
  let { addUser } = useContext(UserContext);

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rentedEquipment, setRentedEquipment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      userId: userId,
      userName: userName,
      address: address,
      phoneNumber: phoneNumber,
      rentedEquipment: rentedEquipment,
    };
    addUser(user);
    setUserId("");
    setUserName("");
    setAddress("");
    setPhoneNumber("");
    setRentedEquipment("");
    alert("User added");
  };

  return (
    <div>
      <div>
        <Link to='/'>Back</Link>
      </div>
      <h2 className='header'>Power Equipment Renting System -Add Customer</h2>
      <form className='add-user-class' onSubmit={handleSubmit}>
        <label htmlFor='userId'>Id</label>
        <div>
          <input type='text' onChange={(e) => setUserId(e.target.value)} id='userId' />
        </div>
        <label htmlFor='userName'>UserName</label>
        <div>
          <input type='text' id='userName' onChange={(e) => setUserName(e.target.value)} />
        </div>
        <label htmlFor='address'>address</label>
        <div>
          <input onChange={(e) => setAddress(e.target.value)} type='text' id='address' />
        </div>
        <label htmlFor='phoneNumber'>phoneNumber</label>
        <div>
          <input onChange={(e) => setPhoneNumber(e.target.value)} type='text' id='phoneNumber' />
        </div>
        <label htmlFor='rentedEquipment'>rentedEquipment</label>
        <div>
          <input
            onChange={(e) => setRentedEquipment(e.target.value)}
            type='text'
            id='rentedEquipment'
          />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
}
