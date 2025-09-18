"use client";
import { motion } from "framer-motion";

export default function Program() {
  const programs = [
    {
      title: "Kelas Fokus Kedokteran",
      desc: "Program spesial yang pertama di Indonesia, dirancang untuk menghasilkan tenaga medis yang siap menghadapi tantangan kesehatan Indonesia.",
      img: "https://placehold.co/600x400?text=Kedokteran",
    },
    {
      title: "Kurikulum Merdeka",
      desc: "Kurikulum yang memberikan kebebasan bagi siswa untuk lebih berkembang sesuai dengan minat dan bakatnya.",
      img: "https://placehold.co/600x400?text=Kurikulum",
    },
    {
      title: "Pertukaran Guru & Siswa",
      desc: "Program yang memungkinkan pertukaran pengalaman dan pengetahuan antara guru dan siswa dari berbagai sekolah.",
      img: "https://placehold.co/600x400?text=Pertukaran",
    },
  ];

  return (
    <section className="px-6 max-w-6xl mx-auto py-20">
      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-12"
      >
        Program <span className="text-green-700">Unggulan</span>
      </motion.h1>

      {/* Grid Card */}
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={program.img}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{program.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
