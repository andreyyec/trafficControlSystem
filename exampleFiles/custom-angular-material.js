// (function () {
//     'use strict';
//     var app = angular.module('simpleCRUD');
//     app.config(override_mdMaxlength);

//     //Sobreescribiendo md-maxlength (Reference: Jesús Rodríguez Rodríguez, http://tinyurl.com/o9xhnvg)
//     function override_mdMaxlength($provide) {
//         $provide.decorator(
//             'mdMaxlengthDirective',
//             function ($delegate) {
//                 var mdMaxlength = $delegate[0];
//                 var link = mdMaxlength.link;
//                 mdMaxlength.compile = function () {
//                     return function (scope, element, attr, ctrls) {
//                         var maxlength;
//                         var ngModelCtrl = ctrls[0];
//                         var containerCtrl = ctrls[1];
//                         var charCountEl = angular.element('<div class="md-char-counter">');

//                         attr.$set('ngTrim', 'false');
//                         containerCtrl.element.append(charCountEl);

//                         ngModelCtrl.$formatters.push(renderCharCount);
//                         ngModelCtrl.$viewChangeListeners.push(renderCharCount);
//                         element.on(
//                             'input keydown',
//                             function () {
//                                 renderCharCount(); //make sure it's called with no args
//                             }
//                         );

//                         scope.$watch(attr.mdMaxlength, function (value) {
//                             maxlength = value;
//                             if (angular.isNumber(value) && value > 0) {
//                                 if (!charCountEl.parent().length) {
//                                     $animate.enter(
//                                         charCountEl,
//                                         containerCtrl.element,
//                                         angular.element(containerCtrl.element[0].lastElementChild)
//                                     );
//                                 }
//                                 renderCharCount();
//                             } else {
//                                 $animate.leave(charCountEl);
//                             }
//                         });

//                         ngModelCtrl.$validators['md-maxlength'] = function (modelValue, viewValue) {
//                             if (!angular.isNumber(maxlength) || maxlength < 0) {
//                                 return true;
//                             }
//                             return (modelValue || element.val() || viewValue || '').length <= maxlength;
//                         };

//                         function renderCharCount(value) {
//                             charCountEl.text((ngModelCtrl.$modelValue || '').length + '/' + maxlength);
//                             return value;
//                         }
//                     };
//                 };
//                 return $delegate;
//             }
//         );
//     }
// })();