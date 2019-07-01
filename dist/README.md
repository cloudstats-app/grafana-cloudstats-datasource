# CloudStats Datasource
CloudStats Datasource is Grafana annotations datasource to access cloud providers status inside dashboard.

## Cloud Providers
- **Amazon Web Services**  
  - *Filtering by services and regions*
- **Google Cloud Platform**  
  - *Range annotations*

## Installing
TODO

## Registration
Go to [cloudstats.app](https://cloudstats.app) and register to receive API key

## Configuring
### Adding datasource
In Grafana dashboard add new datasource and select CloudStats.  
Insert API key received by registration process and select desired cloud provider.  
*If CloudStats used with multiple providers it's advised to add inside datasource name provider identification*  s
![Adding datasource](src/img/new-datasource.png "Adding datasource")

### Adding annotation
Once new datasource configured open desired dashboard setting, select `Annotations` and add new give the name to annotation.
*AWS stats allow filtering the incidents with tags. Tags can be service names like `ec2`, `rds` and regions like `us-east-1`, `eu-central-1`.*  
![Adding annotation](src/img/new-annotation.png "Adding annotation")  

Once added cloud provider incidents will be shown on the graphs:  
![Graph annotation](src/img/graph-annotation.png "Graph annotation")