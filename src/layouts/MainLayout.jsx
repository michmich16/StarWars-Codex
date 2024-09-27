import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/header/Header";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};