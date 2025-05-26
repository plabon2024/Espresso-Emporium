import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-[url('/images/more/13.jpg')] mt-10">
        <footer className="container mx-auto flex flex-col-reverse lg:flex-row justify-between md:px-0 px-5 py-20">
          <aside className="space-y-5 my-10 lg:my-0">
            <aside className="space-y-5">
              <img className="w-15" src="/images/more/logo1.png" alt="" />{" "}
              <h1 className="rancho-regular text-6xl font-bold text-shadow-lg  text-shadow-black ">
                Espresso Emporium
              </h1>
              <p>
                Always ready to be your friend. Come & Contact with us to share
                your <br /> memorable moments, to share with your best
                companion.
              </p>
            </aside>
            <nav>
              <nav>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a href="https://x.com/" target="_blank">
                    <RiTwitterXFill size={30} />
                  </a>
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <FaLinkedin size={30} className="text-blue-500" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <BsFacebook size={30} className="text-blue-500" />
                  </a>
                </div>
              </nav>
            </nav>
            <h1 className="rancho-regular text-6xl font-bold text-shadow-lg  text-shadow-black ">
              Get in Touch
            </h1>
            <aside className="flex gap-5">
              <FaPhoneAlt />

              <p>+88 01533 333 333</p>
            </aside>
            <aside className="flex gap-5">
              <IoMail />

              <p>info@gmail.com</p>
            </aside>
            <aside className="flex gap-5">
              <FaLocationDot />
              <p>72, Wall street, King Road, Dhaka</p>
            </aside>{" "}
          </aside>

          {/* Connect */}
          <div>
            <h1 className="rancho-regular  text-6xl text-shadow-lg  text-shadow-black ">
              Connect with Us
            </h1>

            <form onSubmit={() => {}} className="space-y-5 mt-10">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full bg-white  border border-gray-300 rounded px-4 py-2 pr-10"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full  bg-white border border-gray-300 rounded px-4 py-2 pr-10"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full bg-white border border-gray-300 rounded px-4 py-2 pr-10 resize-none"
              />

              <button className="bg-transparent hover:bg-primary hover:border-none rancho-regular px-4 py-2 font-bold text-xl rounded-full outline outline-black hover:outline-none">
                Send Message
              </button>
            </form>
          </div>
        </footer>
      </footer>

      <div className="rancho-regular flex justify-center items-center text-white  gap-2 bg-[url(/images/more/15.jpg)]">
        <img className="w-15" src="/images/more/logo1.png" alt="" />{" "}
        <div className="text-4xl">
          
          <p>
            Copyright © {new Date().getFullYear()} - Espresso Emporium ! All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
