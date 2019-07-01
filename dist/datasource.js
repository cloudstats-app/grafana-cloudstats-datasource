'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, CloudStatsDatasource;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('CloudStatsDatasource', CloudStatsDatasource = function () {
        function CloudStatsDatasource(instanceSettings, $q, backendSrv, templateSrv) {
          _classCallCheck(this, CloudStatsDatasource);

          this.type = instanceSettings.type;
          this.url = '/api/datasources/proxy/' + instanceSettings.id + '/v1';
          this.name = instanceSettings.name;
          this.provider = instanceSettings.jsonData.provider;
          this.q = $q;
          this.backendSrv = backendSrv;
          this.templateSrv = templateSrv;
          this.withCredentials = instanceSettings.withCredentials;
          this.headers = { 'Content-Type': 'application/json' };
          if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
            this.headers['Authorization'] = instanceSettings.basicAuth;
          }
        }

        _createClass(CloudStatsDatasource, [{
          key: 'testDatasource',
          value: function testDatasource() {
            return this.doRequest({
              url: this.url + '/',
              method: 'GET'
            }).then(function (response) {
              if (response.status === 201) {
                return { status: "success", message: "Data source is working", title: "Success" };
              } else if (response.status === 401) {
                return { status: "alert", message: "Unauthorized access, check token", title: "Unauthorized" };
              } else if (response.status === 403) {
                return { status: "alert", message: "Provider not allowed", title: "Not Allowed" };
              }
            });
          }
        }, {
          key: 'annotationQuery',
          value: function annotationQuery(options) {
            var query = this.templateSrv.replace(options.annotation.query, {}, 'glob');
            var annotationQuery = {
              range: options.range,
              annotation: {
                name: options.annotation.name,
                datasource: options.annotation.datasource,
                enable: options.annotation.enable,
                query: query
              },
              rangeRaw: options.rangeRaw
            };

            return this.doRequest({
              url: this.url + '/events/',
              method: 'POST',
              data: annotationQuery
            }).then(function (result) {
              console.log(result.data);
              return result.data;
            });
          }
        }, {
          key: 'doRequest',
          value: function doRequest(options) {
            options.withCredentials = this.withCredentials;
            options.headers = this.headers;

            return this.backendSrv.datasourceRequest(options);
          }
        }]);

        return CloudStatsDatasource;
      }());

      _export('CloudStatsDatasource', CloudStatsDatasource);
    }
  };
});
//# sourceMappingURL=datasource.js.map
