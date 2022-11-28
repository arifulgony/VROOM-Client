import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import CoursesCart from './../../CoursesCart/CoursesCart';
import Modal from '../../CoursesCart/Modal/Modal'


const ProductCard = () => {
  const [catagory, setCatagory] = useState();
  const [modal, setModal] = useState(null);
  const { filter } = useContext(AuthContext);

  const {data: doctors} = useQuery({
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

  useEffect(() => {
    
          if(filter === "Microbus"){
              const filter = doctors?.filter((item)=>item.category === "microbus")
              setCatagory(filter)
          }
          if(filter === "Luxury-car"){
              const filter = doctors?.filter((item)=>item.category === "luxury-car")
              setCatagory(filter)
          }

          if(filter === "Electric-car"){
              const filter = doctors?.filter((item)=>item.category === "electric-car")
              setCatagory(filter)
          }
  }, []);
  console.log(catagory)


  return (
    <div className="px-5 my-10">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {catagory?.map((singleCourse, i) => (
          <CoursesCart
            key={singleCourse._id}
            singleCourse={singleCourse}
            setModal={setModal}
          ></CoursesCart>
        ))}
      </div>
      { modal &&
        <Modal 
      modal={modal}
      setModal={setModal}
      ></Modal>
      }
    </div>
  );
};

export default ProductCard;