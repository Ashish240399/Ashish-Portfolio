"use client";
import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_skf6m73", "template_5k5q6fs", formRef.current, {
        publicKey: "C4H3aZmTDxqsujYz8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  // emailjs.send("service_skf6m73", "template_5k5q6fs", {
  // from_name: "Tulu",
  // message: "Hye from tulu",
  // from_email: "tulumhnt@gmail.com",
  // });
  return (
    <div className="flex flex-col justify-center items-center pt-[7%]">
      <div className="text-[30px] font-bold w-full px-[10%]">Contact</div>
      <div className=" w-full px-[10%]">
        Want to get in touch? Contact me any of the platform{" "}
      </div>
      <div className="flex gap-[10px] mt-[20px] mb-4">
        <a
          href="https://www.linkedin.com/in/ashish-kumar-mohanty/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Ashish240399"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://twitter.com/Ashish_k7797?t=LZApvzGdN6icpHrnK083ow&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={30} />
        </a>
      </div>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="p-10 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] rounded-lg shadow-lg w-[80%] max-w-[500px]"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Name"
            name="from_name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Your Email"
            name="from_email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Your Message"
            name="message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-dark_blue m-auto hover:scale-105 text-dark_orange font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[70%]"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
