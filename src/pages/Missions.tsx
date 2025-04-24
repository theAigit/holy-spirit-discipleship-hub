
import Hero from "@/components/Hero";
import ContentPanel from "@/components/ContentPanel";
import { Button } from "@/components/ui/button";

const Missions = () => {
  // Placeholder image
  const missionImage = "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div>
      <Hero 
        title="Join the Chariot of Philip" 
        backgroundImage={missionImage}
      >
        <p className="text-lg md:text-xl text-white italic mb-4">
          "Go therefore and make disciples of all nations, baptizing them in the name 
          of the Father and of the Son and of the Holy Spirit, teaching them to observe 
          all things that I have commanded you; and lo, I am with you always, even to 
          the end of the age. Amen." (Matthew 28:18-19 NKJV)
        </p>
      </Hero>

      <ContentPanel>
        <div className="prose max-w-none">
          <p className="mb-4">
            Joining the chariot mission updates is our programme responsibility to win men 
            for Christ and therefore make them true disciples. We seek to reach all the 
            continents of the world as Christ allows. We have reached four continents and 
            trust God to go more.
          </p>
          <p className="mb-6">
            Christ Jesus commands His true disciples to go into the world and reach out to 
            people and make them His own disciples. We as disciples must take up the divine 
            mandate to do God's will as instructed.
          </p>
        </div>
      </ContentPanel>

      <ContentPanel className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-xl font-bold mb-3">Participate in Groaning</h3>
            <p className="mb-4">Intercessors for disciples on the mission field</p>
            <Button className="link-button">Learn More</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-xl font-bold mb-3">Participate in Going</h3>
            <p className="mb-4">Actually make the trips to new territory for Christ</p>
            <Button className="link-button">Learn More</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-xl font-bold mb-3">Participate in Giving</h3>
            <p className="mb-4">Allowing Christ to utilize your resources to aid mission exploits</p>
            <Button className="link-button">Learn More</Button>
          </div>
        </div>
      </ContentPanel>

      <ContentPanel title="Current Mission Updates">
        <div className="overflow-x-auto pb-8">
          <div className="flex space-x-6 py-4">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className="min-w-[300px] bg-white p-4 rounded-lg shadow-md"
              >
                <h4 className="font-bold mb-2">Mission Update {item}</h4>
                <p className="text-sm text-gray-600 mb-2">March {item*5}, 2023</p>
                <p>Latest update from our mission field...</p>
                <Button className="link-button mt-3">Read More</Button>
              </div>
            ))}
          </div>
        </div>
      </ContentPanel>
    </div>
  );
};

export default Missions;
