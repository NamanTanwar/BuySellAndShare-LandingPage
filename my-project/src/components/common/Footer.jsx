import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const footerData = [
  {
    heading: "BUY",
    text: "Maecenas ac est felis. Duis quis lobortis tellus, eget venenatis turpis. Proin ut lectus a ex ornare tincidunt ut eu massa.",
  },
  {
    heading: "RENT",
    text: "Morbi et molestie erat ac est felis. Phasellus laoreet ante orci, a  ornare sit amet placerat arcu a tincidunt porttitor",
  },
  {
    heading: "SELL",
    text: "Suspendisse potenti.Vestibulum sed augue ex. Pellentesque placerat arcu a tincidunt porttitor.",
  },
];

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number is invalid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      toast.success("Form submitted successfully!");
    } else {
      toast.error("Please fill all the fields");
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <footer className="bg-cream text-navy p-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Follow Us Section */}
        <div className="w-full md:w-1/4 md:mb-0 ml-5">
          <h3 className="font-Cursive text-3xl font-bold mb-4 font-handwritten">
            Follow Us
          </h3>
          <div className="flex flex-col space-y-4">
            {/*Twitter Icon */}
            <div className="flex flex-row items-center space-x-1 cursor-pointer">
              <a href="#" className="text-2xl hover:text-blue-600">
                <FaTwitter />
              </a>
              <p className="text-lightNavy hover:text-navy font-Cursive font-bold">
                Twitter
              </p>
            </div>
            {/*Facebook Icon */}
            <div className="flex flex-row items-center space-x-1 cursor-pointer">
              <a href="#" className="text-2xl hover:text-blue-800">
                <FaFacebook />
              </a>
              <p className="text-lightNavy hover:text-navy font-Cursive font-bold">
                Facebook
              </p>
            </div>
            {/*Linkedin Icon */}
            <div className="flex flex-row items-center space-x-1 cursor-pointer">
              <a href="#" className="text-2xl hover:text-blue-700">
                <FaLinkedin />
              </a>
              <p className="text-lightNavy hover:text-navy font-Cursive font-bold">
                Linkedin
              </p>
            </div>
          </div>
        </div>

        {/* Three Sections */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-stretch md:mb-0 md:mr-32">
          {footerData.map((section, idx) => (
            <React.Fragment key={idx}>
              <div className="w-full sm:w-1/3 mb-4 sm:mb-0 flex flex-col space-y-2 items-center justify-between">
                <h4 className="text-5xl font-semibold mb-2 font-serif">
                  {section.heading}
                </h4>
                <p className="text-center font-xs font-handwritten">
                  {section.text}
                </p>
                <Button
                  text={"Contact Us"}
                  bgColor={"navy"}
                  textColor={"cream"}
                />
                <div className="flex flex-row items-center space-x-1">
                  <a href="#" className="block mt-2 text-sm hover:underline">
                    Support Us
                  </a>
                  <FaArrowRight />
                </div>
              </div>
              {idx !== footerData.length - 1 && (
                <div className="w-px bg-navy h-[170px] mt-8 mx-3"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/4 md:mr-10">
          <h3 className="text-2xl font-bold mb-4">Contact Our Business</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                className="w-full p-2 border border-navy"
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                className="w-full p-2 border border-navy"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                className="w-full p-2 border border-navy"
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="flex justify-center">
              <Button text={"Submit"} bgColor={"navy"} textColor={"cream"} />
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
