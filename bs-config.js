module.exports = {
  proxy: "localhost:3000", // Proxy your existing local server
  files: ["public/stylesheets/*.css", "routes/*.js", "views/*.jade", "app.js"], // Files to watch
  port: 4000, // Port for Browsersync
  reloadDelay: 1000,
};
