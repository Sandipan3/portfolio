import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {
  const form = useRef();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        toast.success("Email sent successfully.");
      },
      (error) => {
        toast.error("Unable to send email!");
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center w-full min-h-screen p-4 z-10"
    >
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg p-8 border border-gray-200 rounded-2xl bg-white shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <motion.div
          className="mb-4"
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.03 }}
        >
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <motion.input
            type="text"
            name="user_name"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>
        <motion.div
          className="mb-4"
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.03 }}
        >
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <motion.input
            type="email"
            name="user_email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>
        <motion.div
          className="mb-4"
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.03 }}
        >
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <motion.textarea
            name="message"
            id="message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></motion.textarea>
        </motion.div>
        <div className="flex justify-center">
          <motion.button
            type="submit"
            className="bg-slate-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-900 transition flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShinyText
              text="Submit"
              disabled={false}
              speed={3}
              className="text-sm sm:text-base flex justify-center items-center"
            />
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
