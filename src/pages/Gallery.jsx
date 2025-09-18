import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [galeri, setGaleri] = useState([]);

  useEffect(() => {
    const fetchGaleri = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/galeris?populate=gambar", {
          headers: {
            Authorization: `Bearer 690c4c4ef3ab95388d072b35afdaad41a3affdd4db333d95a550e085ab4c76d5e639386f95f317fa535da015bcba1d05472ad91be526453291e55ab3fb6d50e07d4c976331972b3e56ce31b12ffbc7dbe66d3daf69e637d0d85ce65b3b78d61e106401c76fe4bccf387adc01454b03f59661e98ca90ca7bf4bce4fd320a53ab5`
          }
        });
        setGaleri(res.data.data);
      } catch (err) {
        console.error("Error fetch galeri:", err);
      }
    };

    fetchGaleri();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      {galeri.map((item) =>
        item.attributes?.gambar?.data?.map((img) => (
          <div key={img.id} className="p-2">
            <img
              src={`http://localhost:1337${img.attributes.url}`}
              alt={img.attributes.alternativeText || ""}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Gallery;
