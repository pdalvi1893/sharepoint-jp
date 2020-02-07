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

        function _getJPImageUrl(endPoint) {

            return $http.get(endPoint, _getConfig).then(function (d) {
                var imgTag = d.data.d.faaImage;
                //console.log(imgTag);
                var src = '';
                if (imgTag) {
                    //var regex = /<img.*?src="(.?)"/;
                    //src = (regex.exec(imgTag) !== null) ? regex.exec(imgTag)[1] : "";
                    //src = (src.indexOf("?") > 0) ? src.substring(0, src.indexOf("?")) : src;

                    src = $(imgTag).attr("src");
                }

                //console.log(src);
                return src;
            });
        }

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
            },
            getBlogPosts: function (maxCount) {

                if (!maxCount) {
                    maxCount = 8;
                }

                var url = _siteUrl + "/_api/web/lists/getbytitle('BlogPosts')/items";

                return _getSPItems(url).then(function (d) {
                    var col = d;
                    col.forEach(function (item) {
                        _getJPImageUrl(item.FieldValuesAsHtml.__deferred.uri).then(function (u) {
                            item.imageUrl = u;
                        });
                    })

                    return col;
                });
            },
            getSliders: function () {

                var url = _siteUrl + "/_api/web/lists/getbytitle('jpSlider')/items";

                return _getSPItems(url).then(function (d) {
                    var col = d;
                    col.forEach(function (item) {
                        _getJPImageUrl(item.FieldValuesAsHtml.__deferred.uri).then(function (u) {
                            item.imageUrl = u;
                        });
                    })

                    return col;
                });
            },
            getFeaturedJobs: function (count) {

                if (!count)
                    count = 4;

                var url = _siteUrl + "/_api/web/lists/getbytitle('JobPostings')/items?$top=" + count;

                return _getSPItems(url).then(function (d) {
                    var col = d;
                    col.forEach(function (item) {
                        _getJPImageUrl(item.FieldValuesAsHtml.__deferred.uri).then(function (u) {
                            item.imageUrl = u;
                        });
                    })

                    return col;
                });
            }
        };
    }]);

})();
