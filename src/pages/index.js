import React from "react";

import { Layout, SEO } from "./../layout";
import Page from "./../layout/Page/Page";

export default () => {
  return (
    <Layout>
      <SEO title="Welcome" />
      <Page />
    </Layout>
  );
};
