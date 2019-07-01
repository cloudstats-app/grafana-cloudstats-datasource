import {CloudStatsDatasource} from './datasource';
import {CloudStatsConfigCtrl} from './config';

class CloudStatsAnnotationsQueryCtrl {}
CloudStatsAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';

export {
  CloudStatsDatasource as Datasource,
  CloudStatsAnnotationsQueryCtrl as AnnotationsQueryCtrl,
  CloudStatsConfigCtrl as ConfigCtrl,
};