import { useState } from "react";

const dataGuru = [
  {
    id: 1,
    nama: "Budi Santoso, S.Pd",
    mapel: "Matematika",
    foto: "https://placehold.co/200x200?text=Budi",
  },
  {
    id: 2,
    nama: "Siti Aminah, M.Pd",
    mapel: "Bahasa Indonesia",
    foto: "https://placehold.co/200x200?text=Siti",
  },
  {
    id: 3,
    nama: "Ahmad Fauzi, S.Pd.I",
    mapel: "Pendidikan Agama Islam",
    foto: "https://placehold.co/200x200?text=Ahmad",
  },
  {
    id: 4,
    nama: "Rina Kartika, S.Pd",
    mapel: "Bahasa Inggris",
    foto: "https://placehold.co/200x200?text=Rina",
  },
];

export default function Guru() {
  const [guruList] = useState(dataGuru);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
        Daftar Guru
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {guruList.map((guru) => (
          <div
            key={guru.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={guru.foto}
              alt={guru.nama}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-500"
            />
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {guru.nama}
            </h2>
            <p className="text-gray-600 text-center">{guru.mapel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
