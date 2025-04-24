
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl mb-4">GLDSH</h3>
            <p className="mb-4 text-gray-300">
              Global Leadership Discipleship School of the Holy Spirit - An endtime move of the Holy Spirit.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/join" className="text-gray-300 hover:text-white transition-colors">
                Join the Class
              </Link>
              <Link to="/missions" className="text-gray-300 hover:text-white transition-colors">
                Missions
              </Link>
              <Link to="/groups" className="text-gray-300 hover:text-white transition-colors">
                Groups
              </Link>
              <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                Events & Programs
              </Link>
              <Link to="/library" className="text-gray-300 hover:text-white transition-colors">
                E-Library
              </Link>
              <Link to="/store" className="text-gray-300 hover:text-white transition-colors">
                Online Store
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-playfair text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {/* These would be replaced with actual social icons */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <span>F</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <span>I</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-gold transition-colors">
                <span className="sr-only">YouTube</span>
                <span>Y</span>
              </a>
            </div>
            <p className="text-gray-300">
              Contact: <a href="mailto:glds@gmail.com" className="text-skyblue hover:underline">glds@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Global Leadership Discipleship School of the Holy Spirit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
