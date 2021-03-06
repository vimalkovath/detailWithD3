(function() {
    'use strict';

    angular.module('app')
        .service('navService', [
            '$q',
            navService
        ]);

    function navService($q) {
        var menuItems = [{
                name: 'Dashboard',
                icon: 'dashboard',
                sref: '.dashboard'
            },
            {
                name: 'settings',
                icon: 'settings',
                sref: '.profile'
            },
            {
                name: 'Table',
                icon: 'view_module',
                sref: '.table'
            }
        ];

        return {
            loadAllItems: function() {
                return $q.when(menuItems);
            }
        };
    }

})();