import { ChatBubble } from "@/components/commons";
import { CatalogProducts } from "@/components/layouts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <ChatBubble text="Halo! Untuk lantai garasi, kami punya keramik ukuran 40x40 cm dengan tekstur yang kasar dan anti licin. Cocok untuk nuansa alami seperti bebatuan, dan harganya terjangkau." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=40x40&tekstur=Rock"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Pilihan lainnya, keramik lantai ukuran 50x50 cm. Tekstur kasar yang sama, dengan nuansa bebatuan, namun ukuran lebih besar. Harganya juga tetap cukup bersahabat." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=50x50&tekstur=Rock"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Untuk dinding garasi, ada keramik ukuran 20x40 cm dengan tekstur yang kasar, motif bebatuan, cocok untuk area luar ruangan. Harganya terjangkau." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=20x40"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Jika Kamu mencari yang lebih premium, kami punya granit lantai ukuran 60x60 cm dengan tekstur kasar. Tampilannya minimalis dan elegan, serta anti licin. Kualitasnya setara dengan harganya." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Granit&ukuran=60x60&tekstur=Rock"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Terakhir, untuk teras luar, ada keramik dinding ukuran 30x60 cm dengan tekstur kasar, sempurna untuk nuansa bebatuan yang alami. Harga menengah." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=30x60&tekstur=Rock"} />
        </Suspense>
      </div>
    </div>
  )
}
