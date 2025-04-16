module.exports = {
    enable: false,
    mode: "simplify", // random | simplify | simplify-seedable
    refreshClassConversionJson: false, // recommended set to true if not in production
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    allowExtensions: [".jsx", ".tsx", ".js", ".ts", ".html", ".rsc"],
  
    blackListedFolderPaths: [
      "./.next/cache",
      /\.next\/server\/pages\/api/,
    ],
  };