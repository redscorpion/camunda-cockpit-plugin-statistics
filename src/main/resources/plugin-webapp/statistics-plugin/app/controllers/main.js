ngDefine('cockpit.plugin.statistics-plugin.controllers', [
      //add dependency to your controller here 
  'module:cockpit.plugin.statistics-plugin.services:../services/main',
  './dashboardController',
  './processDefinitionCtrl',
  './processesChartCtrl',
  './casesChartCtrl',
  './pluginSettingsCtrl',
  './durationsCtrl',
  './overlayCtrl',
  './timingCtrl',
  './slaChartCtrl',
  './feedbackCtrl'
], function(module) {

});