import React from "react";
import Title from "../components/Title";
const Contact = () => {
  return (
    <div id="contact"> 
      <div>
        <div className="text-center text-2xl pt-10 ">
          <Title text1={"CONTACT"} text2={" US"} />
        </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-500">Our Store</p>
           
            <p className="text-gray-500">
              tel:9871586457 <br />
              email: 1233sadndeee@gmail.com
            </p>
           
            <p className="text-gray-500">
              
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
