// sitemap-generator.js
const fs = require("fs");
const path = require("path");

// Define your site URL
const SITE_URL = "https://skillang.com"; // Replace with your actual domain

// Define all your routes from App.js
const routes = [
  "/",
  "/home",
  "/nursing-in-germany",
  "/study-abroad-form",
  "/work-abroad-form",
  "/nursing",
  "/work-abroad",
  "/study-abroad",
  "/study-abroad/uk",
  "/lang-test-prep",
  "/terms-of-use",
  "/privacy-policy",
  "/universities",
  "/more/education-loan",
  "/more/scholarships",
  "/more/events",
  "/more/sop-and-resume-writing",
  "/more/german-opportunity-card",
  "/more/blogs",
  "/more/blogs/new-york",
  // Skip debug routes: "/apidebug"
];

// Generate sitemap.xml content
const generateSitemap = () => {
  const today = new Date().toISOString().split("T")[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add each route to the sitemap with smart prioritization
  routes.forEach((route) => {
    // Determine priority and change frequency based on route type
    let priority = "0.8"; // Default priority
    let changefreq = "monthly"; // Default change frequency

    // Main pages get highest priority
    if (route === "/" || route === "/home") {
      priority = "1.0";
      changefreq = "weekly";
    }
    // Landing pages get high priority
    else if (route.includes("-in-germany") || route.includes("-form")) {
      priority = "0.9";
      changefreq = "weekly";
    }
    // Main service pages
    else if (
      route === "/nursing" ||
      route === "/work-abroad" ||
      route === "/study-abroad"
    ) {
      priority = "0.9";
      changefreq = "weekly";
    }
    // Country-specific pages
    else if (route.startsWith("/study-abroad/")) {
      priority = "0.8";
      changefreq = "monthly";
    }
    // Blog pages
    else if (route.includes("/blogs")) {
      priority = "0.7";
      changefreq = "weekly";
    }
    // Legal pages
    else if (route === "/terms-of-use" || route === "/privacy-policy") {
      priority = "0.4";
      changefreq = "yearly";
    }
    // Other pages
    else {
      priority = "0.6";
    }

    sitemap += `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Ensure the output directory exists
const ensureDirectoryExists = (dirPath) => {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dirPath}`);
    }
  } catch (err) {
    console.error(`Error creating directory ${dirPath}:`, err);
    process.exit(1);
  }
};

// Write sitemap to public directory
try {
  const publicDir = path.join(__dirname, "public");
  ensureDirectoryExists(publicDir);

  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);

  console.log("Sitemap generated successfully at public/sitemap.xml!");
  console.log(`Added ${routes.length} URLs to the sitemap.`);
} catch (err) {
  console.error("Error generating sitemap:", err);
  process.exit(1);
}
