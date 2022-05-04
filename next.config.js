const isProd = process.env.NODE_ENV === "production";

console.log("isProd: ", isProd);

module.exports = {
  distDir: "build",
  basePath: isProd ? "/twitter-clone" : "",
  assetPrefix: isProd ? "/twitter-clone" : "",
  images: {
    loader: "custom",
    domains: ["pbs.twimg.com"],
  },
};
