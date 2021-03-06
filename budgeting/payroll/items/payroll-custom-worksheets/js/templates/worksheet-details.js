﻿//  Custom worksheets template
(function () {
    'use strict';

    var templateHtml, templateUrl;

    templateUrl = "payroll/items/templates/custom-worksheet-column.html";

    templateHtml = "" +
            "<span ng-click=\"column.config.action.navigateTo(column, row)\" " +
                "class=\"rp-cg-text rp-cg-body-text text-info text-u-l pointer\">" +
                "{{column.row.data[column.config.key]}}" +
            "</span>";

    function installTemplate($templateCache) {
        $templateCache.put(templateUrl, templateHtml);
    }

    angular
        .module('budgeting')
        .run(['$templateCache', installTemplate]);
})();