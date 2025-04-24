
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Groups = () => {
  const groups = [
    {
      name: "League of Disciplers",
      verse: "Matthew 16:24",
      description: "If you are already a Discipler, who had graduated from the GLDSH, click here to join your fellow comrades."
    },
    {
      name: "Youths Aflame",
      verse: "Psalm 119:9",
      description: "Click here to join the disciples of youth group. How can a youth guide his way except he fears the Lord? Join our vibrant Youths Aflame for Christ."
    },
    {
      name: "Watchmen Intercessors",
      verse: "Isaiah 62:1",
      description: "Click here to join our intercessors team in prayers for nations, disciples, missions, and the body of Christ."
    },
    {
      name: "The Kingsmen Forum",
      verse: "Ezekiel 22:30",
      description: "Click to join men to enjoy fellowship and wisdom on practical issues of living."
    },
    {
      name: "Women of Virtue",
      verse: "Proverbs 31:31",
      description: "Click here to join our Women of Virtue group. A wonderful encounter awaits you."
    },
    {
      name: "Let the Children Come to Me",
      verse: "Matthew 19:14",
      description: "Click here to enjoy Christ Jesus fellowship in the eyes of children in an exciting environment."
    },
    {
      name: "Book Reviews / Content Study",
      verse: "2 Timothy 2:15",
      description: "Click here to join our book reviews and study. This will aid your study life and unfailing new spiritual development."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
        Discipleship Groups
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-playfair">{group.name}</CardTitle>
              <div className="text-sm text-gold font-medium">{group.verse}</div>
            </CardHeader>
            <CardContent>
              <p>{group.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="cta-button w-full">Join Group</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Groups;
