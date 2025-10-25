const favicons = require("favicons");
const fs = require("fs");
const source = "img/favicon.svg"; // your SVG source
const configuration = {
  path: "/",                // Path for overriding default icons path
  appName: "Sanity Old Age Home",
  appShortName: "Sanity",
  appDescription: "Sanity Old Age Home provides comfort and care for seniors.",
  developerName: "Your Name",
  developerURL: null,       // prevent adding a developer URL
  background: "#7c4a1e",
  theme_color: "#7c4a1e",
  display: "standalone",
  orientation: "portrait",
  scope: "/",
  start_url: "/",
  logging: false,
  icons: {
    android: true,
    appleIcon: true,
    favicons: true,
    windows: false,
    yandex: false
  }
};

favicons(source, configuration, (error, response) => {
  if (error) {
    console.log(error.message);
    return;
  }
  response.images.forEach(image => {
    fs.writeFileSync(`img/${image.name}`, image.contents);
  });
  response.files.forEach(file => {
    fs.writeFileSync(`img/${file.name}`, file.contents);
  });
  console.log("Favicons generated!");
});
