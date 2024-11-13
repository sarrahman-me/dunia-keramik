import { ChatBubble } from "@/components/commons";
import { CatalogProducts } from "@/components/layouts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <ChatBubble text="Halo! Ada keramik lantai 40x40 cm dengan tekstur matt, sedikit kasar tapi mudah dibersihkan dan tidak licin. Cocok untuk kesan nyaman di rumah, dan harganya juga terjangkau." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=40x40&tekstur=Matt"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Berikutnya, keramik 50x50 cm, tekstur matt juga, sedikit lebih besar dan kokoh. Harganya masih cukup terjangkau. Bagaimana menurut Kamu?" />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=50x50&tekstur=Matt"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Kini, ada ukuran 60x60 cm. Dengan tekstur matt dan kesan yang lebih luas. Cocok untuk ruangan besar, dengan harga sedikit lebih tinggi." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=60x60&tekstur=Matt"} />
        </Suspense>
      </div>


      <div className="space-y-3">
        <ChatBubble text="Pilihan berikutnya, granit 60x60 cm tekstur matt. Mewah, anti licin, dan tahan lama. Kualitasnya sangat sepadan dengan harga." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Granit&ukuran=60x60&tekstur=Matt"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Untuk dinding dapur, kami punya keramik ukuran 25x40 cm, tekstur glossy dan mudah dibersihkan. Harganya sangat ramah di kantong." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=25x40&tekstur=Glossy"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Selanjutnya, keramik dinding dapur ukuran 25x50 cm, lebih besar dan lebih elegan. Tetap mudah dibersihkan, dan harga sedikit lebih tinggi." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=25x50&tekstur=Glossy"} />
        </Suspense>
      </div>


      <div className="space-y-3">
        <ChatBubble text="Ada juga ukuran 30x60 cm untuk dinding dapur. Lebih besar dan memberikan kesan mewah. Harganya menengah." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=30x60&tekstur=Glossy"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <ChatBubble text="Terakhir, granit dinding dapur 30x60 cm glossy, tampilan premium dan mudah dibersihkan. Pilihan terbaik dengan kualitas tinggi." />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Granit&ukuran=30x60&tekstur=Glossy"} />
        </Suspense>
      </div>
    </div>
  )
}
