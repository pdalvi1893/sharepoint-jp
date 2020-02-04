(function () {
    'use strict';

    jpApp.component('jpTopNav', {
        controllerAs: 'vm',
        controller: function () {
            debugger;
            console.log("test app");
            var ctrl = this;
        },
        templateUrl: '/sites/testclassic/style library/jobportal/app/templates/topNav.html',
        bindings: {
            title: '@'
        }
    });

    jpApp.component('jpHeader', {
        controllerAs: 'vm',
        controller: function () {
            var ctrl = this;
        },
        templateUrl: '/sites/testclassic/style library/jobportal/app/templates/glb-header.html',
        bindings: {
            title: '@'
        }
    });

    jpApp.component('jpFooter', {
        controllerAs: 'vm',
        controller: function () {
            var ctrl = this;
        },
        templateUrl: '/sites/testclassic/style library/jobportal/app/templates/glb-footer.html',
        bindings: {
            title: '@'
        }
    });

})();
