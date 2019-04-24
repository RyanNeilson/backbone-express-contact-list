require.config({
  baseUrl: "/javascripts",
  paths: {
    jquery: "lib/jquery",
    backbone: "lib/backbone",
    underscore: "lib/underscore",
    bootstrap: "lib/bootstrap",
    datatables: "lib/datatables"
  },
  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    bootstrap: {
      deps: ["jquery"],
      exports: "Bootstrap"
    },
    datatables: {
      deps: ["jquery"],
      exports: "DataTable"
    },
    underscore: {
      exports: "_"
    }
  }
});

require(["init"]);
