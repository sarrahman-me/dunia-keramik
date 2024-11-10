"use client";
import { useState } from "react";
import IBarang from "@/interfaces/barang";
import CatalogProducts from "../catalogProducts";

export default function SimiliarProducts({
  barang,
}: {
  barang: Partial<IBarang>;
}) {
  const [similiarNotFound, setSimiliarNotFound] = useState<boolean>(false);

  if (similiarNotFound) {
    return null;
  }

  return (
    <div>
      <p className="p-2 font-medium text-secondary-medium">
        Produk Serupa
      </p>
      <CatalogProducts
        setLengthProducts={(l) => setSimiliarNotFound(l < 2)}
        pagination={false}
        atributQuery={`kategori=${barang.kategori}&group=${barang.group}&brand=${barang.brand}&ukuran=${barang.ukuran}`}
      />
    </div>
  );
}
