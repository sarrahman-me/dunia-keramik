import { PostDataApi } from "@/utils/fetcher";
import { cookies } from "next/headers";
import CatalogProducts from "../catalogProducts";

interface TrackedProduct {
  sku: string;
  timestamp: number;
}

export default async function RecomendationProducts() {
  const cookieStore = cookies();
  const preferedSku = cookieStore.get("X-Preferred-SKUs");

  if (!preferedSku) {
    return null;
  }

  const productsTracker: TrackedProduct[] = JSON.parse(
    preferedSku?.value || ""
  );

  // Get just the SKUs
  const skus = productsTracker.map((product) => product.sku);

  if (skus.length === 0) {
    return null;
  }

  const response = await PostDataApi(
    `${process.env.NEXT_PUBLIC_HOST}/recommendation`,
    {
      viewed_skus: skus
    }
  );

  const products = response.data.data;

  if (!products || products.length < 1) {
    return null
  }

  return (
    <div className="space-y-2">
      <div>
        <p className="p-2 font-medium text-secondary-medium">
          Kamu Mungkin Juga Suka
        </p>
        <CatalogProducts
          staticData
          products={products}
        />
      </div>
    </div>
  );
}
