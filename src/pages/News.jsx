"use client";
import { motion } from "framer-motion";

export default function News() {
  const newsData = [
    {
      title: "Siswi Raih Medali Perak di IABO",
      desc: "Prestasi membanggakan kembali ditorehkan oleh siswa Indonesia di kancah internasional. Dalam ajang International Applied Biology Olympiad (IABO) yang diselenggarakan di Bali pada 19 hingga 23 Juni 2024, Dyananda Aulia Puteri Irawan, siswa asal Sumatera Utara, berhasil meraih medali perak.",
    },
    {
      title: "Pelatihan Kepemimpinan Siswa",
      desc: "Program pelatihan kepemimpinan untuk siswa berlangsung sukses, meningkatkan keterampilan komunikasi dan kerja tim.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4">
      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-12"
      >
        Berita <span className="text-green-700">Terbaru</span>
      </motion.h1>

      {/* Grid Berita */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {newsData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-green-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
