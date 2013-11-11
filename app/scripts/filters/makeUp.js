'use strict'
/*
 * @author nobita@pixnet.tw
 * @fileoverview Custom Filter
 * */
angular.module('myApp').filter('makeUp', function() {
    return function(str, textBox) {
        return str.replace(textBox, '<span>' + textBox + '</span>');
    }
});