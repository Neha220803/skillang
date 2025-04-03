// sitemap-generator.js
const fs = require("fs");
const path = require("path");

// Define your site URL
const SITE_URL = "https://skillang.com"; // Replace with your actual domain

// Define all your routes/pages
const routes = [
  "/",
  "/work-abroad",
  "/study-abroad",
  "/nursing",
  "/language-test-preparation",
  "/ausbildung-program",
  "/contact",
  // Add all other routes for your site
];

// Generate sitemap.xml content
const generateSitemap = () => {
  const today = new Date().toISOString().split("T")[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add each route to the sitemap
  routes.forEach((route) => {
    sitemap += `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);

console.log("Sitemap generated successfully!");
