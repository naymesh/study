(function() {
    'use strict';

    angular
        .module('studyApp')
        .factory('ClientSearch', ClientSearch);

    ClientSearch.$inject = ['$resource'];

    function ClientSearch($resource) {
        var resourceUrl =  'api/_search/clients/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
