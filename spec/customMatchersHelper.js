/* global VisSenseUtils,jasmine,beforeEach*/
/**
 * @license
 * VisSense <http://twyn.com/>
 * Copyright 2014 twyn group IT solutions & marketing services AG <vissense@twyn.com>
 * Available under MIT license <http://opensource.org/licenses/MIT>
 */
beforeEach(function () {
    'use strict';
    function getMessage(actual, testPassed, stateLabel) {
        if(testPassed) {
            return 'Expected visibility to be "'+stateLabel+'"';
        }
        return 'Expected visibility to be "'+stateLabel+'", but it was NOT! ';
    }

    jasmine.addMatchers({
        toHaveVisSensePercentageOf: function() {
            return {
                compare: function (actual, expected) {
                    var result = {};
                    result.pass = VisSenseUtils.percentage(actual) === expected;
                    result.message = getMessage(actual, result, (expected * 100) + '%');
                    return result;
                }
            };
        },
        toBeVisSenseHidden: function() {
            return {
                compare: function (actual) {
                    var result = {};
                    result.pass = VisSenseUtils.isHidden(actual);
                    result.message = getMessage(actual, result, 'hidden');
                    return result;
                }
            };
        },
        toBeVisSenseVisible: function() {
            return {
                compare: function (actual) {
                    var result = {};
                    result.pass = VisSenseUtils.isVisible(actual);
                    result.message = getMessage(actual, result, 'visible');
                    return result;
                }
            };
        },
        toBeVisSenseFullyVisible: function() {
            return {
                compare: function (actual) {
                    var result = {};
                    result.pass = VisSenseUtils.isFullyVisible(actual);
                    result.message = getMessage(actual, result, 'fullyvisible');
                    return result;
                }
            };
        }
    });
});