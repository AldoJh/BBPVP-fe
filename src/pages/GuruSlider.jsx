// src/pages/guru.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

export default function Guru() {
  const [guru, setGuru] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/gurus?populate=foto", {
        headers: {
          Authorization: `Bearer 690c4c4ef3ab95388d072b35afdaad41a3affdd4db333d95a550e085ab4c76d5e639386f95f317fa535da015bcba1d05472ad91be526453291e55ab3fb6d50e07d4c976331972b3e56ce31b12ffbc7dbe66d3daf69e637d0d85ce65b3b78d61e106401c76fe4bccf387adc01454b03f59661e98ca90ca7bf4bce4fd320a53ab5`, // hapus kalau public
        },
      })
      .then((res) => {
        setGuru(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // hp
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
        Guru <span className="text-green-700">Kami</span>
      </h2>

      <Slider {...settings}>
        {guru.map((item) => {
          const foto = item.foto?.url
            ? `http://localhost:1337${item.foto.url}`
            : "https://placehold.co/400x400?text=No+Image";

          return (
            <div key={item.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
                <img
                  src={foto}
                  alt={item.foto?.alternativeText || item.nama}
                  className="w-40 h-40 mx-auto object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.nama}
                </h3>
                <p className="text-gray-500">{item.jabatan}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
