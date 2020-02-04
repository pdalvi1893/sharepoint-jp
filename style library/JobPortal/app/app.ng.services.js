(function () {
    'use strict';

    console.log("test site service")
    jpApp.factory('svc', ['$http', '$q', function ($http, $q) {
        console.log("test site inside service");
        debugger;
    }]);
})();