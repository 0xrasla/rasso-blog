import Head from "next/head";
import React from "react";

export const BaseLayout = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
      </Head>

      <main>{children}</main>
    </>
  );
};
