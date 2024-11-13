import { CatalogProducts } from "@/components/layouts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="space-y-7">
      {/* catalog */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Keramik Lantai Dapur
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=40x40&tekstur=Matt"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Keramik Lantai yang Besar
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=50x50&tekstur=Matt"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Keramik Yang Lebih Besar
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Keramik&ukuran=60x60&tekstur=Matt"} />
        </Suspense>
      </div>


      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Granit Lantai Dapur
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Granit&ukuran=60x60&tekstur=Matt"} />
        </Suspense>
      </div>
    </div>
  )
}
