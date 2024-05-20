---
title: "Server-side Rendering (SSR)"
date: "2024-05-17"
---

If a page uses **Server-side Rendering**, the page HTML is generated on **each request**.

To use Server-side Rendering for a page, you need to _export_ an _async_ function called _getServerSideProps_. This function will be called by the server on every request.

For example, suppose that your page needs to pre-render frequently updated data (fetched from an external API). You can write _getServerSideProps_ which fetches this data and passes it to _Page_ like below:

As you can see, _getServerSideProps_ is similar to _getStaticProps_, but the difference is that _getServerSideProps_ is run on every request instead of on build time.

To learn more about how _getServerSideProps_ works, check out our Data Fetching documentation.
