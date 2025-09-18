import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/galleries?populate=img", {
        headers: {
          Authorization: `Bearer 454ecd8e3ae6a9f8fa64254843a6f875e2b5fca9f8efc67c451d36ee7358e7072a22f5b58dae3c9aec3a9233883a35ea532d862c368bd90911ccaa36143821a985ddbc2efce9de791557f7c178fe150170e3660fc80d3414b9b57258651fdd0d27bdb5c6326132174819ade9d3446b3514286f5b12c844595c2ed40c98237300`,
        },
      })
      .then((res) => {
        console.log("API Response:", res.data); // Log the response to debug
  
        // Extract images from the response
        const allImages = res.data?.data?.map((item) => {
          const img = item.img; // Access the `img` field directly
          return {
            id: img.id,
            url: img.formats?.large?.url || img.formats?.medium?.url || img.formats?.small?.url || "",
            alternativeText: img.alternativeText || "No description",
          };
        });
        console.log(allImages.img);
        setGalleryItems(allImages);
      })
      .catch((err) => console.error("Error fetching gallery items:", err));
  }, []);
  return (
    <section className="w-full bg-white py-20 px-4">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-12"
      >
        Galeri <span className="text-green-700">Wisata</span>
      </motion.h1>

      {/* Gallery Slider */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left Button */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-700 text-white p-3 rounded-full shadow hover:bg-green-800"
          onClick={() => {
            document.getElementById("gallery-slider").scrollBy({
              left: -300,
              behavior: "smooth",
            });
          }}
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-700 text-white p-3 rounded-full shadow hover:bg-green-800"
          onClick={() => {
            document.getElementById("gallery-slider").scrollBy({
              left: 300,
              behavior: "smooth",
            });
          }}
        >
          ▶
        </button>

        {/* Slider Content */}
        <div
          id="gallery-slider"
          className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth px-10"
        >
          {galleryItems.length > 0 ? (
            galleryItems.map((img, i) => (
              <motion.div
                key={img.id || i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[300px] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition"
              >
               <img
  src={`http://localhost:1337${img.url}`}
  alt="Gallery Item"
  className="w-full h-[200px] object-cover rounded-2xl hover:scale-110 transition-transform duration-500"
/>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">No images available.</p>
          )}
        </div>
      </div>
    </section>
  );
}