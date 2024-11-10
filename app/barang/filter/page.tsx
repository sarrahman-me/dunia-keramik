import { SearchBar } from "@/components/commons";
import { CatalogProducts } from "@/components/layouts";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { kategori: string, ukuran: string, motif: string };
}) {
  const queryAtribute = `kategori=${searchParams.kategori || ""}&ukuran=${searchParams.ukuran || ""
    }&motif=${searchParams.motif || ""}`;

  return (
    <div>
      <SearchBar />
      <p className="p-2 font-medium text-secondary-medium">
        Pilihan {searchParams.kategori} {searchParams.ukuran} {searchParams.motif}
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <CatalogProducts atributQuery={queryAtribute} />
      </Suspense>
    </div>
  );
}
