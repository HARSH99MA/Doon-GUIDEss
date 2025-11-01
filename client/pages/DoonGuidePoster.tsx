import {
  MapPin,
  Mountain,
  Users,
  ClipboardList,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Leaf,
} from "lucide-react";

export default function DoonGuidePoster() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-gray-100 p-4 md:p-8">
      {/* Main Poster Container */}
      <div
        className="max-w-6xl mx-auto bg-white shadow-2xl"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,0,0,0.01) 0px, rgba(0,0,0,0.01) 1px, transparent 1px, transparent 2px)",
          position: "relative",
        }}
      >
        {/* Header Section */}
        <div className="border-b-4 border-primary p-6 md:p-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-4">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F9046ef5e810c48e78a6b3f1977ae1fdf?format=webp&width=800"
                alt="DIT Logo"
                className="w-48 h-48 md:w-56 md:h-56 object-contain"
              />
            </div>

            {/* Center: Title */}
            <div className="flex-1 text-center">
              <h1 className="font-poppins font-bold text-5xl md:text-6xl text-primary mb-1">
                Doon-Guide
              </h1>
              <p className="text-xs md:text-sm text-doon-gray font-nunito leading-relaxed">
                Smart travel & lifestyle companion for tourists and locals in
                Dehradun, Uttarakhand.
              </p>
            </div>

            {/* Right: QR Code */}
            <div className="flex-shrink-0 text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F2fdec21a824643829202aa82b7d6dde0?format=webp&width=800"
                alt="QR Code"
                className="w-24 h-24 md:w-28 md:h-28 object-contain shadow-md border-2 border-primary rounded"
              />
              <p className="text-xs mt-2 font-inter text-doon-gray">
                Scan to View
              </p>
            </div>
          </div>

          {/* Decorative line with icons */}
          <div className="flex items-center justify-center gap-2 text-primary">
            <MapPin className="w-4 h-4" />
            <Mountain className="w-4 h-4" />
          </div>
        </div>

        {/* Section 1: Project Brief */}
        <div className="border-b-4 border-dashed border-gray-300">
          <div className="bg-primary text-white px-6 md:px-8 py-3">
            <h2 className="font-poppins font-bold text-xl md:text-2xl">
              Project Brief
            </h2>
          </div>
          <p className="font-nunito text-sm leading-relaxed text-doon-gray p-6 md:p-8">
            The project aims to create an integrated digital guide for Dehradun
            and nearby Uttarakhand regions.{" "}
            <span className="font-bold text-primary">Doon-Guide</span>{" "}
            simplifies exploration for tourists and locals by combining
            navigation, heritage insights, food & stay suggestions, and
            real-time travel assistance. It leverages geolocation-based
            recommendations and a community-driven review system to connect
            users with{" "}
            <span className="font-bold text-primary">
              authentic local experiences
            </span>
            .
          </p>
        </div>

        {/* Section 2: Screens with 3D Overlap Effect */}
        <div className="border-b-4 border-dashed border-gray-300">
          <div className="bg-primary text-white px-6 md:px-8 py-3">
            <h2 className="font-poppins font-bold text-xl md:text-2xl">
              Screens
            </h2>
          </div>

          <div className="p-6 md:p-8 bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="relative h-96 md:h-96 flex items-center justify-center mb-6">
              {/* Overlapping mockup cards with 3D effect */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ perspective: "1200px" }}
              >
                {[
                  {
                    title: "Home Screen",
                    img: "https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F71ec9fef3b364e91886ffa30df3e3edf?format=webp&width=800",
                    transform:
                      "translateX(-120px) translateY(-40px) rotateY(15deg) rotateX(-8deg)",
                  },
                  {
                    title: "Popular Guides",
                    img: "https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F1525675367bd4869a7bd74356c9575db?format=webp&width=800",
                    transform: "translateZ(40px) scale(1.05)",
                  },
                  {
                    title: "Guide Details",
                    img: "https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2Fc25f23c06d184e77a810b831253eab60?format=webp&width=800",
                    transform:
                      "translateX(120px) translateY(40px) rotateY(-15deg) rotateX(8deg)",
                  },
                ].map((screen, idx) => (
                  <div
                    key={idx}
                    className="absolute w-48 h-64 md:w-56 md:h-72 bg-white rounded-lg border-4 border-primary shadow-xl overflow-hidden"
                    style={{
                      transform: screen.transform,
                      zIndex: idx === 1 ? 10 : 5,
                    }}
                  >
                    <img
                      src={screen.img}
                      alt={screen.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Grid of 6 screenshots below */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8">
              {[
                {
                  title: "Home Screen – Explore",
                  img: "https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F71ec9fef3b364e91886ffa30df3e3edf?format=webp&width=800",
                },
                {
                  title: "Popular Guides Near You",
                  img: "https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F1525675367bd4869a7bd74356c9575db?format=webp&width=800",
                },
                {
                  title: "Guide Profile & Details",
                  img: "https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2Fc25f23c06d184e77a810b831253eab60?format=webp&width=800",
                },
                {
                  title: "Explore Dehradun",
                  img: "https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F8c9197c55dd64a4a9de103b0e72a545e?format=webp&width=800",
                },
                {
                  title: "Weekend Trips",
                  img: "https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F71ec9fef3b364e91886ffa30df3e3edf?format=webp&width=800",
                },
                {
                  title: "Safety & Verification",
                  img: "https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F1525675367bd4869a7bd74356c9575db?format=webp&width=800",
                },
              ].map((screen, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border-2 border-primary overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={screen.img}
                    alt={screen.title}
                    className="w-full aspect-video object-cover"
                  />
                  <p className="font-nunito font-semibold text-xs md:text-sm text-primary p-2 text-center">
                    {screen.title}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-doon-gray font-inter italic mt-6">
              Designed in Figma – Responsive Web & Mobile
            </p>
          </div>
        </div>

        {/* Sections 3 & 4: Research & Insights (Side by Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b-4 border-dashed border-gray-300">
          {/* Section 3: Design Research Methodology */}
          <div className="border-r-4 border-dashed border-gray-300 lg:border-r-4 lg:border-b-0">
            <div className="bg-orange-100 px-6 md:px-8 py-3">
              <h3 className="font-poppins font-bold text-lg md:text-xl text-orange-600">
                Design Research Methodology
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <p className="font-nunito text-xs text-doon-gray font-semibold">
                User-Centered Design Approach
              </p>
              {[
                {
                  icon: Users,
                  label: "Empathize",
                  desc: "Interviews with travelers and locals",
                },
                {
                  icon: ClipboardList,
                  label: "Define",
                  desc: "Pain points and user needs analysis",
                },
                {
                  icon: Lightbulb,
                  label: "Ideate",
                  desc: "Integrated guide platform concept",
                },
                {
                  icon: MapPin,
                  label: "Wireframe",
                  desc: "Lo-fi layouts for navigation",
                },
                {
                  icon: TrendingUp,
                  label: "Prototype",
                  desc: "Responsive mockups in Figma",
                },
                {
                  icon: CheckCircle,
                  label: "Test & Refine",
                  desc: "User feedback from students",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-3 items-start">
                    <Icon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-poppins font-semibold text-xs text-orange-600">
                        {item.label}
                      </p>
                      <p className="font-nunito text-xs text-doon-gray">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Key Insights */}
          <div>
            <div className="bg-blue-100 px-6 md:px-8 py-3">
              <h3 className="font-poppins font-bold text-lg md:text-xl text-primary">
                Key Insights
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-5">
              {/* Primary Research */}
              <div>
                <h4 className="font-poppins font-bold text-xs text-orange-600 mb-3">
                  Primary Research Highlights
                </h4>
                <ul className="space-y-2">
                  {[
                    "Interviews with 30+ travelers visiting Dehradun & Mussoorie",
                    "Pain points: scattered info, unreliable navigation, language barriers",
                    "Locals wanted promotion of hidden spots and eco-tourism",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 font-nunito text-xs text-doon-gray"
                    >
                      <span className="text-secondary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-2 border-gray-300"></div>

              {/* Secondary Research */}
              <div>
                <h4 className="font-poppins font-bold text-xs text-orange-600 mb-3">
                  Secondary Research Highlights
                </h4>
                <ul className="space-y-2">
                  {[
                    "Tourism in Uttarakhand growing 12% annually",
                    "Increasing use of digital maps and review platforms",
                    "Gap in UI solutions for regional tour guidance",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 font-nunito text-xs text-doon-gray"
                    >
                      <span className="text-secondary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Reflection & Learning */}
        <div className="border-b-4 border-dashed border-gray-300">
          <div className="bg-green-100 px-6 md:px-8 py-3">
            <h3 className="font-poppins font-bold text-lg md:text-xl text-green-700 flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Reflection & Learning
            </h3>
          </div>
          <p className="font-nunito text-xs md:text-sm leading-relaxed text-doon-gray p-6 md:p-8 italic">
            This project deepened my understanding of designing for emotional
            and cultural context. Working on Doon-Guide helped me connect
            technology with the spirit of Uttarakhand — simplicity, warmth, and
            accessibility. I learned how UX can bridge local identity and
            digital utility while improving tourist confidence and civic
            engagement.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F9046ef5e810c48e78a6b3f1977ae1fdf?format=webp&width=800"
              alt="DIT Logo"
              className="w-20 h-20 object-contain"
            />
          </div>

          <div className="text-center flex-1">
            <p className="font-inter text-xs md:text-sm font-medium">
              Created by Divyanshi Negi | UI/UX Design Batch 2025–2027 | DIT
              University, Dehradun
            </p>
            <p className="font-inter text-xs mt-1 opacity-90">
              © 2025 – All Rights Reserved.
            </p>
          </div>

          <div className="flex-shrink-0 text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F00974640ca8c40aa9cc4806fcc2a0b70%2F2fdec21a824643829202aa82b7d6dde0?format=webp&width=800"
              alt="QR Code"
              className="w-16 h-16 object-contain shadow-md rounded"
            />
            <p className="text-xs mt-1 opacity-90">Website</p>
          </div>
        </div>
      </div>
    </div>
  );
}
