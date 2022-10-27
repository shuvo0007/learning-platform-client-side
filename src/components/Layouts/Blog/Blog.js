import React from "react";
import Header from "../Header/Header";

const Blog = () => {
  return (
    <>
      <Header></Header>
      <div className="md:text-3xl h-screen mx-10">
        <h2 className="md:text-4xl sm:text-3xl font-bold text-blue-500 md:m-5 md:text-center text-left ">
          Blog Question
        </h2>
        <hr />
        <ol className="text-left mt-5">
          <li className="font-bold text-white">
            1. What is cors?
            <p className="pl-8 font-normal text-gray-500 text-justify">
              <span className="text-green-500">Ans:</span> Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
            </p>
          </li>
          <li className="font-bold text-white">
            2. Why are you using firebase? What other options do you have to implement authentication?
            <p className="pl-8 font-normal text-gray-500 text-justify">
              <span className="text-green-500">Ans:</span> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
              Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </p>
          </li>
          <li className="font-bold text-white">
            3. How does the private route work?
            <p className="pl-8 font-normal text-gray-500 text-justify">
              <span className="text-green-500">Ans:</span> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </p>
          </li>
          <li className="font-bold text-white">
            4. What is Node? How does Node work?
            <p className="pl-8 font-normal text-gray-500 text-justify">
              <span className="text-green-500">Ans:</span> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. <br />
              It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Blog;
