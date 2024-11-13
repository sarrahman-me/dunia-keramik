import { ChatBubble } from "@/components/commons";
import { CatalogProducts } from "@/components/layouts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <ChatBubble text="Halo! Ini keramik lantai 40x40 cm glossy, cocok untuk kesan bersih dan modern. Harganya terjangkau." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=40x40&tekstur=Glossy"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Selanjutnya, keramik 50x50 cm glossy, lebih besar dan mewah. Harga masih terjangkau." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=50x50&tekstur=Glossy"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Kemudian, granit lantai 60x60 cm glossy, mewah dan tahan lama. Harga sedikit lebih tinggi." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Granit&ukuran=60x60&tekstur=Glossy"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Terakhir, keramik 60x60 cm glossy, besar, elegan, dan mudah dibersihkan. Cocok untuk segala ruangan." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=60x60"} />
        </Suspense>
      </div>
    </div>
  )
}
