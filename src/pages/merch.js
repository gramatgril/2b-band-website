import React from "react";

import Layout from "./../layout/layout";
import SEO from "./../layout/SEO";
import Legal from "./../components/Legal";
import MerchPage from "../components/Merch/MerchPage";

export default () => {
  return (
    <Layout>
      <SEO title="Merch" />
      <MerchPage />
    </Layout>
  );
};
