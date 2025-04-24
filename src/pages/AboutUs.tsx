
import Hero from "@/components/Hero";
import ContentPanel from "@/components/ContentPanel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Using a placeholder image - would be replaced with actual images
  const shepherdImage = "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div>
      <Hero 
        title="Welcome to GLDSH" 
        backgroundImage={shepherdImage}
      >
        <p className="text-lg md:text-xl text-white mb-8">
          Global Leadership Discipleship School of the Holy Spirit
        </p>
        <Link to="/join">
          <Button className="cta-button">Begin Your Journey</Button>
        </Link>
      </Hero>

      <ContentPanel id="introduction">
        <div className="prose max-w-none">
          <p className="mb-4">
            Global leadership discipleship school of the Holy Spirit (AkA Holy ghost school) 
            Is an endtime move of the Holy Spirit that quickened the restoration for personal 
            intimate relationship with the holy Spirit through discipleship by revelation.
          </p>
          <p className="mb-4">
            It is not a church or denomination although walkwith churches and Christian organizations 
            as led by the Holyspirit, it's a unique forum and ministry to disciples of Christ, men 
            and women, children and youth who desire to pursue Intimacy with the lord Jesus Christ 
            through Discipleship by revelation. Further details of our establishment and movement 
            is revealed in our engagements.
          </p>
        </div>
      </ContentPanel>

      <ContentPanel title="What Is Holy Ghost School?" className="bg-gray-50">
        <div className="prose max-w-none">
          <p className="mb-4">
            HOLY SPIRIT SCHOOL OF DISCIPLERSHIP is a unique movement of the Holy Spirit on 
            discipleship by revelation. It enables disciples learn and engage in the understanding 
            of intimacy with the Holy SPIRIT on a one on one basis. Each disciple will discover 
            or improve ways to enhance the following:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Enhance personal communication with the lord Jesus Christ</li>
            <li className="mb-2">Understand the use of spiritual power and Authority</li>
            <li className="mb-2">Discover the will of God for life</li>
            <li className="mb-2">Experience spiritual well being and maternal blessings</li>
          </ul>
          <p>
            All these are to train, equip and render vessels usable for God's kingdom mandate.
          </p>
        </div>
      </ContentPanel>

      <ContentPanel title="Note from Your Discipler">
        <div className="prose max-w-none">
          <blockquote className="italic border-l-4 border-gold pl-4 mb-4">
            "And the things that you have heard from me among many witnesses, commit these 
            to faithful men, who shall be able to teach others also." (2 Timothy 2:2 NKJV)
          </blockquote>
          <p className="mb-4">
            As you progress through your discipleship journey, the Lord gives you two teachers, 
            the teacher within and the teacher without. The Holy Spirit within you to guide you 
            in the ways of God in the spirit and a human disciple in the ways of God in relation 
            to the needs of men in the physical. It is the confluence of the Perfect with the 
            imperfect. The divine and man.
          </p>
          <p className="mb-6">
            The lord Jesus Christ is fully on course to raise faithful disciples for Himself, 
            such as yourself, and He will require you to align yourself to adequate training, 
            in the ways by which relationships with the Holy SPIRIT through your covenant time 
            and your relationships with both fellow disciples and the outside world is clearly 
            affirmed and applied for godly living. For no man can truly give what he does not have. 
            So as the lord trains and equips you for His Divine mandate, you won't be found wanting.
          </p>
          <div className="text-center">
            <Link to="/join">
              <Button className="cta-button">
                Send an email to indicate your interest
              </Button>
            </Link>
          </div>
        </div>
      </ContentPanel>

      <ContentPanel title="Covenant Time" className="bg-gray-50">
        <div className="text-center py-8">
          <p className="text-lg mb-6">
            [Coming Soon: Information about Covenant Time]
          </p>
          <Link to="/join">
            <Button className="cta-button">Learn More About Classes</Button>
          </Link>
        </div>
      </ContentPanel>
    </div>
  );
};

export default AboutUs;
