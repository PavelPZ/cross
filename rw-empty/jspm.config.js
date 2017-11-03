SystemJS.config({
  paths: {
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  packages: {
    "app": {
      "main": "app.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [],
  map: {},
  packages: {}
});
