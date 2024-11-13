import { ChatBubble } from "@/components/commons";
import { CatalogProducts } from "@/components/layouts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <ChatBubble text="Hallo! Untuk lantai kamar mandi, coba keramik ukuran 25x25 cm dengan tekstur kasar, anti licin, dan pastinya aman. Harganya pun sangat terjangkau." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=25x25"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Untuk dinding, ada keramik 25x40 cm dengan tekstur glossy. Mudah dibersihkan dan tetap menawan. Harganya juga ramah kantong." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=25x40&tekstur=Glossy"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Selanjutnya, ada pilihan dinding ukuran 25x50 cm. Ukuran lebih besar, tekstur glossy, dan mudah dibersihkan. Harganya sedikit lebih tinggi." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=25x50&tekstur=Glossy"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Untuk lantai, coba keramik 30x30 cm dengan tekstur kasar, anti licin, dan tampilannya tetap stylish. Harga masih cukup terjangkau." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=30x30"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Untuk dinding, ukuran 30x60 cm bisa jadi pilihan. Tekstur glossy, mudah dibersihkan, dan memberi kesan lebih elegan di kamar mandi. Harganya menengah." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=30x60&tekstur=Glossy"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Terakhir, jika ingin yang premium, granit dinding 30x60 cm dengan tekstur glossy. Mudah dibersihkan dan tampilannya sangat mewah. Harganya sepadan dengan kualitas." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Granit&ukuran=30x60&tekstur=Glossy"} />
        </Suspense>
      </div>
    </div>
  )
}
