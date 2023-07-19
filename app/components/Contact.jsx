"use client";

import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "./Container";
import Heading from "./Heading";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-hot-toast";
import "devicon";

const Contact = () => {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9f9rmxb",
        "template_n2kh5op",
        form.current,
        "OL1ZygSg8HzahSalr"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
          // Clear form inputs after successful email send
          setFormValues({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          toast.error("something went wrong! try again")
        }
      );
  };
  return (
    <div className="bg-[#F6F065] relative px-6 md:px-0 min-h-[70vh]">
      <Container>
        <div className="flex flex-col gap">
          <Heading number="3." title="Contact" />
          <p className="text-2xl">
            Thanks for taking the time to reach out. How can I help you today?
          </p>
        </div>
        <div className="flex items-start md:justify-end my-8">
          <div className="flex flex-col w-full  md:w-[50%] sm:flex-row gap-6">
            <div className="flex items-center sm:flex-col justify-start gap-x-4 sm:gap-y-6">
              <a href="https://github.com/salmank7" className="hover:scale-105">
                <i className="devicon-github-plain text-4xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/salman-khan-368186252/" className="hover:scale-105">
                <i className="devicon-linkedin-plain text-4xl"></i>
              </a>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-full md:w-[80%]"
            >
              <input
                type="text"
                placeholder="Name"
                value={formValues.user_name}
                onChange={handleChange}
                name="user_name"
                className="border outline-none border-black p-2 bg-transparent text-sm"
              />
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                value={formValues.user_email}
                onChange={handleChange}
                className="border border-black outline-none bg-transparent p-2 text-sm"
              />
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className="border border-black outline-none p-2 bg-transparent text-sm"
                type="text"
                placeholder="Message"
                border
                border-black
                p-2
                text-sm
                rows={6}
                maxLength={500}
              />
              <div className="flex items-center justify-start text-md gap-1 group">
                <input
                  type="submit"
                  value="Send"
                  className="text-[24px]"
                />
                <AiOutlineArrowRight
                  size={24}
                  className="group-hover:rotate-[0deg] rotate-[-45deg]"
                />
              </div>
            </form>
          </div>
        </div>
      </Container>

      <div className="flex flex-col items-center justify-center mt-[8rem] pb-2 text-sm">
        <p>&copy; copyright 2023, <a className="underline font-bold" target="_blank" href="https://github.com/salmank7">Salman Khan</a></p>
      </div>
    </div>
  );
};

export default Contact;
