import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (name, email, message) => {
    let newErrors = {};

    if (!name || name.length < 2) {
      newErrors.name = "Enter a valid name";
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!message || message.length < 5) {
      newErrors.message = "Message too short";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      email: formData.get("email"),
      name: formData.get("name"),
      message: formData.get("message"),
    };

    if (!validate(data.name, data.email, data.message)) return;

    try {
      setStatus("sending");

      const API_URL =
        import.meta.env.DEV
          ? "http://localhost:3000/api/contact"
          : "/api/contact";

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status === "success") {
        setStatus("success");
        e.target.reset();
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="container m-auto mt-16">

      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-16 flex items-center justify-center sm:flex-col">

        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">

          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end flex-col sm:w-3/4">
            <div>
              <h1 className="text-5xl font-bold sm:text-3xl">
                You Need
              </h1>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>

          <div className="flex p-5 items-center justify-center">
            <button
              className="text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] bg-white"
            >
              <BsArrowRight className="md:rotate-90" />
            </button>
          </div>

        </div>

        <div className="right flex-1">

          <form
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            onSubmit={handleSubmit}
          >

            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              name="email"
            />

            {errors.email && (
              <div className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded-full">
                {errors.email}
              </div>
            )}

            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. John Doe"
              name="name"
            />

            {errors.name && (
              <div className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded-full">
                {errors.name}
              </div>
            )}

            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              placeholder="Write your message"
              name="message"
            />

            {errors.message && (
              <div className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded-full">
                {errors.message}
              </div>
            )}

            <button
              className="bg-black hover:text-yellow-400 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-2"
              type="submit"
            >
              <RiSendPlaneFill />
              <span>Send</span>
            </button>

            {status === "sending" && (
              <div className="text-yellow-700 bg-yellow-100 px-4 py-1 rounded-full text-sm">
                Sending message...
              </div>
            )}

            {status === "success" && (
              <div className="text-green-700 bg-green-100 px-4 py-1 rounded-full text-sm">
                Message sent successfully 🚀
              </div>
            )}

            {status === "error" && (
              <div className="text-red-700 bg-red-100 px-4 py-1 rounded-full text-sm">
                Failed to send message
              </div>
            )}

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;