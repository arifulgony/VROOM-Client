import React from 'react';
import './Blog.css'


const Blog = () => {
    return (   
            <div className="main-contain">
                <div className='container pt-2'>
                    <div className='question'>
                        <li className="question-text">What are the different ways to manage a state in a React application ?</li>
                        
                            <h6>Ans : 
                            React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app .
                            </h6>
                     </div>
                    <div className='question'>
                        <li className="question-text">How does prototypical inheritance work ?</li>
                        <h6>Ans :  The object from where the properties are inherited is called the prototype .Inheritance solves the problem of data and logic duplication. By inheriting, objects can share properties and methods without the need of manually setting those properties and methods on each object.
                        </h6>
                    </div> 
                    <div className='question'>
                        <li className="question-text">What is a unit test? Why should we write unit tests?</li>
                        <h6>Ans :
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages .
                        </h6>           
                   </div>
                    <div className='question'>
                        <li className="question-text">
                        How does NodeJS handle multiple requests at the same time?
                        </li>
                        <h6>Ans :
                        This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.
                        Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js
                        </h6>
                    </div>
                </div>
            </div>
           );
};

export default Blog;




