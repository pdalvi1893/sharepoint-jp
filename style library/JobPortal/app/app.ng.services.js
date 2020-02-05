(function () {
    'use strict';

    jpApp.factory('svc', ['$http', '$q', function ($http, $q) {
        var _siteUrl = _spPageContextInfo.siteServerRelativeUrl;
        var _getConfig = {
            headers: { 'accept': 'application/json;odata=verbose' }
        };

        function _getSPItems(endpoint) {
            return $http.get(endpoint, _getConfig).then(function (d) {
                return d.data.d.results;
            });
        };

        return {
            getSiteUrl: function () {
                return _siteUrl;
            },
            getTemplateUrl: function (templateName) {
                return _siteUrl + '/style library/jobportal/app/templates/' + templateName;
            },
            getImagesDirUrl: function () {
                return _siteUrl + '/style library/jobportal/design/images/';
            },
            getJobCategories: function (maxCount) {
                if (!maxCount) {
                    maxCount = 4; 
                }

                var url = _siteUrl + "/_api/web/lists/getbytitle('JobCategories')/items?$top=" + maxCount;

                return _getSPItems(url).then(function (d) {
                    return d;
                })
            }
        };
    }]);

})();
