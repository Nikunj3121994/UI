// Dropdown Utility functions

(function (angular) {
    "use strict";

    function dropDownUtilities() {
        var utils = {};

        //Converts JSON object into Array
        utils.toArray = function (obj) {
            var arr = [];
            angular.forEach(obj, function (value) {
                if(value !== ""){        
                    arr.push(value);
                }
            });
            return arr;
        };

        //Converts JSON object into Array and stores it to a JSON Object { options: [...] }
        utils.toSelectOptions = function (obj) {
            return {
                options: utils.toArray(obj)
            };
        };

        return utils;
    }

    angular
        .module("budgeting")
        .factory("rentDropdownUtilities", [
            dropDownUtilities
        ]);
})(angular);