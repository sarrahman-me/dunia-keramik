"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ButtonVisualizer({ sku }: { sku: string }) {
  const router = useRouter();
  const [visual, setVisual] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const responseFloori = await fetch(
        `https://api.server.floori.io/new-floori/v3/studio/explore?sku=${sku}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer d9a049b1bba5a1b00d81525a4e919304396beb70dbe523bdb0d178d17f98eabd3806f7031eea99908e70d22c622018150da4`,
          },
        }
      );

      const productFloori = await responseFloori.json();
      setVisual(productFloori[0]?.id ? true : false);
    }

    fetchData()
  }, [sku])

  if (!visual) {
    return null
  }

  return (
    <button
      onClick={() => router.push(`/visualizer/${sku}`)}
      className="relative inline-flex items-center px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg font-medium tracking-wide transition-transform transform hover:border-primary-700 hover:text-primary-700 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 animate-bounce transition-transform duration-600 group-hover:rotate-180 group-hover:scale-125"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12h3m6 0h3m6 0h3m-9-9v3m0 6v3m0 6v3"
        />
      </svg>
      Visualisasi Produk Ini
    </button>
  )
}
