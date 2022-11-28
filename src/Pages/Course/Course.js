import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCart from '../CoursesCart/CoursesCart';

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses)
    return (
      <div>
       
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8">
            {
               courses?.map(singleCourse =><CoursesCart key={singleCourse._id} singleCourse={singleCourse} ></CoursesCart> )
            }
            </div>
          </div>
        </div>
        </div>
    );
};

export default Courses;