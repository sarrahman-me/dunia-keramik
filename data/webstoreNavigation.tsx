import { ReactElement } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { TbAugmentedReality2, TbTools } from "react-icons/tb";

export const webstore_navigation: {
  title: string;
  icon: ReactElement;
}[] = [
    {
      title: "Home",
      icon: <MdOutlineDashboard />,
    },
    {
      title: "Barang",
      icon: <BsBoxSeam />,
    },
    {
      title: "Kalkulator",
      icon: <TbTools />,
    },
    {
      title: "Visualizer",
      icon: <TbAugmentedReality2 />,
    },
  ];
