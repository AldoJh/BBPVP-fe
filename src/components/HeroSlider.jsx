import { useState, useEffect } from "react";

const slides = [
  {
    title: "Danau Toba",
    subtitle: "Pesona alam dan budaya Batak yang memikat wisatawan dunia",
    image: "https://picsum.photos/1200/600?random=1"
  },
  {
    title: "Candi Borobudur",
    subtitle: "Warisan budaya dunia dan keajaiban arsitektur abad ke-9",
    image: "https://picsum.photos/1200/600?random=2"
  },
  {
    title: "Pantai Kuta, Bali",
    subtitle: "Surga pasir putih, ombak indah, dan matahari terbenam yang menakjubkan",
    image: "https://picsum.photos/1200/600?random=3"
  },
  {
    title: "Raja Ampat, Papua",
    subtitle: "Destinasi diving terbaik dengan keanekaragaman laut menakjubkan",
    image: "https://picsum.photos/1200/600?random=4"
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h1 className="text-5xl font-bold mb-4 text-center drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-xl mb-6 text-center drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
