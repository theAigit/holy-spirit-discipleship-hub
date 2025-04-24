
import Hero from "@/components/Hero";
import ContentPanel from "@/components/ContentPanel";
import { Button } from "@/components/ui/button";

const Store = () => {
  // Placeholder image
  const storeImage = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
  
  const products = [
    {
      id: 1,
      name: "Discipleship Fundamentals",
      price: 19.99,
      image: "https://via.placeholder.com/300x400",
      description: "A comprehensive guide to the basics of discipleship."
    },
    {
      id: 2,
      name: "Holy Spirit in Daily Life",
      price: 24.99,
      image: "https://via.placeholder.com/300x400",
      description: "Learn how to walk with the Spirit every day."
    },
    {
      id: 3,
      name: "Prayer Journal",
      price: 14.99,
      image: "https://via.placeholder.com/300x400",
      description: "A beautifully designed journal to record your prayers."
    },
    {
      id: 4,
      name: "Spiritual Warfare",
      price: 21.99,
      image: "https://via.placeholder.com/300x400",
      description: "Understanding and engaging in spiritual battles."
    },
    {
      id: 5,
      name: "Walking in Authority",
      price: 18.99,
      image: "https://via.placeholder.com/300x400",
      description: "How to exercise your God-given authority as a believer."
    },
    {
      id: 6,
      name: "Identity in Christ",
      price: 16.99,
      image: "https://via.placeholder.com/300x400",
      description: "Discovering who you are in Christ Jesus."
    }
  ];

  return (
    <div>
      <Hero 
        title="Online Store" 
        backgroundImage={storeImage}
      >
        <p className="text-lg md:text-xl text-white mb-4">
          Resources to equip and empower your discipleship journey
        </p>
      </Hero>

      <ContentPanel>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-playfair">Featured Products</h2>
          <Button className="link-button">View Cart (0)</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  <Button className="cta-button">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentPanel>
    </div>
  );
};

export default Store;
