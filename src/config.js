import configTemplate from './partials/config.html!text';

export class CloudStatsConfigCtrl {
  constructor($scope, $injector, $q, backendSrv, alertSrv, contextSrv, datasourceSrv) {
    this.$q = $q;
    this.backendSrv = backendSrv;
    this.alertSrv = alertSrv;
    this.providers = [
      {
        name: "Amazon Web Services",
        type: "aws"
      },
      {
        name: "Google Cloud Platform",
        type: "gcp"
      }
    ]
  }
}

CloudStatsConfigCtrl.template = configTemplate;