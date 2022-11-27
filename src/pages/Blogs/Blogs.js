import React from 'react';
import question from '../../assets/images/question.svg'
import { AiFillCaretRight } from "react-icons/ai";


const Blogs = () => {
    return (
        <div>
            <img style={{ maxWidth: "380px" }} className='ms-auto d-block' src={question} alt="" />
            <div>
                <div style={{ borderLeft: "2px solid gray" }} className='mb-4 ps-3'>
                    <h2><AiFillCaretRight /> How does prototypical inheritance work?</h2>
                    <p>In javascript, sharing a property of an object to another object is called prototype chain. Every
                        object in javascript has a built-in object, prototype. Prototype is also an object so it also has a
                        prototype. This is called prototypical chain. When we try to access any property of an object and
                        there is no property on that name then prototype searches for the property. If also there is no
                        found any property in prototype then prototyp’s prototypes searches for the property. And the end
                        if there is no property is found then the chain returns null or undefined.</p>
                </div>
                <div style={{ borderLeft: "2px solid gray" }} className='mb-4 ps-3'>
                    <h2><AiFillCaretRight /> What are the different ways to manage a state in a React application?</h2>
                    <p>
                        There are some ways to manage state in react. First is useState hook. We can easily store and
                        update state by useState hook. For more complex or logic we use useReducer hook. Or we can
                        use other libraries to manage state like Redux.
                    </p>
                </div>
                <div style={{ borderLeft: "2px solid gray" }} className='mb-4 ps-3'>
                    <h2><AiFillCaretRight /> React vs. Angular vs. Vue?</h2>
                    <p>
                        There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.
                        React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.
                        They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.
                        Each framework is component-based and allows the rapid creation of UI features.
                    </p>
                </div>
                <div style={{ borderLeft: "2px solid gray" }} className='mb-4 ps-3'>
                    <h2><AiFillCaretRight /> What is a unit test? Why should we write unit tests?</h2>
                    <p>
                        Unit testing is a level of software testing where individual units/components of a software are tested. In the React world this means testing an individual React Component or pure functions. Testing is essential to guarantee a stable application. Unit testing in particular is possibly the most important part of testing. <br />Writing unit tests when you start developing new code or fixing existing code saves you time and money. You have greater confidence when changing your code base knowing that you can rely upon a consistent suite of unit tests. The software products which are produced as a result of unit testing are more stable and easier to change.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;