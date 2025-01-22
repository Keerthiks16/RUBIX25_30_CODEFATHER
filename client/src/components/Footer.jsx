import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Home,
  Clock,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Home className="w-6 h-6" />
              DreamHome
            </h2>
            <p className="text-red-100 mb-6">
              Making your dream home a reality with trusted assistance and
              guidance every step of the way.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Properties", "Services", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-red-100 hover:text-white flex items-center gap-2 transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <p className="text-red-100">
                  123 Housing Street, Real Estate City, 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+1234567890"
                  className="text-red-100 hover:text-white transition-colors duration-300"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:info@dreamhome.com"
                  className="text-red-100 hover:text-white transition-colors duration-300"
                >
                  info@dreamhome.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <p className="text-red-100">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Office Hours</h3>
            <ul className="space-y-4 text-red-100">
              {[
                { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map((schedule) => (
                <li key={schedule.day} className="flex justify-between">
                  <span>{schedule.day}</span>
                  <span className="font-medium text-white">
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-red-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-red-100">
            <p>© 2024 DreamHome. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
