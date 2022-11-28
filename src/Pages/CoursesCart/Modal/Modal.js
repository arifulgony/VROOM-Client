import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';




const Modal = ({ modal, setModal }) => {
  const { name: product, price: productPrice } = modal;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const orders = {
      userName,
      email,
      phone,
      price,
      location,
    };
    fetch(" https://server-tau-one.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setModal(null);
          toast.success("orders confirmed");
          
        } else {
          toast.error(data?.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{product}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="userName"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="text"
              disabled
              defaultValue={product}
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              disabled
              defaultValue={productPrice}
              placeholder="Price"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;