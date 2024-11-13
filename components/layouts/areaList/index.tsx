"use client";
import Image from "next/image";
import Garasi from "@/public/garasi.jpeg";
import Dapur from "@/public/dapur.jpg";
import KamarMandi from "@/public/kamarmandi.jpg";
import DalamRumah from "@/public/dalamrumah.jpeg";
import { useRouter } from "next/navigation";

const AreaList = [
  {
    title: "Dalam Rumah",
    image: DalamRumah,
    slug: "dalam-rumah"
  },
  {
    title: "Garasi",
    image: Garasi,
    slug: "garasi"
  },
  {
    title: "Kamar Mandi",
    image: KamarMandi,
    slug: "kamar-mandi"
  },
  {
    title: "Dapur",
    image: Dapur,
    slug: "dapur"
  },
];

export default function AreaListComp() {
  const router = useRouter();

  return (
    <div className="my-2">
      <div className="flex justify-between items-center">
        <p className="p-2 font-medium text-secondary-medium">
          Rekomendasi Setiap Ruangan
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {AreaList?.map((area) => (
          <div
            onClick={() => router.push(`/rooms/${area.slug}`)}
            key={area.title}
            className="p-2 cursor-pointer relative"
          >
            <Image
              className="rounded-md h-28 md:h-36"
              src={area.image}
              alt={area.title}
            />
            <div className="absolute bottom-2 px-2 py-1.5 bg-gray-500/50 rounded-tr-md">
              <h2 className="text-white font-semibold md:text-lg text-center">
                {area.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
