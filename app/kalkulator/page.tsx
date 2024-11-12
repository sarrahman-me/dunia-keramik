import { WhatsappIcon } from "@/components/commons";
import { Kalkulator } from "@/components/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulator Keramik",
};

export default async function Alat() {
  return (
    <div className="space-y-3">
      <Kalkulator />

      {/* Whatsapp icon */}
      <WhatsappIcon />
    </div>
  );
}
