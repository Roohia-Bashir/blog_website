import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link"
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white w-full border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* First Column */}
          <div className="space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
                Our Mission
              </Link>
              <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
                Subscribe to Newsletter
              </Link>
              <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
                Contact Us
              </Link>
              <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
                AI Ethics
              </Link>
            </nav>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400">Resources</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                AI Glossary
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Research Papers
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Tutorials
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Datasets
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                AI Tools
              </Link>
            </nav>
          </div>

          {/* Third Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400">Topics</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Machine Learning
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Deep Learning
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Natural Language Processing
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Computer Vision
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Robotics
              </Link>
            </nav>
          </div>

         
          {/* Social Icons */}
          <div className="flex space-x-4 lg:justify-end">
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <FaTwitter className="w-[30px] h-[30px] text-white " />
              </div>
            </Link>
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <FaFacebookF className="w-[30px] h-[30px] text-white " />
              </div>
            </Link>
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <TfiYoutube className="w-[30px] h-[30px] text-white " />
              </div>
            </Link>
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <FaInstagram className="w-[30px] h-[30px] text-white " />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Global</span>
              </div>
              <p className="text-sm text-gray-400">© 2025 AI Blog, Inc. All Rights Reserved</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 mt-4 lg:mt-0">
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Accessibility
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

