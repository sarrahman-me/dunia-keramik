"use client";
import { SearchBar } from "@/components/commons";
import { CatalogProducts } from "@/components/layouts";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const kategori = searchParams.get("kategori");
  const ukuran = searchParams.get("ukuran");
  const motif = searchParams.get("motif");
  const queryAtribute = `kategori=${kategori || ""}&ukuran=${ukuran || ""
    }&motif=${motif || ""}`;

  return (
    <div>
      <SearchBar />
      <p className="underline font-semibold m-2">
        Pilihan {kategori} {ukuran} {motif}
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <CatalogProducts atributQuery={queryAtribute} />
      </Suspense>
    </div>
  );
}
