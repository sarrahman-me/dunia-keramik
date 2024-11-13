import { CatalogProducts } from "@/components/layouts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="space-y-7">
      {/* catalog */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Lantai Garasi
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=40x40&tekstur=Rock"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Lantai Garasi Besar
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=50x50&tekstur=Rock"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Dinding Garasi
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=20x40"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Granit Lantai Garasi
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"kategori=Granit&ukuran=60x60&tekstur=Rock"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Dinding Garasi Besar
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=30x60&tekstur=Rock"} />
        </Suspense>
      </div>

    </div>
  )
}
