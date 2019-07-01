'use strict';

System.register(['./datasource', './config'], function (_export, _context) {
  "use strict";

  var CloudStatsDatasource, CloudStatsConfigCtrl, CloudStatsAnnotationsQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      CloudStatsDatasource = _datasource.CloudStatsDatasource;
    }, function (_config) {
      CloudStatsConfigCtrl = _config.CloudStatsConfigCtrl;
    }],
    execute: function () {
      _export('AnnotationsQueryCtrl', CloudStatsAnnotationsQueryCtrl = function CloudStatsAnnotationsQueryCtrl() {
        _classCallCheck(this, CloudStatsAnnotationsQueryCtrl);
      });

      CloudStatsAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';

      _export('Datasource', CloudStatsDatasource);

      _export('AnnotationsQueryCtrl', CloudStatsAnnotationsQueryCtrl);

      _export('ConfigCtrl', CloudStatsConfigCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
