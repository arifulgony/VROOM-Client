import React from 'react';




const CoursesCart = ({ singleCourse, setModal }) => {
  const { description, image, price, name, location, original, years } =
    singleCourse;

  return (
    <div className="card card-compact bg-base-100 bg-color shadow-xl">
      <img src={image} alt="" />

      <div className="card-body">
        <h1 className="text-2xl font-semibold"> {name}</h1>
        <p className="text-1xl font-semibold">Resale Price: {price}</p>
        <p className="text-1xl font-semibold">Original Price: {original}</p>
        <p className="text-1xl font-semibold">Years of use: {years}</p>
        <h3>Location :{location}</h3>
        <div className="card-actions ">
          {description.length > 200 ? (
            <p>{description.slice(0, 200) + "..."} </p>
          ) : (
            <p>{description} </p>
          )}
          <div>
            <label
              onClick={() => setModal(singleCourse)}
              htmlFor="my-modal"
              className='btn btn-outline'
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCart;