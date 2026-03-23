"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import scss from "./layout.module.scss";

type ChildrenProps = {
  children: React.ReactNode;
};

const layout = ({ children }: ChildrenProps) => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
