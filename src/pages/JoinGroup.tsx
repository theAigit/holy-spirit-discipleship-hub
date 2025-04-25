
import { useParams, useNavigate } from "react-router-dom";
import Hero from "@/components/Hero";
import ContentPanel from "@/components/ContentPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const JoinGroup = () => {
  const { groupName } = useParams();
  const navigate = useNavigate();

  const groups = [
    {
      name: "League of Disciplers",
      verse: "Matthew 16:24",
      description: "If you are already a Discipler, who had graduated from the GLDSH, click here to join your fellow comrades.",
      image: "/lovable-uploads/7af1c166-b1e9-47a9-9531-6b76eeec472b.png"
    },
    {
      name: "Youths Aflame",
      verse: "Psalm 119:9",
      description: "Click here to join the disciples of youth group. How can a youth guide his way except he fears the Lord? Join our vibrant Youths Aflame for Christ.",
      image: "/lovable-uploads/a0b2bd1e-ef70-49a6-8dae-95f91c3505f1.png"
    },
    {
      name: "Watchmen Intercessors",
      verse: "Isaiah 62:1",
      description: "Click here to join our intercessors team in prayers for nations, disciples, missions, and the body of Christ.",
      image: "/lovable-uploads/a8326234-9a1b-4add-80fc-0ec371aff614.png"
    },
    {
      name: "The Kingsmen Forum",
      verse: "Ezekiel 22:30",
      description: "Click to join men to enjoy fellowship and wisdom on practical issues of living.",
      image: "/lovable-uploads/f36997c7-1c21-4298-a1a6-7776b15fdb92.png"
    },
    {
      name: "Women of Virtue",
      verse: "Proverbs 31:31",
      description: "Click here to join our Women of Virtue group. A wonderful encounter awaits you.",
      image: "/lovable-uploads/618be9d6-6d12-4235-8655-2e4b8c3418b6.png"
    },
    {
      name: "Let the Children Come to Me",
      verse: "Matthew 19:14",
      description: "Click here to enjoy Christ Jesus fellowship in the eyes of children in an exciting environment.",
      image: "/lovable-uploads/4dd569e9-c5fa-430c-892e-fc4cdf36ddb0.png"
    },
    {
      name: "Book Reviews / Content Study",
      verse: "2 Timothy 2:15",
      description: "Click here to join our book reviews and study. This will aid your study life and unfailing new spiritual development.",
      image: "/lovable-uploads/0bfbd24b-8400-41bd-9c33-5276554f245e.png"
    }
  ];

  const group = groups.find(g => g.name === groupName);

  if (!group) {
    navigate('/groups');
    return null;
  }

  return (
    <div>
      <Hero 
        title={`Join ${group.name}`}
        backgroundImage={group.image}
      >
        <p className="text-lg md:text-xl text-white">{group.verse}</p>
      </Hero>

      <ContentPanel>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Your phone number" />
            </div>

            <div>
              <Label htmlFor="message">Why do you want to join this group?</Label>
              <Textarea 
                id="message" 
                placeholder="Share your motivation for joining..."
                className="h-32"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to follow the group guidelines and participate actively
              </Label>
            </div>

            <Button className="cta-button w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </ContentPanel>
    </div>
  );
};

export default JoinGroup;
