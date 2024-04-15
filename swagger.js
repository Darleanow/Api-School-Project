const swaggerAutogen = require("swagger-autogen")();

const informations = {
  info: {
    title: "Api School Project",
    description: "Nothing here...",
  },
  host: "localhost:3000",
};

const output_file = "./swagger-output.json";
const entry_point_file = ["./app.js"];

swaggerAutogen(output_file, entry_point_file, informations).then(() => {
  require("./app");
});
