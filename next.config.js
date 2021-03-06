const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const exportPath = process.env.GORIGHT_EXPORT; // a subpath of the whole site to export files from. Passed to exportPathMap param
const isProd = process.env.NODE_ENV === 'production'
console.log("🚀 ~ file: next.config.js ~ line 7 ~ isProd", isProd);
const basePath = process.env.BASEPATH || "";
console.log("🚀 ~ file: next.config.js ~ line 9 ~ basePath", basePath);
console.log("🚀 ~ file: next.config.js ~ line 9 ~ basePath", isProd ? basePath + "/" : '');

const conf = withMDX({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
    config.node = {
      fs: "empty",
    };
  },
  exportPathMap: async (defaultPathMap) => {
    const resultMap = {
      "/handout/v2/releasing-library": {
        page: "/hands-on-workshop/handout/v2/releasing-library",
        query: { canonical: true },
      },
    };

    if (exportPath && exportPath in defaultPathMap) {
      const exportPaths = Object.keys(defaultPathMap).forEach((path) => {
        if (path.startsWith(exportPath)) {
          const newPath =
            path.length === exportPath.length
              ? "/"
              : path.substring(exportPath.length);
          resultMap[newPath] = Object.assign(defaultPathMap[path], {
            query: { canonical: true },
          });
        }
      });
      return resultMap;
    }
    return defaultPathMap;
  },
  pageExtensions: ["js", "jsx", "mdx"],
  trailingSlash: true, // keep true
  assetPrefix: isProd ? `${basePath}/` : "",
  basePath: isProd ? basePath : '',
});

module.exports = conf;