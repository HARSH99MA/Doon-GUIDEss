import { MapPin, Mountain, ClipboardList, Lightbulb, Leaf, CheckCircle, TrendingUp, Users } from "lucide-react";

export default function DoonGuidePoster() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-white border-b-4 border-primary p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* College Logo */}
            <div className="flex-shrink-0">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F54b3cb1cfbb94496817b8742f09259d8?format=webp&width=800" alt="College Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>

            {/* Main Title */}
            <div className="flex-1 text-center">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-2">
                Doon-Guide
              </h1>
              <p className="text-sm md:text-base text-doon-gray font-nunito">
                Designing a smart travel & lifestyle companion for tourists and locals in Dehradun, Uttarakhand.
              </p>
            </div>

            {/* QR Code placeholder */}
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-primary rounded-lg flex items-center justify-center">
                <span className="text-xs text-center text-doon-gray font-inter">QR Code</span>
              </div>
              <p className="text-xs font-inter text-doon-gray">Scan to View</p>
            </div>
          </div>

          {/* Tagline with icon */}
          <div className="flex items-center justify-center gap-2 text-primary font-poppins font-semibold">
            <MapPin className="w-5 h-5" />
            <Mountain className="w-5 h-5" />
          </div>
        </div>

        {/* Section 1: Project Brief */}
        <div className="p-8 md:p-12 border-b-4 border-primary">
          <div className="mb-6 pb-4 border-b-4 border-secondary">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-primary">
              Project Brief
            </h2>
          </div>
          <p className="font-nunito text-sm md:text-base leading-relaxed text-doon-gray">
            The project aims to create an integrated digital guide for Dehradun and nearby Uttarakhand regions. <span className="font-bold text-primary">Doon-Guide</span> focuses on simplifying exploration for tourists and locals by combining navigation, heritage insights, food & stay suggestions, and real-time travel assistance into one seamless interface. It leverages geolocation-based recommendations and a community-driven review system to connect users with <span className="font-bold text-primary">authentic local experiences</span>.
          </p>
        </div>

        {/* Section 2: Screens Collage */}
        <div className="p-8 md:p-12 border-b-4 border-primary">
          <div className="mb-6 pb-4 border-b-4 border-secondary">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-primary">
              Screens
            </h2>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-4 border-primary rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {['Home Screen – Explore Dehradun', 'Nearby Attractions', 'Map Navigation', 'Cafes & Food Recommendations', 'Community Stories & Events', 'Travel Planning'].map((title, idx) => (
                <div key={idx} className="bg-white rounded-lg border-4 border-primary shadow-lg p-4 hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-secondary to-blue-400 rounded-lg mb-3 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">📱</div>
                      <span className="text-xs font-inter font-semibold">App Screen</span>
                    </div>
                  </div>
                  <p className="font-nunito font-semibold text-sm text-primary">{title}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-doon-gray font-inter mt-6 italic">Designed in Figma – Responsive Web & Mobile</p>
          </div>
        </div>

        {/* Sections 3 & 4: Research & Insights */}
        <div className="p-8 md:p-12 border-b-4 border-primary">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Section 3: Design Research Methodology */}
            <div className="bg-doon-light-yellow rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="font-poppins font-bold text-2xl text-orange-500 mb-6">
                Design Research Methodology
              </h3>
              <p className="font-nunito text-xs text-doon-gray mb-6 font-semibold">
                User-Centered Design Approach – Primary & Secondary Research + UX Design Process
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, label: 'Empathize', desc: 'Interviews with travelers and locals' },
                  { icon: ClipboardList, label: 'Define', desc: 'Pain points like poor signage, confusing maps' },
                  { icon: Lightbulb, label: 'Ideate', desc: 'Concept of an integrated guide platform' },
                  { icon: MapPin, label: 'Wireframe', desc: 'Lo-fi layouts for ease of navigation' },
                  { icon: TrendingUp, label: 'Prototype', desc: 'Built responsive mockups in Figma' },
                  { icon: CheckCircle, label: 'Test & Refine', desc: 'User feedback from Dehradun students' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3 items-start">
                      <Icon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-poppins font-semibold text-sm text-orange-500">{item.label}</p>
                        <p className="font-nunito text-xs text-doon-gray">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 4: Key Insights */}
            <div className="bg-doon-light-blue rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="font-poppins font-bold text-2xl text-primary mb-6 text-center">
                Key Insights
              </h3>
              <p className="font-inter text-xs text-doon-gray mb-4 font-semibold text-center">
                Primary + Secondary Research
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Primary Research */}
                <div>
                  <h4 className="font-poppins font-bold text-sm text-orange-500 mb-3">
                    Primary Research Highlights
                  </h4>
                  <ul className="space-y-2 font-nunito text-xs text-doon-gray">
                    <li className="flex gap-2">
                      <span className="text-secondary">•</span>
                      <span>Interviews with 30 travelers visiting Dehradun & Mussoorie</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary">•</span>
                      <span>Pain points: scattered information, unreliable navigation, language barriers</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary">•</span>
                      <span>Locals wanted promotion of hidden spots and eco-tourism</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t-2 border-gray-300"></div>

                {/* Secondary Research */}
                <div>
                  <h4 className="font-poppins font-bold text-sm text-orange-500 mb-3">
                    Secondary Research Highlights
                  </h4>
                  <ul className="space-y-2 font-nunito text-xs text-doon-gray">
                    <li className="flex gap-2">
                      <span className="text-secondary">•</span>
                      <span>Tourism industry in Uttarakhand growing 12% annually</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary">•</span>
                      <span>Increasing use of digital maps and review platforms</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary">•</span>
                      <span>Gap in UI solutions for regional tour guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 5: Reflection & Learning */}
        <div className="p-8 md:p-12 border-b-4 border-green-600 bg-doon-light-green">
          <div className="mb-4 pb-3 border-b-2 border-green-500">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-green-700 flex items-center gap-2">
              <Leaf className="w-6 h-6" />
              Reflection & Learning
            </h3>
          </div>
          <p className="font-nunito text-sm md:text-base leading-relaxed text-doon-gray italic">
            This project deepened my understanding of designing for emotional and cultural context. Working on Doon-Guide helped me connect technology with the spirit of Uttarakhand — simplicity, warmth, and accessibility. I learned how UX can bridge local identity and digital utility while improving tourist confidence and civic engagement.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-primary to-secondary bg-opacity-95 text-white p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: College Logo */}
            <div className="flex-shrink-0">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F54b3cb1cfbb94496817b8742f09259d8?format=webp&width=800" alt="College Logo" className="w-12 h-12 object-contain" />
            </div>

            {/* Center: Creator Info */}
            <div className="text-center flex-1">
              <p className="font-inter text-xs md:text-sm font-medium">
                Created by Divyanshi Negi | UI/UX Design Batch 2025–2027 | DIT University, Dehradun
              </p>
              <p className="font-inter text-xs mt-1 opacity-90">
                © 2025 – All Rights Reserved.
              </p>
            </div>

            {/* Right: QR Code */}
            <div className="flex-shrink-0 flex flex-col items-center gap-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center shadow-md">
                <span className="text-xs text-center text-doon-gray font-inter font-semibold px-1">QR Live</span>
              </div>
              <p className="text-xs font-inter opacity-90">Website</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
