"use client";
import { useEffect, useState } from "react";
import { GetDataApi } from "@/utils/fetcher";
import { useSearchParams } from "next/navigation";
import { CardProduct, Pagination } from "@/components/commons";
import IBarang from "@/interfaces/barang";
import { IMetadata } from "@/interfaces/response-api";

interface ICatalogProduct {
  atributQuery?: string;
  pagination?: boolean;
  limit?: number;
  products?: IBarang[];
  staticData?: boolean;
  setLengthProducts?: (l: number) => void;
}

interface resultInterface {
  metadata: IMetadata;
  data: IBarang[];
}

export default function CatalogProducts({
  atributQuery,
  pagination = true,
  limit = 30,
  setLengthProducts,
  products = [],
  staticData,
}: ICatalogProduct) {
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [resultData, setResult] = useState<resultInterface>({
    data: [],
    metadata: {
      page: 0,
      limit: 0,
      total_data: 0,
      total_pages: 0,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!staticData) {
        const response = await GetDataApi(
          `/api/products?page=${currentPage}&limit=${limit}&${atributQuery}`
        );

        const { metadata, data }: resultInterface = response.data;

        setResult({ data, metadata });

        if (setLengthProducts) {
          setLengthProducts(data.length);
        }
      }
    };

    fetchData();
    setLoading(false);
  }, [
    atributQuery,
    currentPage,
    limit,
    setLengthProducts,
    staticData,
  ]);

  if (loading) {
    return (
      <div className="space-y-5 animate-pulse">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="h-52 bg-secondary" />
          ))}
        </div>
      </div>
    );
  }

  const dataToUse: any[] = staticData ? products : resultData.data;

  return (
    <div className="space-y-5">
      {/* catalog */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
        {dataToUse?.map((barang, i) => (
          <CardProduct
            route={
              `/barang/${barang.sku}`
            }
            key={i}
            barang={barang.barang}
          />
        ))}
      </div>

      {/* pagination */}
      {pagination && !staticData ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          metadata={resultData.metadata}
        />
      ) : null}
    </div>
  );
}
