"use strict";

System.register(["./partials/config.html!text"], function (_export, _context) {
  "use strict";

  var configTemplate, CloudStatsConfigCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_partialsConfigHtmlText) {
      configTemplate = _partialsConfigHtmlText.default;
    }],
    execute: function () {
      _export("CloudStatsConfigCtrl", CloudStatsConfigCtrl = function CloudStatsConfigCtrl($scope, $injector, $q, backendSrv, alertSrv, contextSrv, datasourceSrv) {
        _classCallCheck(this, CloudStatsConfigCtrl);

        this.$q = $q;
        this.backendSrv = backendSrv;
        this.alertSrv = alertSrv;
        this.providers = [{
          name: "Amazon Web Services",
          type: "aws"
        }, {
          name: "Google Cloud Platform",
          type: "gcp"
        }];
      });

      _export("CloudStatsConfigCtrl", CloudStatsConfigCtrl);

      CloudStatsConfigCtrl.template = configTemplate;
    }
  };
});
//# sourceMappingURL=config.js.map
