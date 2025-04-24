
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, MapPin, Library, Store } from "lucide-react";

const Index = () => {
  // Hero section background image (placeholder)
  const heroBackground = "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[70vh] min-h-[500px] flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in font-playfair">
            Global Leadership Discipleship School of the Holy Spirit
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Pursuing intimacy with the Lord Jesus Christ through discipleship by revelation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about">
              <Button className="cta-button">Learn More About Us</Button>
            </Link>
            <Link to="/join">
              <Button className="bg-white hover:bg-white/90 text-charcoal px-6 py-3 rounded-md transition-colors duration-200 font-medium">
                Join a Class
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="py-16 bg-softwhite">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">Welcome to Holy Ghost School</h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            HOLY SPIRIT SCHOOL OF DISCIPLESHIP is a unique movement of the Holy Spirit 
            on discipleship by revelation. It enables disciples to learn and engage in the 
            understanding of intimacy with the Holy Spirit on a one-on-one basis.
          </p>
          <Link to="/about">
            <Button className="link-button">About Our Ministry</Button>
          </Link>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Section 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <BookOpen className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3 font-playfair">Discipleship by Revelation</h3>
              <p className="mb-6">
                Enhance personal communication with the Lord Jesus Christ and understand 
                the use of spiritual power and authority.
              </p>
              <Link to="/about">
                <Button className="link-button">Learn More</Button>
              </Link>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <Users className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3 font-playfair">Join Our Community</h3>
              <p className="mb-6">
                Connect with fellow disciples and grow together in your spiritual journey 
                through our various groups and classes.
              </p>
              <Link to="/groups">
                <Button className="link-button">Explore Groups</Button>
              </Link>
            </div>

            {/* Section 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <MapPin className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3 font-playfair">Global Missions</h3>
              <p className="mb-6">
                Join the Chariot of Philip and participate in bringing the gospel to all 
                nations as commanded by our Lord Jesus Christ.
              </p>
              <Link to="/missions">
                <Button className="link-button">Mission Updates</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 font-playfair">Resources & Engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/events" className="hover:transform hover:scale-105 transition-transform">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Calendar className="mx-auto h-10 w-10 text-skyblue mb-4" />
                <h3 className="text-xl font-bold mb-2">Events & Programs</h3>
                <p>Retreats, outreach, training and special conferences.</p>
              </div>
            </Link>
            
            <Link to="/library" className="hover:transform hover:scale-105 transition-transform">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Library className="mx-auto h-10 w-10 text-skyblue mb-4" />
                <h3 className="text-xl font-bold mb-2">E-Library</h3>
                <p>Access spiritual materials to guide your walk with Christ.</p>
              </div>
            </Link>
            
            <Link to="/store" className="hover:transform hover:scale-105 transition-transform">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Store className="mx-auto h-10 w-10 text-skyblue mb-4" />
                <h3 className="text-xl font-bold mb-2">Online Store</h3>
                <p>Books and resources to equip your discipleship journey.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">Begin Your Discipleship Journey</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join us as we pursue intimacy with the Lord Jesus Christ through 
            discipleship by revelation. Take the first step in your journey today.
          </p>
          <Link to="/join">
            <Button className="cta-button">Join a Class Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
