import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {

  const servicesData = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        description: 'We have a good-conditioned and luxurious Noah Microbus Rental. You can buy the microbus of your choice from here',
        img: fluoride,
        button:"Microbus",
    },
    {
        id: 2,
        name: 'Cavity Filling',
        description: 'We have a good-conditioned and luxurious Noah Luxury-car Rental. You can buy the microbus of your choice from here',
        img: cavity,
        button:"Luxury-car"
    },
    {
        id: 3,
        name: 'Teeth Whitening',
        description: 'We have a good-conditioned and luxurious Noah Electric-car Rental. You can buy the microbus of your choice from here',
        img: whitening,
        button:"Electric-car",
    },
];

  return (
    <div className="my-20 ">
      <div className="text-center">
        <h3 className="text-5xl font-bold  py-5 uppercase">
        Category
        </h3>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;