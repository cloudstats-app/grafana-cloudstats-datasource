export class CloudStatsDatasource {

  constructor(instanceSettings, $q, backendSrv, templateSrv) {
    this.type = instanceSettings.type;
    this.url = `/api/datasources/proxy/${instanceSettings.id}/v1`;
    this.name = instanceSettings.name;
    this.provider = instanceSettings.jsonData.provider;
    this.q = $q;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;
    this.withCredentials = instanceSettings.withCredentials;
    this.headers = {'Content-Type': 'application/json'};
    if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
      this.headers['Authorization'] = instanceSettings.basicAuth;
    }
  }

  testDatasource() {
    return this.doRequest({
      url: this.url + '/',
      method: 'GET',
    }).then(response => {
      if (response.status === 201) {
        return { status: "success", message: "Data source is working", title: "Success" };
      } else if (response.status === 401) {
        return { status: "alert", message: "Unauthorized access, check token", title: "Unauthorized" };
      } else if (response.status === 403) {
        return { status: "alert", message: "Provider not allowed", title: "Not Allowed" };
      }
    });
  }

  annotationQuery(options) {
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
    }).then(result => {
      console.log(result.data);
      return result.data;
    });
  }

  doRequest(options) {
    options.withCredentials = this.withCredentials;
    options.headers = this.headers;

    return this.backendSrv.datasourceRequest(options);
  }
}