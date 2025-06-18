import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
