"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Profil() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/profiles", {
          headers: {
            Authorization: `Bearer 454ecd8e3ae6a9f8fa64254843a6f875e2b5fca9f8efc67c451d36ee7358e7072a22f5b58dae3c9aec3a9233883a35ea532d862c368bd90911ccaa36143821a985ddbc2efce9de791557f7c178fe150170e3660fc80d3414b9b57258651fdd0d27bdb5c6326132174819ade9d3446b3514286f5b12c844595c2ed40c98237300`,
          },
        });
        const data = await res.json();
        setProfile(data.data[0]);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <p className="text-center py-20 text-gray-600">Loading...</p>;
  }

  return (
    <section className="w-full bg-green-50 py-20">
      {/* Tentang Sekolah */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-12"
      >
        Tentang {profile.nama_wisata}
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Gambar Sekolah */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://placehold.co/600x600"
            alt={profile.nama_wisata}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-green-900/30"></div>
        </motion.div>

        {/* Deskripsi  */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {profile.tentang.split("\n").map((para, i) => (
            <p key={i} className="mt-4 text-lg leading-relaxed text-gray-700">
              {para}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Sambutan Kepala Sekolah */}
      <div className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-green-900 mb-10 text-left"
        >
          Sambutan Kepala Pengelola
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Teks Sambutan */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-left"
          >
            {profile.sambutan.split("\n").map((para, i) => (
              <p
                key={i}
                className="mt-4 text-lg text-gray-700 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* Foto Kepala Sekolah */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            src="https://placehold.co/500x550"
            alt="Kepala Sekolah"
            className="rounded-2xl shadow-lg object-cover mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
