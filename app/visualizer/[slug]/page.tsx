"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function VisualisasiByProduct() {
  const params = useParams();
  const slug = params.slug;
  const [idProduct, setIdProduct] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const responseFloori = await fetch(
        `https://api.server.floori.io/new-floori/v3/studio/explore?sku=${slug}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer d9a049b1bba5a1b00d81525a4e919304396beb70dbe523bdb0d178d17f98eabd3806f7031eea99908e70d22c622018150da4`,
          },
        }
      );

      const productFloori = await responseFloori.json();
      setIdProduct(productFloori[0].id);
    };

    fetchData();
  }, [slug]);

  const iframeStyle = {
    width: "100%",
    height: "100vh",
    border: "none",
  };

  return (
    <div>
      <iframe
        src={`https://tokokeramik.floori.io/?product=${idProduct}`}
        style={iframeStyle}
        title="Visualisasi"
      ></iframe>
    </div>
  );
}
