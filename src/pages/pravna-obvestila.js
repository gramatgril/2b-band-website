import React from "react";

import Layout from "./../layout/layout";
import SEO from "./../layout/SEO";
import Legal from "./../components/Legal";

export default () => {
  return (
    <Layout>
      <SEO title="Pravna obvestila" />
      <Legal />
    </Layout>
  );
};
