import React from 'react';
import quote from '../../../assets/icons/quote.png';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'Driving from last 3 months, this car is really a giant. no need to worry about anything. its Toyota. service is amazing. the 1 cons is it catch everyone attention. people look very weirdly towards you.',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: people2,
            review: 'Toyota Fortuner is one of the best car to be found in the segment of MUV.I appreciate Toyota giving us an amazing car.Amazing specification,features and good maintenance.The Toyota Fortuner is a nice car and people go for it.',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people3,
            review: 'Some people say it is overpriced because they can t afford it.But if you love to drive you should try and if you have budget of 50Lakh you should go for it I will not suggest luxury brand because of it service.',
            location: 'California'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-error font-bold " >CLIENT</h4>
                    <h2 className="text-4xl">Our Happy SELLERS</h2>
                </div>
                <figure>
                    <img className=' lg:w-48' src={quote} alt="logo" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;