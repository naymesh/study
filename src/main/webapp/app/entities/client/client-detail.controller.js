(function() {
    'use strict';

    angular
        .module('studyApp')
        .controller('ClientDetailController', ClientDetailController);

    ClientDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Client'];

    function ClientDetailController($scope, $rootScope, $stateParams, entity, Client) {
        var vm = this;

        vm.client = entity;

        var unsubscribe = $rootScope.$on('studyApp:clientUpdate', function(event, result) {
            vm.client = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
