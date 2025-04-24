
import Hero from "@/components/Hero";
import ContentPanel from "@/components/ContentPanel";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Library = () => {
  // Placeholder image
  const libraryImage = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
  
  const resources = [
    {
      title: "Fundamentals of Discipleship",
      type: "E-Book",
      description: "A comprehensive guide to understanding the foundations of biblical discipleship."
    },
    {
      title: "Walking in the Spirit",
      type: "Audio Series",
      description: "Learn how to cultivate a daily walk with the Holy Spirit."
    },
    {
      title: "Prayer and Fasting",
      type: "E-Book",
      description: "Discover the power of prayer and fasting in your spiritual journey."
    },
    {
      title: "The Discipler's Handbook",
      type: "PDF",
      description: "Essential guidance for those who disciple others in their walk with Christ."
    },
    {
      title: "Biblical Leadership Principles",
      type: "Video Series",
      description: "Lessons on leading with integrity and wisdom according to Scripture."
    },
    {
      title: "Intimacy with God",
      type: "Audio Devotionals",
      description: "Daily devotionals to help you develop a deeper relationship with God."
    }
  ];

  return (
    <div>
      <Hero 
        title="E-Library" 
        backgroundImage={libraryImage}
      >
        <p className="text-lg md:text-xl text-white italic mb-4">
          "This Book of the Law shall not depart from your mouth, but you shall 
          meditate in it day and night..." (Joshua 1:8)
        </p>
      </Hero>

      <ContentPanel>
        <p className="text-center mb-8">
          Enjoy our array of special spiritual materials and books that can guide your heart 
          and walk with the Lord Jesus Christ.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-playfair">{resource.title}</CardTitle>
                <div className="text-sm text-skyblue font-medium">{resource.type}</div>
              </CardHeader>
              <CardContent>
                <p>{resource.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="cta-button w-full">Access Resource</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ContentPanel>
    </div>
  );
};

export default Library;
