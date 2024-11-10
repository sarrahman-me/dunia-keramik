"use client";
import Image from "next/image";
import WoodMotif from "@/public/wood.jpg";
import StoneMotif from "@/public/stone.jpg";
import RusticMotif from "@/public/rustic.jpeg";
import MarbleMotif from "@/public/marble.jpg";
import FancyMotif from "@/public/fancy.png";
import BasicMotif from "@/public/basic.png";
import { useRouter } from "next/navigation";

const motifList = [
  {
    title: "Marble",
    image: MarbleMotif,
  },
  {
    title: "Wood",
    image: WoodMotif,
  },
  {
    title: "Stone",
    image: StoneMotif,
  },
  {
    title: "Fancy",
    image: FancyMotif,
  },
  {
    title: "Basic",
    image: BasicMotif,
  },
  {
    title: "Rustic",
    image: RusticMotif,
  },
];

export default function MotifList() {
  const router = useRouter();

  return (
    <div className="my-2">
      <div className="flex justify-between items-center">
        <p className="p-2 font-medium text-secondary-medium">
          Pilihan Motif
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {motifList?.map((motif) => (
          <div
            onClick={() => router.push(`/barang/filter?motif=${motif.title}`)}
            key={motif.title}
            className="p-2 cursor-pointer relative"
          >
            <Image
              className="rounded-md h-28 md:h-36"
              src={motif.image}
              alt={motif.title}
            />
            <div className="absolute bottom-2 px-2 py-1.5 bg-gray-500/50 rounded-tr-md">
              <h2 className="text-white font-semibold md:text-lg text-center">
                {motif.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
