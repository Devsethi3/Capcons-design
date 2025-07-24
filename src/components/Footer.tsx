import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaReddit } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#2b0972] to-[#39089d] to text-white pt-20">
      <div>
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl text-2xl font-extrabold mb-4">
            Start Your Journey with CapCons!
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join now and build your communications!
          </p>

        
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Image
              src="/googleplay.png"
              alt="playstore"
              width={160}
              height={160}
            />
            <Image
              src="/appstore.png"
              alt="playstore"
              width={160}
              height={160}
            />
          </div>
        </div>

        {/* Nai */}
        <div className="flex flex-wrap gap-10 container items-center justify-between mb-8 text-sm">
          <div className="flex flex-col lg:flex-row gap-8">
            <a href="#" className="hover:text-purple-200 transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-purple-200 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-200 transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-purple-200 transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-purple-200 transition-colors">
              Careers
            </a>
            <a href="#" className="hover:text-purple-200 transition-colors">
              FAQ&apos;s
            </a>
            <a href="#" className="hover:text-purple-200 transition-colors">
              Media
            </a>
          </div>

          <div className="flex gap-8">
            <a href="#" className="opacity-70 hover:opacity-100">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100">
              <FaReddit size={20} />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Bottom section with logo, social icons, and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-purple-500">
          <div className="container flex items-center justify-between">
            <Image src="/logo.png" alt="logo" width={120} height={120} />

            <div className="text-xs text-purple-200 ml-6">
              Copyright © 2025 Capcons Analytics Private Ltd. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
