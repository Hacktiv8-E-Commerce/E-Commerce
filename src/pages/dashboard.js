import React from "react";
import { Header, Promo, Items, Footer } from "../components/index";
// import Header from "../components/header";
// import Promo from "../components/promo";
// import Items from "../components/items";
// import Footer from "../components/footer";
import { Stack } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Header />
      <Stack gap={4}>
        <Promo />
        <Items />
      </Stack>
      <Footer />
    </>
  );
}

export default Dashboard;
