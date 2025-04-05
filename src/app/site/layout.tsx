import Navigation from "@/components/sites/navigation";
import React from "react";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }:Props) => {
  return <div className="h-full w-full">
    <Navigation />
    <div className="pt-16 w-full">
    {children}
    </div>
  </div>;
};

export default MainLayout;
