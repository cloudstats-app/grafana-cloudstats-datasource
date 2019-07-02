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
      },
      {
        name: "Digital Ocean",
        type: "digitalocean"
      },
      {
        name: "Slack",
        type: "slack"
      },
      {
        name: "Twilio",
        type: "twilio"
      },
      {
        name: "SendGrid",
        type: "sendgrid"
      },
      {
        name: "GitHub",
        type: "github"
      },
      {
        name: "Chargebee",
        type: "chargebee"
      },
      {
        name: "Logz.io",
        type: "logzio"
      },
      {
        name: "Quay.io",
        type: "quayio"
      },
      {
        name: "Docker",
        type: "docker"
      },
      {
        name: "Cloudflare",
        type: "cloudflare"
      },
    ]
  }
}

CloudStatsConfigCtrl.template = configTemplate;