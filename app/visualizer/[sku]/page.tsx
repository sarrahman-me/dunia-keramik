import IBarang from "@/interfaces/barang";
import { GetDataApi } from "@/utils/fetcher";
import { Metadata } from "next";

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
    description: `Visualisasi ${barang.kategori} ${barang.nama_barang} ${barang.brand}`,
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

export default async function VisualisasiByProduct({
  params,
}: {
  params: { sku: string; };
}) {
  const responseFloori = await fetch(
    `https://api.server.floori.io/new-floori/v3/studio/explore?sku=${params.sku}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer d9a049b1bba5a1b00d81525a4e919304396beb70dbe523bdb0d178d17f98eabd3806f7031eea99908e70d22c622018150da4`,
      },
    }
  );

  const productFloori = await responseFloori.json();

  const iframeStyle = {
    width: "100%",
    height: "100vh",
    border: "none",
  };

  return (
    <div>
      <iframe
        src={`https://tokokeramik.floori.io/?product=${productFloori[0].id}`}
        style={iframeStyle}
        title="Visualisasi"
      ></iframe>
    </div>
  );
}
