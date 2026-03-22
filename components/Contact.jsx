import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import Link from "next/link";
import { socials } from "../constants";
import EmailIcon from "./../public/assets/icons/email.svg";
import { slideIn } from "../utils/motion";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);

    setForm({ ...form, [name]: sanitizedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: DOMPurify.sanitize(form.name),
          to_name: "Shivam Sharma",
          from_email: DOMPurify.sanitize(form.email),
          to_email: "shivamsharma77607@gmail.com",
          message: DOMPurify.sanitize(form.message),
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message. I will get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-md shadow-primary"
      id="contact"
    >
      <p className={"sectionSubText text-ctnSecondaryDark"}>Get in touch</p>
      <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="What is your good name?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Your email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="What is your email address?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Your Message
          </span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What do you want to say?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>

        <button
          type="submit"
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Added separator line for better visual distinction */}
      <div className="w-full h-px bg-gray-700 my-8"></div>

      {/* Email section with increased spacing */}
      <div className="w-full break-words text-center py-4">
        <Link
          href="mailto:snigdha.das0804@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary inline-flex items-center gap-3 transition-all duration-300 ease-in hover:-translate-y-1"
        >
          <EmailIcon className="w-[32px] h-[32px]" />
          <span className="text-gray-300 text-base md:text-lg">
            snigdha.das0804@gmail.com
          </span>
        </Link>
      </div>

      {/* Social icons section with increased spacing */}
      <div className="w-full py-6">
        <div className="flex gap-8 items-center justify-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-10 h-10 hover:-translate-y-2 ease-in transition-all duration-300 cursor-pointer hover:scale-110"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Resume button section with increased spacing */}
      <div className="w-full py-6 flex justify-center">
        <Link
          href="document/Snigdharani Das.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <div className="btn bg-tertiary text-white px-8 py-3 rounded-md overflow-hidden relative cursor-pointer hover:bg-primary transition-all duration-300 hover:scale-105">
            <div className="original bg-primary text-white px-8 py-3">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default Contact;