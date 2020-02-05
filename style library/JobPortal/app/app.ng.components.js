(function () {
    'use strict';

    jpApp.component('jpTopNav', {
        controllerAs: 'vm',
        controller: function (svc) {
            var ctrl = this;
            ctrl.siteUrl = svc.getSiteUrl(); 
            ctrl.tempUrl = svc.getTemplateUrl('top-nav.html');
        },
        template:"<div ng-include='vm.tempUrl'></div>",
        bindings: {
            title: '@'
        }
    });

    jpApp.component('jpHeader', {
        controllerAs: 'vm',
        controller: function (svc) {
            var ctrl = this;
            ctrl.siteUrl = svc.getSiteUrl(); 
            ctrl.tempUrl = svc.getTemplateUrl('glb-header.html');
        },
        template: "<div ng-include='vm.tempUrl'></div>",
        bindings: {
            title: '@'
        }
    });

    jpApp.component('jpFooter', {
        controllerAs: 'vm',
        controller: function (svc) {
            var ctrl = this;
            ctrl.siteUrl = svc.getSiteUrl(); 
            ctrl.tempUrl = svc.getTemplateUrl('glb-footer.html');
        },
        template: "<div ng-include='vm.tempUrl'></div>",
        bindings: {
            title: '@'
        }
    });

    jpApp.component('jpBlogLatest', {
        controllerAs: 'vm',
        controller: function (svc) {
            var ctrl = this;
            ctrl.siteUrl = svc.getSiteUrl();
            ctrl.tempUrl = svc.getTemplateUrl('blog-latest.html');
            ctrl.imageUrl = svc.getImagesDirUrl();
        },
        template: "<div ng-include='vm.tempUrl'></div>",
        bindings: {
            title: '@'
        }
    });

    jpApp.component('jpJobCategories', {
        controllerAs: 'vm',
        controller: function (svc) {
            var ctrl = this;
            ctrl.siteUrl = svc.getSiteUrl();
            ctrl.tempUrl = svc.getTemplateUrl('jobs-categories.html');
            ctrl.$onInit = function () {
                svc.getJobCategories(ctrl.count).then(function (d) {
                    ctrl.items = d;
                });
            };

        },
        template: "<div ng-include='vm.tempUrl'></div>",
        bindings: {
            title: '@',
            count:'@'
        }
    });

})();
