'use strict';
/**
 * @ngdoc overview
 * @name unchatbar-stream
 * @description
 * # unchatbar-stream-connection
 *
 * Main module of the application.
 */
angular.module('unchatbar-stream').run(['$rootScope', 'PhoneBook', 'Profile','DataConnection',
    function ($rootScope, Stream) {
        Stream.initStorage();


    }
]);