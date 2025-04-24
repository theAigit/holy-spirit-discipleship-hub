
import ContentPanel from "@/components/ContentPanel";
import { Button } from "@/components/ui/button";

const StyleGuide = () => {
  const colorSwatches = [
    { name: "Soft White", hex: "#F8F7F4", textColor: "text-charcoal" },
    { name: "Gold", hex: "#D4AF37", textColor: "text-white" },
    { name: "Sky Blue", hex: "#6EAEE8", textColor: "text-white" },
    { name: "Charcoal", hex: "#333333", textColor: "text-white" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
        GLDSH Style Guide
      </h1>

      <ContentPanel title="Color Palette">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colorSwatches.map((color) => (
            <div 
              key={color.hex} 
              className={`p-6 rounded-lg ${color.textColor}`}
              style={{ backgroundColor: color.hex }}
            >
              <h3 className="font-bold">{color.name}</h3>
              <p>{color.hex}</p>
            </div>
          ))}
        </div>
      </ContentPanel>

      <ContentPanel title="Typography">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Headings - Playfair Display</h3>
            <div className="space-y-4 mt-4">
              <div className="p-2 border-b">
                <h1 className="font-playfair text-5xl">Heading 1 - 48px</h1>
              </div>
              <div className="p-2 border-b">
                <h2 className="font-playfair text-4xl">Heading 2 - 32px</h2>
              </div>
              <div className="p-2 border-b">
                <h3 className="font-playfair text-3xl">Heading 3 - 24px</h3>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Body Text - Inter</h3>
            <div className="space-y-4 mt-4">
              <div className="p-2 border-b">
                <p className="font-inter text-base">
                  Regular paragraph text - 16px. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="p-2 border-b">
                <p className="font-inter text-sm">
                  Small text - 14px. Used for less important information, notes, and captions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentPanel>

      <ContentPanel title="Buttons">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
              <Button className="cta-button mb-2">Primary Button</Button>
              <p className="text-sm text-gray-600 mt-2">CTA Button</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
              <Button className="link-button mb-2">Secondary Button</Button>
              <p className="text-sm text-gray-600 mt-2">Link Button</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
              <Button disabled className="cta-button mb-2">Disabled Button</Button>
              <p className="text-sm text-gray-600 mt-2">Disabled State</p>
            </div>
          </div>
        </div>
      </ContentPanel>

      <ContentPanel title="Icons">
        <p className="text-center mb-6">
          Simplified line-style SVG icons are used throughout the site for a clean, consistent look.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
              {/* Example icon placeholder */}
              <span className="text-2xl">📚</span>
            </div>
            <p className="mt-2 text-sm">Library</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-2xl">👥</span>
            </div>
            <p className="mt-2 text-sm">Groups</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-2xl">🌎</span>
            </div>
            <p className="mt-2 text-sm">Missions</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-2xl">📅</span>
            </div>
            <p className="mt-2 text-sm">Events</p>
          </div>
        </div>
      </ContentPanel>
    </div>
  );
};

export default StyleGuide;
