"use client";
import IBarang from "@/interfaces/barang";
import { useState } from "react";
import CatalogProducts from "../catalogProducts";

export default function RecomendByProduct({
  barang,
}: {
  barang: Partial<IBarang>;
}) {
  const [recomendedNotFound, setRecomendedNotFound] = useState<boolean>(false);

  if (recomendedNotFound) {
    return null;
  }

  return (
    <div>
      <p className="p-2 font-medium text-secondary-medium">
        Kamu Mungkin Juga Suka
      </p>
      <CatalogProducts
        pagination={false}
        setLengthProducts={(l) => setRecomendedNotFound(l < 2)}
        atributQuery={`kategori=${barang.kategori}&ukuran=${barang.ukuran}&motif=${barang.motif}&tekstur=${barang.tekstur}`}
      />
    </div>
  );
}
