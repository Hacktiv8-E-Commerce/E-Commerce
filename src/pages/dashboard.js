import React from "react";
import { Header, Promo, Items, Footer } from "../components/index";
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
