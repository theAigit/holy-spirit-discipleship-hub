
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Group } from "lucide-react";
import { Link } from "react-router-dom";

const Groups = () => {
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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Group className="h-6 w-6 text-gold" />
        <h1 className="text-3xl md:text-4xl font-bold text-center font-playfair">
          Discipleship Groups
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={group.image} 
                alt={group.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-playfair">{group.name}</CardTitle>
              <div className="text-sm text-gold font-medium">{group.verse}</div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{group.description}</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="cta-button w-full"
                asChild
              >
                <Link to={`/join-group/${encodeURIComponent(group.name)}`}>
                  Join Group
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Groups;
