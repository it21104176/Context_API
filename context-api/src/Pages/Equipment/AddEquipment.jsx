import { useContext, useState } from "react";
import { EquipmentContext } from "../../context/EquipmentContext";
import { Link } from "react-router-dom";

export default function AddUser() {
  let { addEquipment } = useContext(EquipmentContext);

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let equipment = {
      userId: userId,
      userName: userName,
      description: description,
      rentalPrice: rentalPrice,
      availability: availability,
    };
    addEquipment(equipment);
    setUserId("");
    setUserName("");
    setDescription("");
    setRentalPrice("");
    setAvailability("");
    alert("equipment added");
  };

  return (
    <div>
      <div>
        <Link to='/equipment'>Back</Link>
      </div>
      <h2 className='header'>Power Equipment Renting System - Add Equipment</h2>
      <form className='add-user-class' onSubmit={handleSubmit}>
        <label htmlFor='userId'>Id</label>
        <div>
          <input type='text' onChange={(e) => setUserId(e.target.value)} id='userId' />
        </div>
        <label htmlFor='userName'>UserName</label>
        <div>
          <input type='text' id='userName' onChange={(e) => setUserName(e.target.value)} />
        </div>
        <label htmlFor='description'>Description</label>
        <div>
          <input onChange={(e) => setDescription(e.target.value)} type='text' id='description' />
        </div>
        <label htmlFor='rentalPrice'>Rental Price</label>
        <div>
          <input onChange={(e) => setRentalPrice(e.target.value)} type='text' id='rentalPrice' />
        </div>
        <label htmlFor='availability'>Availability</label>
        <div>
          <input onChange={(e) => setAvailability(e.target.value)} type='text' id='availability' />
        </div>
        <div>
          <button type='submit'>Add equipment</button>
        </div>
      </form>
    </div>
  );
}
