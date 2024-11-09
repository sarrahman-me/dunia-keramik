import { SearchBar } from "@/components/commons";
import { CatalogProducts } from "@/components/layouts";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Halaman Barang"
};

export default function Home() {
  return (
    <div className="space-y-7">
      <SearchBar route={`/barang/search`} />

      <Suspense fallback={<div>Loading...</div>}>
        <CatalogProducts />
      </Suspense>
    </div>
  )
}
