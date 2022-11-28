import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Service = ({ service }) => {
  const { setFilter } = useContext(AuthContext);

  const { data: products } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(" https://server-tau-one.vercel.app/allProducts", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const navigate = useNavigate();

  const Submit = (_id) => {
    setFilter(_id);
    navigate(`/product-card`);

    // console.log(id)
  };

  const {  description, img, button } = service;
  return (
       <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={img} alt="img" /></figure>
        <div className="card-body">
          <h2 className="card-title">{button}</h2>
          <p>{description}</p>
            <div className="card-actions justify-end">
              <button  onClick={() => Submit(button)}> GO NOW</button>
            </div>
        </div>
      </div>
  );
};

export default Service;