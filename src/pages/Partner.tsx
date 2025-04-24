
import Hero from "@/components/Hero";
import ContentPanel from "@/components/ContentPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Partner = () => {
  // Placeholder image
  const partnerImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div>
      <Hero 
        title="Partner with Us" 
        backgroundImage={partnerImage}
      >
        <p className="text-lg md:text-xl text-white">
          Join us in spreading the Gospel and making disciples
        </p>
      </Hero>

      <ContentPanel>
        <div className="prose max-w-none mb-8">
          <h2 className="text-2xl font-playfair text-center mb-4">Why Partner with GLDSH?</h2>
          <p>
            By partnering with Global Leadership Discipleship School of the Holy Spirit, you're 
            helping to fulfill the Great Commission given by Jesus Christ to make disciples of 
            all nations. Your generous support enables us to:
          </p>
          <ul>
            <li>Provide discipleship training resources globally</li>
            <li>Support mission work in underserved communities</li>
            <li>Develop new educational materials for disciplers</li>
            <li>Organize events and conferences to equip believers</li>
            <li>Expand our online presence to reach more people</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Financial Partnership</h3>
            <p className="mb-4">
              Your financial contribution supports our mission to raise disciples for Christ around the world.
            </p>
            <div className="space-y-4 mt-6">
              <Button className="cta-button w-full mb-3">One-Time Gift</Button>
              <Button className="cta-button w-full">Become a Monthly Partner</Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Full Name" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How would you like to partner with us?" />
              </div>
              <Button className="cta-button w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </ContentPanel>
    </div>
  );
};

export default Partner;
