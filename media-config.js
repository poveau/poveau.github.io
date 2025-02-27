// media-config.js - Maps HTML pages to their corresponding Cloudinary folders
const CLOUDINARY_CLOUD_NAME = 'do7udtgro';

// This maps each HTML page to its corresponding Cloudinary folder
const pageToFolderMap = {
  'videos.html': '2024-10-00',  // Video gallery page
  'gallery1.html': 'gallery1',  // First gallery page
  'gallery2.html': 'gallery2',  // Second gallery page
  'gallery3.html': 'gallery3',  // And so on...
  // Add more mappings as needed
};

// Get the current page's folder based on the URL
function getCurrentFolder() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  return pageToFolderMap[currentPage] || 'default';
}

// Helper function to get Cloudinary URLs
function getCloudinaryUrl(assetId, options = {}) {
  const resourceType = options.resourceType || 'image';
  const transformations = options.transformations || 'q_auto';
  
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload/${transformations}/${assetId}`;
}

// Export for use in your HTML files
if (typeof module !== 'undefined') {
  module.exports = {
    CLOUDINARY_CLOUD_NAME,
    pageToFolderMap,
    getCurrentFolder,
    getCloudinaryUrl
  };
}
