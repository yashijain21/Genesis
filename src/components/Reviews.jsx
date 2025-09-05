import React, { useState } from "react";

const reviews = [
  {
    company: "Steam Masters",
    role: "Cleaning Service",
    text: "Genesis Virtue helped us digitize our business and streamline operations. Their team was responsive and innovative."
  },
  {
    company: "Speedy Deals",
    role: "E-commerce Platform",
    text: "Our online presence completely transformed with their web design. Sales increased and customers loved the smooth experience."
  },
  {
    company: "Eduart",
    role: "Education Platform",
    text: "They built us an intuitive course registration system. The interface is clean, fast, and students find it super easy to use."
  },
  {
    company: "Speedy Cars",
    role: "Fintech Startup",
    text: "From branding to a seamless card-ordering app, Genesis Virtue delivered excellence at every step."
  },
  {
    company: "Albasha",
    role: "Restaurant",
    text: "Our restaurant’s website looks modern and welcoming now. Online bookings and customer engagement have grown massively."
  }
];

// Function to get initials
const getInitials = (name) => {
  const words = name.split(" ");
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-16 bg-white text-black text-center relative">
      <h2 className="text-4xl font-bold mb-8">✦ OUR REVIEWS ✦</h2>

      {/* Companies List */}
      <div className="flex mx-20 justify-between border-b border-b-gray-300 pb-4">
        {reviews.map((review, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`text-lg font-semibold ${
              i === activeIndex
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            {review.company}
          </button>
        ))}
      </div>

      {/* Review Content */}
      <div className="max-w-4xl mx-auto mt-10 text-left relative">
      <div className="flex justify-between  gap-10 ">
          <div>
            <div className="flex items-center gap-3 mb-3">
          {/* Profile Initials */}
          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
            {getInitials(reviews[activeIndex].company)}
          </div>
          <div>
            <p className="font-bold">{reviews[activeIndex].company}</p>
            <p className="text-sm text-gray-500">{reviews[activeIndex].role}</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          {reviews[activeIndex].text}
        </p>
        
        </div>
{/* Review Number on Right */}
        <div className=" text-7xl font-bold text-gray-200 mt-5">
          {String(activeIndex + 1).padStart(2, "0")}
        </div>
      </div>
        
      </div>
    </div>
  );
}
