# CloudStats Datasource
CloudStats Datasource is Grafana annotations datasource to access cloud providers status inside dashboard.

## Cloud Providers
#### Data Centers
- [**Amazon Web Services**](https://aws.amazon.com/)  
  - *Filtering by services and regions*
- [**Google Cloud Platform**](https://cloud.google.com/)  
  - *Range annotations*
- [**Digital Ocean**](https://digitalocean.com/)
#### Docker registries
- [**Docker**](https://hub.docker.com/)
- [**Quay.io**](https://quay.io)
#### Messaging
- [**Slack**](https://slack.com)
#### Log Management
- [**Logz.io**](https://logz.io)
#### Version Control
- [**Github**](https://github.com)
#### Notifications Services
- [**Twilio**](https://twilio.com)
- [**Sendgrid**](https://sendgrid.com)
#### Networking
- [**Cloudflare**](https://cloudflare.com)
#### Billing
- [**Chargebee**](https://chargebee.com)

## Installing
TODO

## Registration
Go to [cloudstats.app](https://cloudstats.app) and register to receive API key

## Configuring
### Adding datasource
In Grafana dashboard add new datasource and select CloudStats.  
Insert API key received by registration process and select desired cloud provider.  
- *If CloudStats used with multiple providers it's advised to add inside datasource name provider identifications*  
![Adding datasource](src/img/new-datasource.png "Adding datasource")

### Adding annotation
Once new datasource configured open desired dashboard setting, select `Annotations` and add new give the name to annotation.  
- *AWS stats allow filtering the incidents with tags. Tags can be service names like `ec2`, `rds` and regions like `us-east-1`, `eu-central-1`.*  
![Adding annotation](src/img/new-annotation.png "Adding annotation")  

Once added cloud provider incidents will be shown on the graphs:  
![Graph annotation](src/img/graph-annotation.png "Graph annotation")