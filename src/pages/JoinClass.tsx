
import Hero from "@/components/Hero";
import ContentPanel from "@/components/ContentPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const JoinClass = () => {
  // Placeholder image
  const classroomImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div>
      <Hero 
        title="Join the Class" 
        backgroundImage={classroomImage}
      >
        <p className="text-lg md:text-xl text-white">
          Begin your discipleship journey with us
        </p>
      </Hero>

      <ContentPanel title="Step 1 – Register with a Disciple">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Full Name" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="discipler">Select a Discipler</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your discipler" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="discipler1">Discipler 1</SelectItem>
                  <SelectItem value="discipler2">Discipler 2</SelectItem>
                  <SelectItem value="discipler3">Discipler 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="cta-button w-full">Register Now</Button>
          </form>
        </div>
      </ContentPanel>

      <ContentPanel title="Step 2 – Locate Your Area" className="bg-gray-50">
        <p className="text-center mb-6">
          As you continue on your journey in discipleship locate your area 
          in the form or link that is sent to you so as we can reach you 
          swiftly and conveniently.
        </p>
        <div className="flex justify-center">
          <Button className="link-button">Check Available Areas</Button>
        </div>
      </ContentPanel>

      <ContentPanel title="Step 3 – Connect with a Live Class">
        <p className="text-center mb-6">
          If you desire to connect with an ongoing live class, kindly secure 
          your link after you have filled your required preferences in terms 
          of your participation, time zone, language, state, community or 
          country of connection.
        </p>
        <div className="flex justify-center">
          <Button className="cta-button">Connect to Live Class</Button>
        </div>
      </ContentPanel>
    </div>
  );
};

export default JoinClass;
