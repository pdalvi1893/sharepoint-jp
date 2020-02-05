(function () {
    'use strict';

    jpApp.factory('svc', ['$http', '$q', function ($http, $q) {
        var _siteUrl = _spPageContextInfo.siteServerRelativeUrl;

        return {
            getSiteUrl: function () {
                return _siteUrl;
            },
            getTemplateUrl: function (templateName) {
                return _siteUrl + '/style library/jobportal/app/templates/' + templateName;
            }
        };
    }]);

})();
