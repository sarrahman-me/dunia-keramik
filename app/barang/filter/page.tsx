import { SearchBar, WhatsappIcon } from "@/components/commons";
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
    <div className="space-y-5">
      <SearchBar />

      {/* Catalog yang di filter */}
      <p className="p-2 font-medium text-secondary-medium">
        Pilihan {searchParams.kategori} {searchParams.ukuran} {searchParams.motif}
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <CatalogProducts atributQuery={queryAtribute} />
      </Suspense>

      {/* Whatsapp icon */}
      <WhatsappIcon />
    </div>
  );
}
