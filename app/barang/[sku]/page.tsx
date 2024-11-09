import { GetDataApi } from "@/utils/fetcher";
import IBarangWebstore from "@/interfaces/barang-webstore";
import { DisplayData, ImageProductWithPreview } from "@/components/commons";
import IBarang from "@/interfaces/barang";
import {
  RecomendByProduct,
  SimiliarProducts,
  VisualPattern,
} from "@/components/layouts";
import { Metadata } from "next";
import { ButtonPesanWhatsapp } from "@/components/spesific";

export async function generateMetadata({
  params,
}: {
  params: { sku: string };
}): Promise<Metadata> {
  const responseBarang = await GetDataApi(
    `${process.env.NEXT_PUBLIC_HOST}/products/${params.sku}`
  );

  const barang: IBarang = responseBarang?.data.data.barang;

  return {
    title: `${barang.nama_barang} - ${barang.brand}`,
    description: `Detail ${barang.kategori} ${barang.nama_barang} ${barang.brand}`,
    openGraph: {
      title: `${barang.nama_barang} - ${barang.brand}`,
      images: [
        {
          url: barang.gambar_url || "",
          width: 700,
          height: 700,
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: { sku: string; };
}) {
  const response = await GetDataApi(
    `${process.env.NEXT_PUBLIC_HOST}/products/${params.sku}?`
  );

  const data: IBarangWebstore = response.data.data;
  const barang: IBarang = data.barang;

  return (
    <div className="space-y-6">
      <div className="w-full flex flex-col md:flex-row gap-5">
        <ImageProductWithPreview product={barang} />

        <div className="bg-white border rounded-md w-full md:w-2/3 space-y-4 p-2 md:p-3">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl">
            {barang.nama_barang}
          </p>
          <DisplayData title="Kategori" data={barang.kategori} />
          <DisplayData title="Merek" data={barang.brand} />
          <DisplayData
            title="Berat"
            data={`${barang.berat / 1000} kg / ${barang.berat} g`}
          />
          {/*
          {webstore.show_price ? (
            <DisplayData title="Harga" data={`${formatCurrency(data.price)}`} />
          ) : null}
          {webstore.show_stock ? (
            <DisplayData title="Stok" data={`${data.stock}`} />
          ) : null}
        */}
        </div>
      </div>

      {/* spesifikasi barang */}
      {barang.kualitas || barang.tekstur || barang.motif || barang.ukuran ? (
        <div className="bg-white border rounded-md p-1 md:p-2 space-y-3">
          <p className="bg-secondary text-primary-900 p-0.5 rounded-md font-medium text-lg">
            Spesifikasi Barang
          </p>
          {barang.ukuran && <DisplayData title="ukuran" data={barang.ukuran} />}
          {barang.motif && <DisplayData title="motif" data={barang.motif} />}
          {barang.tekstur && (
            <DisplayData title="tekstur" data={barang.tekstur} />
          )}
          {barang.kualitas && (
            <DisplayData title="Kualitas" data={barang.kualitas} />
          )}
        </div>
      ) : null}

      {/* visual pattern */}
      <VisualPattern imageUrl={barang.gambar_url} />

      {/* Whatsapp Button */}
      <ButtonPesanWhatsapp barang={barang} whatsapp={"082157758174"} />

      {/* similiar product */}
      <SimiliarProducts barang={barang} />

      {/* Rekomendasi barang */}
      <RecomendByProduct barang={barang} />
    </div>
  );
}
