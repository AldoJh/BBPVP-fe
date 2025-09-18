"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Logo Sekolah */}
        <motion.img
          src="../../public/matahari.jpg" // ganti dengan path logo sekolahmu
          alt="Logo Sekolah"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-24 h-24 mx-auto mb-6"
        />

        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-green-900"
        >
          Kontak <span className="text-green-700">Kami</span>
        </motion.h1>

        {/* Alamat & Info Kontak */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3 text-lg"
        >
          <p>📍 Jl. Karya Wisata No.31, Deli Tua, Sumatera Utara</p>
          <p>
            ✉️ Email:{" "}
            <a
              href="mailto:admin@harapan.ac.id"
              className="text-green-700 font-semibold hover:underline"
            >
              admin@harapan.ac.id
            </a>
          </p>
          <p>
            ☎️ Telepon:{" "}
            <a
              href="tel:+6281376055359"
              className="text-green-700 font-semibold hover:underline"
            >
              081376055359
            </a>
          </p>
          <p>
            💬 WhatsApp:{" "}
            <a
              href="https://wa.me/6281376055359"
              className="text-green-700 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              081376055359
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
