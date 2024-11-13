import { CatalogProducts } from "@/components/layouts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="space-y-7">
      {/* catalog */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Lantai Kamar Mandi
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=25x25"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Dinding Kamar Mandi
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=25x40"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Dinding yang Lebih Besar
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=25x50"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Lantai Kamar Mandi Besar
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=30x30"} />
        </Suspense>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="p-2 font-medium text-secondary-medium">
            Dinding Kamar Mandi Besar
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogProducts pagination={false} atributQuery={"ukuran=30x60"} />
        </Suspense>
      </div>

    </div>
  )
}
