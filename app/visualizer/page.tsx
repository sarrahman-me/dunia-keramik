import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visualizer Keramik",
};

export default function Visualizer() {
  const iframeStyle = {
    width: "100%",
    height: "100vh",
    border: "none",
  };

  return (
    <div>
      <iframe
        src="https://studio-prod.actumwork.pl/preview/d9a049b1bba5a1b00d81525a4e919304396beb70dbe523bdb0d178d17f98eabd3806f7031eea99908e70d22c622018150da4"
        style={iframeStyle}
        title="Visualisasi"
      ></iframe>
    </div>
  );
}
