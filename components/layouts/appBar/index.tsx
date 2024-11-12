"use client";
/* eslint-disable @next/next/no-img-element */
import { webstore_navigation } from "@/data/webstoreNavigation";
import { isActivePage } from "@/utils/isActivePage";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export default function AppBar({
  arrowBack,
}: {
  arrowBack?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const navigationMap: Record<string, string> = {
    Home: `/`,
    Barang: `/barang`,
    Kalkulator: `/kalkulator`,
    Visualizer: `/visualizer`
  };

  return (
    <section className="flex justify-between bg-white p-4 text-secondary-medium shadow rounded items-center">
      {arrowBack && (
        <IoMdArrowBack
          onClick={() => router.back()}
          className="cursor-pointer text-xl"
        />
      )}

      {/* logo */}
      <div className="flex items-center space-x-3">
        <img
          className="h-10"
          src={"https://toko-keramik-assets.s3.ap-southeast-1.amazonaws.com/logo-dunia-keramik81672"}
          alt="Dunia Keramik"
        />
        <p className="text-xl font-bold">Dunia Keramik</p>
      </div>
      <div className="items-center space-x-8 hidden md:flex md:space-x-10">
        {webstore_navigation.map((item) => {
          const isActive = isActivePage(
            navigationMap[item.title],
            pathname,
          );

          return (
            <Link
              className={`hover:font-medium transition
                        ${isActive
                  ? "text-primary-600"
                  : "text-secondary-medium"
                }
                        `}
              key={item.title}
              href={navigationMap[item.title]}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
