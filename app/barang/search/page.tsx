import { SearchBar, WhatsappIcon } from "@/components/commons";
import NotFound404 from "@/public/svg/product-404.svg";
import { MdSearch } from "react-icons/md";
import { CatalogProducts } from "@/components/layouts";
import Image from "next/image";
import { GetDataApi } from "@/utils/fetcher";
import IBarang from "@/interfaces/barang";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { query: string };
}): Promise<Metadata> {
  return {
    title: `Pencarian ${searchParams.query}`,
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const responseBarang = await GetDataApi(
    `${process.env.NEXT_PUBLIC_HOST}/products?limit=100&query=${searchParams.query}`
  );

  const barang: IBarang[] = responseBarang.data.data;

  if (barang.length === 0) {
    return (
      <div className="space-y-4">
        <SearchBar route={`/barang/search`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col justify-center items-center order-2 md:order-1 prose-base">
            <div className="space-y-3 text-left mx-auto max-w-md">
              <h3 className="text-lg text-center md:text-left md:text-2xl font-bold text-secondary-medium">
                Barang yang kamu cari tidak ditemukan
              </h3>
              <p>Coba lakukan pencarian dengan kata kunci lain</p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image src={NotFound404} alt="Check" width={400} height={400} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SearchBar route={`/barang/search`} />

      {/* Catalog barang */}
      {searchParams.query.trim() !== "" && (
        <span className="flex items-center space-x-2 text-xs text-primary-600">
          <MdSearch />
          <p>Hasil pencarian untuk &quot;{searchParams.query}&quot;</p>
        </span>
      )}
      <CatalogProducts
        pagination={false}
        staticData
        products={barang}
      />

      {/* Whatsapp icon */}
      <WhatsappIcon />
    </div>
  );
}
