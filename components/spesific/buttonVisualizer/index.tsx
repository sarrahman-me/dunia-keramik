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
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 mr-2 animate-bounce transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
        />
      </svg>
      Coba di Ruangan Anda
    </button>
  )
}
