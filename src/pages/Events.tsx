
import Hero from "@/components/Hero";
import ContentPanel from "@/components/ContentPanel";
import { Button } from "@/components/ui/button";

const Events = () => {
  // Placeholder image
  const eventsImage = "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div>
      <Hero 
        title="Events & Programs" 
        backgroundImage={eventsImage}
      >
        <p className="text-lg md:text-xl text-white italic mb-4">
          "This is the message which we have heard from Him and declare to you, 
          that God is light and in Him is no darkness at all." (1 John 1:5-7)
        </p>
      </Hero>

      <ContentPanel>
        <p className="text-center mb-8">
          Global leadership discipleship school of the Holy Spirit is mandated by the Lord to 
          ensure that the word and the presence of God in many different ways are not left out. 
          Enjoy the retreats, outreach, training and special conferences in video and slide photo stories.
        </p>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Upcoming Retreat</h3>
            <p className="mb-2"><strong>Date:</strong> June 15-18, 2023</p>
            <p className="mb-4"><strong>Location:</strong> Mountain of Fire Prayer Center</p>
            <p className="mb-4">
              Join us for our annual spiritual retreat where we'll focus on 
              deepening our relationship with the Holy Spirit.
            </p>
            <Button className="cta-button">Register Now</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Leadership Training</h3>
            <p className="mb-2"><strong>Date:</strong> July 8, 2023</p>
            <p className="mb-4"><strong>Location:</strong> Online via Zoom</p>
            <p className="mb-4">
              Special training session for all disciplers and those who feel called to 
              disciple others.
            </p>
            <Button className="cta-button">Learn More</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Community Outreach</h3>
            <p className="mb-2"><strong>Date:</strong> August 20, 2023</p>
            <p className="mb-4"><strong>Location:</strong> Downtown Community Center</p>
            <p className="mb-4">
              Join us as we bring the love of Christ to our local community through 
              acts of service and sharing the gospel.
            </p>
            <Button className="cta-button">Sign Up to Volunteer</Button>
          </div>
        </div>
      </ContentPanel>
    </div>
  );
};

export default Events;
