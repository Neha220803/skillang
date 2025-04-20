import axios from "axios";

const API_URL = "https://cms.skillang.com/api";

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Get all countries from the CMS
 * @returns {Promise<Object>} - Countries data
 */
export const getCountries = async () => {
  try {
    console.log("Fetching countries from CMS...");

    // Make the API request
    const response = await api.get("/countries", {
      params: {
        // Only fetch active countries
        "filters[isActive]": true,
        // Sort by display order
        "sort[0]": "displayOrder:asc",
      },
    });

    // Log the full response for debugging
    console.log("CMS response:", response);

    // Handle different possible data structures
    if (response.data && Array.isArray(response.data)) {
      // Direct array of countries
      return { data: response.data };
    } else if (response.data && Array.isArray(response.data.data)) {
      // Strapi v4 structure: { data: [...], meta: {...} }
      return response.data;
    } else if (response.data && typeof response.data === "object") {
      // Some other object structure
      console.log("Unexpected data structure:", response.data);
      // Try to find array in the response
      for (const key in response.data) {
        if (Array.isArray(response.data[key])) {
          return { data: response.data[key] };
        }
      }
    }

    // Fallback to empty array
    console.log("No country data found in response");
    return { data: [] };
  } catch (error) {
    console.error("Error fetching countries:", error);
    return { data: [] };
  }
};

// Get a specific country by slug
export const getCountryBySlug = async (slug) => {
  try {
    const response = await api.get("/countries", {
      params: {
        "filters[slug]": slug,
        populate: "*", // Get all related data
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching country with slug ${slug}:`, error);
    return null;
  }
};

export default api;
