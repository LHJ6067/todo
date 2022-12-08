import React from "react";
import Input from "../components/form/Input";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Input />
      <List />
    </Layout>
  );
};

export default Home;
