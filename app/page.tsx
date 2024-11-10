/* eslint-disable @next/next/no-img-element */
import { SearchBar } from "@/components/commons";
import { CatalogProducts } from "@/components/layouts";
import { MotifList } from "@/components/spesific";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dunia Keramik Samarinda",
  description: "Toko Keramik Dan Granit terlengkap di Samarinda",
  alternates: {
    canonical: "https://www.duniakeramik.com",
  },
  openGraph: {
    title: "Dunia Keramik Samarinda",
    images: [
      {
        url: "https://tokokeramik-assets.s3.amazonaws.com/banner-dunia-keramik-9005",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default async function Home() {
  return (
    <div className="space-y-7">
      <SearchBar route={`/barang/search`} />

      {/* banner */}
      <div className="flex justify-center w-full rounded">
        <img width="1200" height="520" className="rounded" src="https://tokokeramik-assets.s3.amazonaws.com/banner-dunia-keramik-9005" alt="banner" />
      </div>

      {/* Textured */}
      <MotifList />

      {/* catalog */}
      <Suspense fallback={<div>Loading...</div>}>
        <CatalogProducts />
      </Suspense>


      {/* maps url */}
      <div className=" border rounded-md p-1 md:p-2 space-y-3">
        <p className="bg-secondary text-primary-900 p-0.5 rounded-md font-medium text-lg">
          Alamat Toko
        </p>
        <iframe
          src={"https://www.google.com/maps/embed?pb=!3m2!1sid!2sid!4v1730834720513!5m2!1sid!2sid!6m8!1m7!1ssTcLleLiQuY3Y-1vBbvAiw!2m2!1d-0.4824616045129979!2d117.1631837991901!3f70.06473755020677!4f2.7108455614533398!5f0.7820865974627469"}
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
