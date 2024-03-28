"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import mapImg from "../../assets/map.png";
import Image from "next/image";
import ContactForm from "@/components/contactForm/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <div className="md:flex gap-28 justify-center items-center mt-10">
        <div>
          <h1 className="text-5xl font-semibold text-[#333333] max-w-[10ch]">
            How can we help you?
          </h1>
          <p className="mt-10">We are here 7 days a week!</p>
          <p className="mt-10 text-2xl font-semibold">01756-000000</p>
          <small className="text-[#E85363]">contact@gmail.com</small>
          <div className="flex gap-5 text-2xl text-[#E85363] font-semibold mt-10">
            <FaFacebook /> <FaInstagramSquare /> <FaTwitter /> <FaPinterest />{" "}
            <FaYoutube />
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image src={mapImg} alt="mapImg"></Image>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default ContactUs;
