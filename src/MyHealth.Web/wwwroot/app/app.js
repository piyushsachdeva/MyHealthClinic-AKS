(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _appModule = require('./app.module');

var _appModule2 = _interopRequireDefault(_appModule);

angular.bootstrap(document.getElementById('app'), [_appModule2['default']]);

},{"./app.module":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsSharedSharedModule = require('./components/shared/shared.module');

var _componentsSharedSharedModule2 = _interopRequireDefault(_componentsSharedSharedModule);

var _componentsDashboardDashboardModule = require('./components/dashboard/dashboard.module');

var _componentsDashboardDashboardModule2 = _interopRequireDefault(_componentsDashboardDashboardModule);

var _componentsDoctorsDoctorsModule = require('./components/doctors/doctors.module');

var _componentsDoctorsDoctorsModule2 = _interopRequireDefault(_componentsDoctorsDoctorsModule);

var _componentsPatientsPatientsModule = require('./components/patients/patients.module');

var _componentsPatientsPatientsModule2 = _interopRequireDefault(_componentsPatientsPatientsModule);

var _componentsDailyReportDailyReportModule = require('./components/dailyReport/dailyReport.module');

var _componentsDailyReportDailyReportModule2 = _interopRequireDefault(_componentsDailyReportDailyReportModule);

var _componentsUsersUsersModule = require('./components/users/users.module');

var _componentsUsersUsersModule2 = _interopRequireDefault(_componentsUsersUsersModule);

var _componentsClinicsClinicsModule = require('./components/clinics/clinics.module');

var _componentsClinicsClinicsModule2 = _interopRequireDefault(_componentsClinicsClinicsModule);

var moduleName = 'myHealth';

var app = angular.module(moduleName, ['ui.router', 'ngAnimate', _componentsSharedSharedModule2['default'], _componentsDashboardDashboardModule2['default'], _componentsDoctorsDoctorsModule2['default'], _componentsPatientsPatientsModule2['default'], _componentsDailyReportDailyReportModule2['default'], _componentsUsersUsersModule2['default'], _componentsClinicsClinicsModule2['default']]);

app.run(run);
app.config(config);

function run($state, initialPageService) {
    initialPageService.getInitialState().then(function (initialState) {
        $state.go(initialState, {}, { location: "replace" });
    });
}

function config($stateProvider, $urlRouterProvider, $compileProvider) {

    var defaultUrl = '/';

    $compileProvider.debugInfoEnabled(false);

    $urlRouterProvider.when('', defaultUrl);

    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('default', {
        url: '/',
        template: ''
    }).state('dashboard', {
        url: '/dashboard',
        templateUrl: '/app/components/dashboard/views/main.html',
        controller: 'dashboardController'
    }).state('doctors', {
        url: '/doctors',
        templateUrl: '/app/components/doctors/views/main.html',
        controller: 'doctorsController'
    }).state('doctor', {
        url: '/doctor?id',
        templateUrl: '/app/components/doctors/views/detail.html',
        controller: 'doctorDetailController'
    }).state('patients', {
        url: '/patients',
        templateUrl: '/app/components/patients/views/main.html',
        controller: 'patientsController'
    }).state('dailyReport', {
        url: '/dailyreport',
        templateUrl: '/app/components/dailyReport/views/main.html',
        controller: 'dailyReportController'
    }).state('users', {
        url: '/users',
        templateUrl: '/app/components/users/views/main.html',
        controller: 'usersController'
    }).state('user', {
        url: '/user?username',
        templateUrl: '/app/components/users/views/detail.html',
        controller: 'userDetailController'
    }).state('clinics', {
        url: '/clinics',
        templateUrl: '/app/components/clinics/views/main.html',
        controller: 'clinicsController'
    }).state('clinic', {
        url: '/clinic?id',
        templateUrl: '/app/components/clinics/views/detail.html',
        controller: 'clinicDetailController'
    }).state('error', {
        url: '/404',
        templateUrl: '/app/components/shared/views/error.html'
    });
}

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./components/clinics/clinics.module":3,"./components/dailyReport/dailyReport.module":8,"./components/dashboard/dashboard.module":10,"./components/doctors/doctors.module":16,"./components/patients/patients.module":19,"./components/shared/shared.module":29,"./components/users/users.module":33}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersClinicsController = require('./controllers/clinicsController');

var _controllersClinicsController2 = _interopRequireDefault(_controllersClinicsController);

var _controllersClinicDetailController = require('./controllers/clinicDetailController');

var _controllersClinicDetailController2 = _interopRequireDefault(_controllersClinicDetailController);

var _servicesClinicsService = require('./services/clinicsService');

var _servicesClinicsService2 = _interopRequireDefault(_servicesClinicsService);

var moduleName = 'myHealth.clinics';

angular.module(moduleName, []).controller('clinicsController', _controllersClinicsController2['default']).controller('clinicDetailController', _controllersClinicDetailController2['default']).service('clinicsService', _servicesClinicsService2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/clinicDetailController":4,"./controllers/clinicsController":5,"./services/clinicsService":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClinicDetailController = function ClinicDetailController($scope, $rootScope, $stateParams, $state, clinicsService, toasterService, modalService) {
    _classCallCheck(this, ClinicDetailController);

    var tenantId = $stateParams.id;
    $scope.editMode = tenantId !== undefined;

    $scope.clinic = {};

    if ($scope.editMode) {
        $rootScope.loading = true;
        clinicsService.getClinic(tenantId).then(function (response) {
            $scope.clinic = response.data;
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    }

    $scope.navigateBack = function () {
        $state.transitionTo('clinics');
    };

    $scope.removeClinic = function () {
        modalService.showConfirmModal({
            messages: {
                title: 'Remove clinic',
                body: 'Are you sure you want to remove the clinic?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            $rootScope.loading = true;
            clinicsService.remove(tenantId).then(function (response) {
                if (response.status === 200) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError();
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        });
    };

    $scope.save = function () {
        if (!$scope.editMode) {
            $rootScope.loading = true;
            $rootScope.loadingInfo = 'Generating example data.\r\nThis could take a while, please wait.';
            clinicsService.add($scope.clinic).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError(response.data.message);
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
                $rootScope.loadingInfo = null;
            });
        } else {
            $rootScope.loading = true;
            clinicsService.update($scope.clinic).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError(response.data.message);
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        }
    };
};

exports['default'] = ClinicDetailController;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClinicsController = function ClinicsController($scope, $rootScope, $state, clinicsService, toasterService, modalService) {
    _classCallCheck(this, ClinicsController);

    var pageSize = 4;
    var pageCount = 0;

    $scope.clinics = [];

    $scope.getList = function () {
        $rootScope.loading = true;
        clinicsService.getList(pageSize, pageCount).then(function (clinics) {
            if (clinics.length < pageSize) {
                $scope.noMoreData = true;
            }
            clinics.forEach(function (clinic) {
                $scope.clinics.push(clinic);
            });
            pageCount++;
            $scope.refreshSelectedItems();

            if (!$scope.clinics.length) {
                $scope.noData = true;
            }
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    };

    $scope.nagivateToDetail = function (tenantId) {
        tenantId ? $state.transitionTo('clinic', { id: tenantId }) : $state.transitionTo('clinic');
    };

    $scope.refreshSelectedItems = function (all) {
        if (all) {
            $scope.clinics.forEach(function (clinic) {
                clinic.selected = $scope.everySelected;
            });
        }

        $scope.anySelected = $scope.clinics.some(function (clinic) {
            return clinic.selected;
        });

        $scope.everySelected = $scope.clinics.every(function (clinic) {
            return clinic.selected;
        });
    };

    $scope.remove = function (clinic) {
        var severalClinics = clinic === undefined;

        modalService.showConfirmModal({
            messages: {
                title: 'Remove clinic' + (severalClinics ? 's' : ''),
                body: 'Are you sure you want to remove the selected clinic' + (severalClinics ? 's' : '') + '?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            var tenantIdList;
            if (clinic) {
                tenantIdList = [clinic.tenantId];
            } else {
                tenantIdList = $scope.clinics.map(function (clinicItem) {
                    if (clinicItem.selected) {
                        return clinicItem.tenantId;
                    }
                    return null;
                });
            }

            $rootScope.loading = true;
            $rootScope.loadingInfo = 'Removing the clinic' + (severalClinics ? 's' : '') + ' and all the related data.\r\nThis could take a while, please wait.';

            tenantIdList.forEach(function (tenantId) {
                clinicsService.remove(tenantId).then(function (response) {
                    if (response.status === 200) {
                        $scope.clinics.forEach(function (clinicItem) {
                            if (tenantId === clinicItem.tenantId) {
                                var index = $scope.clinics.indexOf(clinicItem);
                                $scope.clinics.splice(index, 1);
                            }
                        });
                    }
                })['catch'](function (error) {
                    toasterService.showServerError(error);
                })['finally'](function () {
                    $rootScope.loading = false;
                    $rootScope.loadingInfo = null;
                });
            });

            $scope.refreshSelectedItems();
        });
    };

    $scope.getList();
};

exports['default'] = ClinicsController;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function ClinicsService($http) {
    'use strict';

    var clinics;

    return {
        getClinic: getClinic,
        getList: getList,
        add: add,
        update: update,
        remove: remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getClinic(tenantId) {
        var url = '/api/tenants/' + tenantId;
        return $http({
            method: 'GET',
            url: url
        });
    }

    function getList(pageSize, pageCount) {
        var handleSuccess = function handleSuccess(response) {
            clinics = response.data;
            return clinics;
        };
        var url = '/api/tenants/list';
        return $http({
            method: 'GET',
            url: url,
            params: {
                pageSize: pageSize,
                pageCount: pageCount
            }
        }).then(handleSuccess);
    }

    function add(tenant) {
        var url = '/api/tenants/';
        return $http({
            method: 'POST',
            url: url,
            data: {
                tenant: tenant,
                password: tenant.password || null
            }
        });
    }

    function update(tenant) {
        var url = '/api/tenants/';
        return $http({
            method: 'PUT',
            url: url,
            data: {
                tenant: tenant,
                password: tenant.password || null
            }
        });
    }

    function remove(tenantId) {
        var url = '/api/tenants/' + tenantId;
        return $http({
            method: 'DELETE',
            url: url
        });
    }
}

exports['default'] = ClinicsService;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DailyReportController = function DailyReportController() {
    _classCallCheck(this, DailyReportController);
};

/* empty */
exports["default"] = DailyReportController;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersDailyReportController = require('./controllers/dailyReportController');

var _controllersDailyReportController2 = _interopRequireDefault(_controllersDailyReportController);

var moduleName = 'myHealth.dailyReport';

angular.module(moduleName, []).controller('dailyReportController', _controllersDailyReportController2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/dailyReportController":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DashboardController = function DashboardController($scope, $rootScope, dashboardService, toasterService) {
    _classCallCheck(this, DashboardController);

    var year = new Date().getFullYear();

    $scope.incomesExpensesYear = year;
    $scope.patientsYear = year;
    $scope.currentYear = year;

    $scope.addYearIncomesExpenses = function () {
        if ($scope.currentYear > $scope.incomesExpensesYear) {
            $scope.incomesExpensesYear += 1;
        }
    };

    $scope.reduceYearIncomesExpenses = function () {
        $scope.incomesExpensesYear -= 1;
    };

    $scope.addYearPatients = function () {
        if ($scope.currentYear > $scope.patientsYear) {
            $scope.patientsYear += 1;
        }
    };

    $scope.reduceYearPatients = function () {
        $scope.patientsYear -= 1;
    };

    $scope.correctYear = function () {
        if ($scope.currentYear < $scope.patientsYear) {
            $scope.patientsYear = $scope.currentYear;
        }
        if ($scope.currentYear < $scope.incomesExpensesYear) {
            $scope.incomesExpensesYear = $scope.currentYear;
        }
    };

    var createChartDataIncomesExpenses = function createChartDataIncomesExpenses(expenses, incomes) {
        $scope.chartDataIncomesExpenses = {
            scaleLabel: function scaleLabel(valuePayload) {
                return Number(valuePayload.value).toFixed.replace('.', ',') + '$';
            },
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'INCOMES',
                fillColor: 'rgba(0,216,204,0.2)',
                strokeColor: 'rgba(0,216,204,1)',
                pointColor: 'rgba(0,216,204,1)',
                pointStrokeColor: 'rgba(0,216,204,1)',
                pointHighlightFill: 'rgba(0,216,204,1)',
                pointHighlightStroke: '#fff',
                data: incomes
            }, {
                label: 'EXPENSES',
                fillColor: 'rgba(255,23,112,0.2)',
                strokeColor: 'rgba(255,23,112,1)',
                pointColor: 'rgba(255,23,112,1)',
                pointStrokeColor: 'rgba(255,23,112,1)',
                pointHighlightFill: 'rgba(255,23,112,1)',
                pointHighlightStroke: '#fff',
                data: expenses
            }]
        };
    };
    var createChartDataPatients = function createChartDataPatients(patients) {
        $scope.chartDataPatients = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'PATIENTS',
                fillColor: 'rgba(0,216,204,1)',
                strokeColor: 'rgba(0,216,204,1)',
                pointColor: 'rgba(0,216,204,1)',
                pointStrokeColor: 'rgba(0,216,204,1)',
                pointHighlightFill: 'rgba(0,216,204,1)',
                pointHighlightStroke: '#fff',
                data: patients
            }]
        };
    };

    $rootScope.loading = true;
    dashboardService.getSummary().then(function (summary) {
        $scope.summary = summary;
    })['catch'](function (error) {
        toasterService.showServerError(error);
    })['finally'](function () {
        $rootScope.loading = false;
    });

    $scope.$watch('incomesExpensesYear', function (newValue, oldValue) {
        if (newValue || oldValue) {
            var expenses = new Array(12);
            expenses.fill(0, 0, 13);
            var incomes = new Array(12);
            incomes.fill(0, 0, 13);

            dashboardService.getExpenses($scope.incomesExpensesYear).then(function (allExpenses) {
                allExpenses.forEach(function (elem, index) {
                    expenses[index] = elem.expenses;
                    incomes[index] = elem.incomes;
                });

                createChartDataIncomesExpenses(expenses, incomes);
            })['catch'](function (error) {
                toasterService.showServerError(error);
            });
        }
    });

    $scope.$watch('patientsYear', function (newValue, oldValue) {
        if (newValue || oldValue) {
            var patients = new Array(12);
            patients.fill(0, 0, 13);

            dashboardService.getPatients($scope.patientsYear).then(function (allPatients) {
                allPatients.forEach(function (elem, index) {
                    patients[index] = elem.patientsCount;
                });

                createChartDataPatients(patients);
            })['catch'](function (error) {
                toasterService.showServerError(error);
            });
        }
    });
};

exports['default'] = DashboardController;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersDashboardController = require('./controllers/dashboardController');

var _controllersDashboardController2 = _interopRequireDefault(_controllersDashboardController);

var _servicesDashboardService = require('./services/dashboardService');

var _servicesDashboardService2 = _interopRequireDefault(_servicesDashboardService);

var _directivesMHChartDirective = require('./directives/MHChartDirective');

var _directivesMHChartDirective2 = _interopRequireDefault(_directivesMHChartDirective);

var moduleName = 'myHealth.dashboard';

angular.module(moduleName, []).directive('chart', _directivesMHChartDirective2['default']).controller('dashboardController', _controllersDashboardController2['default']).service('dashboardService', _servicesDashboardService2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/dashboardController":9,"./directives/MHChartDirective":11,"./services/dashboardService":12}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FILTER = new WeakMap();

var MHChart = (function () {
    function MHChart($filter) {
        _classCallCheck(this, MHChart);

        this.restrict = 'A';
        this.scope = {
            'chartdata': '=',
            'kind': '@'
        };
        FILTER.set(this, $filter);
    }

    _createClass(MHChart, [{
        key: 'link',
        value: function link(scope, element) {
            var numberFilter = FILTER.get(MHChart.instance)('number');

            var options = {
                scaleShowGridLines: true,
                scaleGridLineColor: 'rgba(0,0,0,.05)',
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: true,
                scaleShowVerticalLines: false,
                scaleLabel: function scaleLabel(valuePayload) {
                    return numberFilter(valuePayload.value);
                },
                bezierCurve: true,
                bezierCurveTension: 0.4,
                pointDot: false,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: true,
                datasetStrokeWidth: 2,
                datasetFill: true,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
                tooltipFontColor: '#7c7c81',
                maintainAspectRatio: true,
                responsive: true,
                animation: true,
                animationEasing: 'easeOutQuint',
                customTooltips: function customTooltips(tooltip) {

                    var $tooltip = $('#chart-customtooltip');

                    if (!$tooltip[0]) {
                        $('body').append('<div id="chart-customtooltip" class="chart-customtooltip"></div>');
                        $tooltip = $('#chartjs-customtooltip');
                    }

                    if (!tooltip) {
                        $tooltip.css({
                            opacity: 0
                        });
                        return;
                    }

                    $tooltip.removeClass('above below no-transform');
                    if (tooltip.yAlign) {
                        $tooltip.addClass(tooltip.yAlign);
                    } else {
                        $tooltip.addClass('no-transform');
                    }

                    if (tooltip.text) {
                        $tooltip.html(tooltip.text);
                    } else {
                        var innerHtml = '<div class="title">' + tooltip.title + '</div>';
                        for (var i = 0; i < tooltip.labels.length; i++) {
                            innerHtml += ['<div class="section">', '   <span class="key" style="background-color:' + tooltip.legendColors[i].fill + '"></span>', '   <span class="value">$' + numberFilter(tooltip.labels[i]) + '</span>', '</div>'].join('');
                        }
                        $tooltip.html(innerHtml);
                    }

                    var top = 0;
                    if (tooltip.yAlign) {
                        if (tooltip.yAlign === 'above') {
                            top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
                        } else {
                            top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
                        }
                    }

                    var offset = $(tooltip.chart.canvas).offset();

                    $tooltip.css({
                        opacity: 1,
                        width: tooltip.width ? tooltip.width + 'px' : 'auto',
                        left: offset.left + tooltip.x + 'px',
                        top: offset.top + top + 'px',
                        fontFamily: tooltip.fontFamily,
                        fontSize: tooltip.fontSize,
                        fontStyle: tooltip.fontStyle,
                        backgroundColor: 'rgb(255, 255, 255)',
                        boxShadow: '0 2px 6px 0 rgba(0, 0, 0, .8)'
                    });
                }
            };

            var ctx = element.get(0).getContext('2d');

            scope.$watch('chartdata', function (newValue, oldValue) {

                if (newValue && !oldValue) {
                    if (scope.kind === 'line') {
                        ctx.canvas.height = 80;
                        scope.incomeExpensesChart = new Chart(ctx).Line(scope.chartdata, options);
                        var legend = scope.incomeExpensesChart.generateLegend();
                        document.getElementById('legendIncomeExpenses').innerHTML = legend;
                    }

                    if (scope.kind === 'bar') {
                        ctx.canvas.height = 80;
                        scope.patientsChart = new Chart(ctx).Bar(scope.chartdata, options);
                    }
                }

                if (newValue && oldValue) {
                    if (scope.kind === 'line') {
                        scope.chartdata.datasets[0].data.forEach(function (elem, index) {
                            scope.incomeExpensesChart.datasets[0].points[index].value = elem;
                        });

                        scope.chartdata.datasets[1].data.forEach(function (elem, index) {
                            scope.incomeExpensesChart.datasets[1].points[index].value = elem;
                        });

                        scope.incomeExpensesChart.update();
                    }

                    if (scope.kind === 'bar') {
                        scope.chartdata.datasets[0].data.forEach(function (elem, index) {
                            scope.patientsChart.datasets[0].bars[index].value = elem;
                        });
                        scope.patientsChart.update();
                    }
                }
            });

            Chart.defaults.global.responsive = true;
        }
    }], [{
        key: 'directiveFactory',
        value: function directiveFactory($filter) {
            MHChart.instance = new MHChart($filter);
            return MHChart.instance;
        }
    }]);

    return MHChart;
})();

MHChart.directiveFactory.$inject = ['$filter'];

exports['default'] = MHChart.directiveFactory;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function DashboardService($http) {
    'use strict';

    return {
        getSummary: getSummary,
        getExpenses: getExpenses,
        getPatients: getPatients
    };

    function getSummary() {
        var handleSuccess = function handleSuccess(response) {
            var summary = response.data;
            return summary;
        };

        var tenantId = '';

        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        }).then(function (response) {
            tenantId = response.data;
            var url = '/api/reports/clinicsummary';
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function getExpenses(year) {
        var handleSuccess = function handleSuccess(response) {
            var expenses = response.data;
            return expenses;
        };

        var tenantId = '';

        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        }).then(function (response) {
            tenantId = response.data;
            var url = '/api/reports/expenses/' + year;
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function getPatients(year) {
        var handleSuccess = function handleSuccess(response) {
            var patients = response.data;
            return patients;
        };

        var tenantId = '';

        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        }).then(function (response) {
            tenantId = response.data;
            var url = '/api/reports/patients/' + year;
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }
}

exports['default'] = DashboardService;
module.exports = exports['default'];

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DoctorDetailController = function DoctorDetailController($scope, $rootScope, $stateParams, $state, doctorsService, toasterService, modalService) {
    _classCallCheck(this, DoctorDetailController);

    var doctorId = $stateParams.id;
    $scope.editMode = doctorId !== undefined;
    var tenantId;

    $scope.doctor = {
        CreatedAt: new Date()
    };

    if ($scope.editMode) {
        $rootScope.loading = true;
        doctorsService.getDoctor(doctorId).then(function (response) {
            $scope.doctor = response.data;
            $scope.doctor.picture = 'data:image/png;base64,' + $scope.doctor.picture;
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    } else {
        $rootScope.loading = true;
        doctorsService.getTenant().then(function (response) {
            tenantId = response.data;
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    }

    $scope.navigateBack = function () {
        $state.transitionTo('doctors');
    };

    $scope.nagivateToPatientList = function () {
        $state.transitionTo('patients');
    };

    $scope.removeDoctor = function () {
        modalService.showConfirmModal({
            messages: {
                title: 'Remove doctor',
                body: 'Are you sure you want to remove the doctor?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            $rootScope.loading = true;
            doctorsService.remove(doctorId).then(function (response) {
                if (response.status === 200) {
                    $state.transitionTo('doctors');
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        });
    };

    $scope.save = function () {
        if ($scope.doctor.picture) {
            $scope.doctor.picture = $scope.doctor.picture.split(',')[1];
        }

        if (!$scope.editMode) {
            $scope.doctor.tenantId = tenantId;
            $rootScope.loading = true;
            doctorsService.add($scope.doctor).then(function (response) {
                if (response.status === 200) {
                    $scope.navigateBack();
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        } else {
            $rootScope.loading = true;
            doctorsService.update($scope.doctor).then(function (response) {
                if (response.status === 200) {
                    $scope.navigateBack();
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        }
    };
};

exports['default'] = DoctorDetailController;
module.exports = exports['default'];

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DoctorsController = function DoctorsController($scope, $rootScope, $state, doctorsService, toasterService, modalService) {
    _classCallCheck(this, DoctorsController);

    var pageSize = 4;
    var pageCount = 0;
    $scope.doctors = [];

    $scope.getList = function () {
        $rootScope.loading = true;
        doctorsService.getList(pageSize, pageCount).then(function (doctors) {
            if (doctors.length < pageSize) {
                $scope.noMoreData = true;
            }
            doctors.forEach(function (doctor) {
                $scope.doctors.push(doctor);
            });
            pageCount++;
            $scope.refreshSelectedItems();

            if (!$scope.doctors.length) {
                $scope.noData = true;
            }
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    };

    $scope.nagivateToDetail = function (doctorId) {
        doctorId ? $state.transitionTo('doctor', { id: doctorId }) : $state.transitionTo('doctor');
    };

    $scope.refreshSelectedItems = function (all) {
        if (all) {
            $scope.doctors.forEach(function (doctor) {
                doctor.selected = $scope.everySelected;
            });
        }

        $scope.anySelected = $scope.doctors.some(function (doctor) {
            return doctor.selected;
        });

        $scope.everySelected = $scope.doctors.every(function (doctor) {
            return doctor.selected;
        });
    };

    $scope.remove = function (doctor) {
        var severalDoctors = doctor === undefined;

        modalService.showConfirmModal({
            messages: {
                title: 'Remove doctor' + (severalDoctors ? 's' : ''),
                body: 'Are you sure you want to remove the selected doctor' + (severalDoctors ? 's' : '') + '?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            var doctorIdList;
            if (doctor) {
                doctorIdList = [doctor.doctorId];
            } else {
                doctorIdList = $scope.doctors.map(function (doctorItem) {
                    if (doctorItem.selected) {
                        return doctorItem.doctorId;
                    }
                    return null;
                });
            }

            doctorIdList.forEach(function (doctorId) {
                doctorsService.remove(doctorId).then(function (response) {
                    if (response.status === 200) {
                        $scope.doctors.forEach(function (doctorItem) {
                            if (doctorId === doctorItem.doctorId) {
                                var index = $scope.doctors.indexOf(doctorItem);
                                $scope.doctors.splice(index, 1);
                            }
                        });
                    }
                })['catch'](function (error) {
                    toasterService.showServerError(error);
                });
            });

            $scope.refreshSelectedItems();
        });
    };

    $scope.getList();
};

exports['default'] = DoctorsController;
module.exports = exports['default'];

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FileBase64 = (function () {
    function FileBase64() {
        _classCallCheck(this, FileBase64);

        this.restrict = 'A';
        this.scope = {
            'b64': '='
        };
    }

    _createClass(FileBase64, [{
        key: 'link',
        value: function link(scope, element) {

            element.on('change', function () {
                var file = element.get(0).files[0];
                var reader = new FileReader();

                reader.onloadend = function () {
                    scope.$apply(function () {
                        scope.b64 = reader.result;
                    });
                };

                if (file) {
                    reader.readAsDataURL(file);
                } else {
                    scope.b64 = '';
                }
            });
        }
    }], [{
        key: 'directiveFactory',
        value: function directiveFactory() {
            FileBase64.instance = new FileBase64();
            return FileBase64.instance;
        }
    }]);

    return FileBase64;
})();

exports['default'] = FileBase64.directiveFactory;
module.exports = exports['default'];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersDoctorsController = require('./controllers/doctorsController');

var _controllersDoctorsController2 = _interopRequireDefault(_controllersDoctorsController);

var _controllersDoctorDetailController = require('./controllers/doctorDetailController');

var _controllersDoctorDetailController2 = _interopRequireDefault(_controllersDoctorDetailController);

var _servicesDoctorsService = require('./services/doctorsService');

var _servicesDoctorsService2 = _interopRequireDefault(_servicesDoctorsService);

var _directivesFileDirective = require('./directives/fileDirective');

var _directivesFileDirective2 = _interopRequireDefault(_directivesFileDirective);

var moduleName = 'myHealth.doctors';

angular.module(moduleName, []).controller('doctorsController', _controllersDoctorsController2['default']).controller('doctorDetailController', _controllersDoctorDetailController2['default']).service('doctorsService', _servicesDoctorsService2['default']).directive('fileBase64', _directivesFileDirective2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/doctorDetailController":13,"./controllers/doctorsController":14,"./directives/fileDirective":15,"./services/doctorsService":17}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function DoctorsService($http) {
    'use strict';

    var doctors;

    return {
        getTenant: getTenant,
        getDoctor: getDoctor,
        getList: getList,
        add: add,
        update: update,
        remove: remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getDoctor(doctorId) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors/' + doctorId;
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }

    function getList(pageSize, pageCount) {
        var handleSuccess = function handleSuccess(response) {
            doctors = response.data;
            return doctors;
        };

        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors';
            return $http({
                method: 'GET',
                url: url,
                params: {
                    pageSize: pageSize,
                    pageCount: pageCount
                },
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function add(doctor) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors/';
            return $http({
                method: 'POST',
                url: url,
                data: doctor,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }

    function update(doctor) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors/';
            return $http({
                method: 'PUT',
                url: url,
                data: doctor,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }

    function remove(doctorId) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors/' + doctorId;
            return $http({
                method: 'DELETE',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }
}

exports['default'] = DoctorsService;
module.exports = exports['default'];

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PatientsController = function PatientsController($scope, $rootScope, patientsService, toasterService, modalService) {
    _classCallCheck(this, PatientsController);

    var pageSize = 4;
    var pageCount = 0;

    $scope.patients = [];

    $scope.getList = function () {
        $rootScope.loading = true;
        patientsService.getList(pageSize, pageCount).then(function (patients) {
            if (patients.length < pageSize) {
                $scope.noMoreData = true;
            }
            patients.forEach(function (patient) {
                $scope.patients.push(patient);
            });
            pageCount++;
            $scope.refreshSelectedItems();

            if (!$scope.patients.length) {
                $scope.noData = true;
            }
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    };

    $scope.refreshSelectedItems = function (all) {
        if (all) {
            $scope.patients.forEach(function (patient) {
                patient.selected = $scope.everySelected;
            });
        }

        $scope.anySelected = $scope.patients.some(function (patient) {
            return patient.selected;
        });

        $scope.everySelected = $scope.patients.every(function (patient) {
            return patient.selected;
        });
    };

    $scope.remove = function (patient) {
        var severalPatients = patient === undefined;

        modalService.showConfirmModal({
            messages: {
                title: 'Remove patient' + (severalPatients ? 's' : ''),
                body: 'Are you sure you want to remove the selected patient' + (severalPatients ? 's' : '') + '?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            var patientIdList;
            if (patient) {
                patientIdList = [patient.patientId];
            } else {
                patientIdList = $scope.patients.map(function (patientItem) {
                    if (patientItem.selected) {
                        return patientItem.patientId;
                    }
                    return null;
                });
            }

            patientIdList.forEach(function (patientId) {
                patientsService.remove(patientId).then(function (response) {
                    if (response.status === 200) {
                        $scope.patients.forEach(function (patientItem) {
                            if (patientId === patientItem.patientId) {
                                var index = $scope.patients.indexOf(patientItem);
                                $scope.patients.splice(index, 1);
                            }
                        });
                    }
                })['catch'](function (error) {
                    toasterService.showServerError(error);
                });
            });

            $scope.refreshSelectedItems();
        });
    };

    $scope.getList();
};

exports['default'] = PatientsController;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersPatientsController = require('./controllers/patientsController');

var _controllersPatientsController2 = _interopRequireDefault(_controllersPatientsController);

var _servicesPatientsService = require('./services/patientsService');

var _servicesPatientsService2 = _interopRequireDefault(_servicesPatientsService);

var moduleName = 'myHealth.patients';

angular.module(moduleName, []).controller('patientsController', _controllersPatientsController2['default']).service('patientsService', _servicesPatientsService2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/patientsController":18,"./services/patientsService":20}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function PatientsService($http) {
    'use strict';

    var patients;

    return {
        getList: getList,
        remove: remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getList(pageSize, pageCount) {
        var handleSuccess = function handleSuccess(response) {
            patients = response.data;
            return patients;
        };

        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/patients';
            return $http({
                method: 'GET',
                url: url,
                params: {
                    pageSize: pageSize,
                    pageCount: pageCount
                },
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function remove(patientId) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/patients/' + patientId;
            return $http({
                method: 'DELETE',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }
}

exports['default'] = PatientsService;
module.exports = exports['default'];

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var STATE = new WeakMap();

var HeaderController = function HeaderController($state, $rootScope, $http, $timeout) {
    var _this = this;

    _classCallCheck(this, HeaderController);

    var vm = this;
    STATE.set(this, $state);

    var stateChangeCalled = false;

    $timeout(function () {
        if (stateChangeCalled) {
            return;
        }
        _this.title = $state.current.name !== 'default' ? $state.current.name : '';
        vm.viewName = $state.current.name;
    }, 100);

    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
        stateChangeCalled = true;
        _this.title = toState.name !== 'default' ? toState.name : '';
        vm.viewName = toState.name;
        $rootScope.menuOpen = false;
    });

    $http({
        method: 'GET',
        url: '/api/users/current/user'
    }).then(function (response) {
        vm.userName = response.data;
    });

    $http({
        method: 'GET',
        url: '/api/users/current/claims'
    }).then(function (response) {
        vm.canManageUsers = response.data.ManageUsers || false;
        vm.canManageTenants = response.data.ManageTenants || false;
    });
};

HeaderController.$inject = ['$state', '$rootScope', '$http', '$timeout'];
exports['default'] = HeaderController;
module.exports = exports['default'];

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HeaderBar = (function () {
    function HeaderBar() {
        _classCallCheck(this, HeaderBar);

        this.restrict = 'E';
        this.templateUrl = '/app/components/shared/directives/headerBar/headerBarTemplate.html';
        this.controller = 'headerController';
        this.controllerAs = 'vm';
    }

    _createClass(HeaderBar, [{
        key: 'link',
        value: function link(scope) {
            $(document).bind('click', function (event) {
                if (!scope.menuOpen) {
                    event.stopPropagation();
                } else {
                    scope.$apply(function () {
                        scope.menuOpen = false;
                    });
                }
            });

            $('.header-hamburguer, #sidebar-container').bind('click', function (event) {
                event.stopPropagation();
            });
        }
    }], [{
        key: 'directiveFactory',
        value: function directiveFactory() {
            HeaderBar.instance = new HeaderBar();
            return HeaderBar.instance;
        }
    }]);

    return HeaderBar;
})();

exports['default'] = HeaderBar.directiveFactory;
module.exports = exports['default'];

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var LeftMenu = (function () {
    function LeftMenu() {
        _classCallCheck(this, LeftMenu);

        this.restrict = 'E';
        this.templateUrl = '/app/components/shared/directives/leftMenu/leftMenuTemplate.html';
        this.controller = 'headerController';
        this.controllerAs = 'vm';
    }

    _createClass(LeftMenu, null, [{
        key: 'directiveFactory',
        value: function directiveFactory() {
            LeftMenu.instance = new LeftMenu();
            return LeftMenu.instance;
        }
    }]);

    return LeftMenu;
})();

exports['default'] = LeftMenu.directiveFactory;
module.exports = exports['default'];

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function CamelCaseFilter() {
    'use strict';
    return function (input) {
        if (!input) {
            return input;
        }

        var list = input.match(/[A-Za-z][a-z]*/g);

        if (!list) {
            return input;
        }
        var result = list.join(' ');
        result = result.substr(0, 1).toUpperCase() + result.substr(1);
        return result;
    };
}

exports['default'] = CamelCaseFilter;
module.exports = exports['default'];

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function ExceptionHandler($injector) {
    'use strict';

    var handledExceptions = [];

    return function (exception) {
        if (handledExceptions.indexOf(exception) === -1) {
            appInsights.trackException(exception);
            $injector.get('toasterService').showServerError();
            handledExceptions.push(exception);
            console.warn('Unhandled Exception', exception);
        }
    };
}

exports['default'] = ExceptionHandler;
module.exports = exports['default'];

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function InitialPage($http, $q) {
    'use strict';

    return {
        getInitialState: getInitialState
    };

    function getInitialState() {
        return $q(function (resolve, reject) {
            $http({
                method: 'GET',
                url: '/api/users/current/claims'
            }).then(function (response) {

                if (response.data.ManageUsers) {
                    resolve('users');
                } else if (response.data.ManageTenants) {
                    resolve('clinics');
                } else {
                    resolve('dashboard');
                }
            });
        });
    }
}

exports['default'] = InitialPage;
module.exports = exports['default'];

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function ModalService($modal) {
    'use strict';

    return {
        showConfirmModal: showConfirmModal
    };

    function showConfirmModal(opts) {
        return $modal.open({

            templateUrl: '/app/components/shared/views/confirmModal.html',

            controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {

                $scope.messages = opts.messages;

                $scope.ok = function () {
                    $modalInstance.close();
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }]

        }).result;
    }
}

exports['default'] = ModalService;
module.exports = exports['default'];

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function ToasterService(toaster) {
    'use strict';

    return {
        showServerError: showServerError
    };

    function showServerError(error) {
        toaster.pop('error', 'Error', typeof error === 'string' && error ? error : 'Oops! Something went wrong!');
    }
}

exports['default'] = ToasterService;
module.exports = exports['default'];

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _directivesLeftMenuLeftMenuDirective = require('./directives/leftMenu/leftMenuDirective');

var _directivesLeftMenuLeftMenuDirective2 = _interopRequireDefault(_directivesLeftMenuLeftMenuDirective);

var _directivesHeaderBarHeaderBarDirective = require('./directives/headerBar/headerBarDirective');

var _directivesHeaderBarHeaderBarDirective2 = _interopRequireDefault(_directivesHeaderBarHeaderBarDirective);

var _controllersHeaderController = require('./controllers/headerController');

var _controllersHeaderController2 = _interopRequireDefault(_controllersHeaderController);

var _servicesToasterService = require('./services/toasterService');

var _servicesToasterService2 = _interopRequireDefault(_servicesToasterService);

var _servicesModalService = require('./services/modalService');

var _servicesModalService2 = _interopRequireDefault(_servicesModalService);

var _servicesInitialPageService = require('./services/initialPageService');

var _servicesInitialPageService2 = _interopRequireDefault(_servicesInitialPageService);

var _servicesExceptionHandler = require('./services/exceptionHandler');

var _servicesExceptionHandler2 = _interopRequireDefault(_servicesExceptionHandler);

var _filtersCamelCaseFilter = require('./filters/camelCaseFilter');

var _filtersCamelCaseFilter2 = _interopRequireDefault(_filtersCamelCaseFilter);

var moduleName = 'myHealth.shared';

angular.module(moduleName, ['ui.bootstrap', 'toaster']).directive('leftMenu', _directivesLeftMenuLeftMenuDirective2['default']).directive('headerBar', _directivesHeaderBarHeaderBarDirective2['default']).controller('headerController', _controllersHeaderController2['default']).service('toasterService', _servicesToasterService2['default']).service('modalService', _servicesModalService2['default']).service('initialPageService', _servicesInitialPageService2['default']).factory('$exceptionHandler', _servicesExceptionHandler2['default']).filter('camelCase', _filtersCamelCaseFilter2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/headerController":21,"./directives/headerBar/headerBarDirective":22,"./directives/leftMenu/leftMenuDirective":23,"./filters/camelCaseFilter":24,"./services/exceptionHandler":25,"./services/initialPageService":26,"./services/modalService":27,"./services/toasterService":28}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var UserDetailController = function UserDetailController($scope, $rootScope, $stateParams, $state, usersService, toasterService, modalService) {
    _classCallCheck(this, UserDetailController);

    var username = $stateParams.username;
    $scope.editMode = username !== undefined;

    $scope.user = {};

    if ($scope.editMode) {
        $rootScope.loading = true;
        usersService.getUser(username).then(function (response) {
            $scope.user = response.data;
            $scope.user.Picture = 'data:image/png;base64,' + $scope.user.Picture;
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    }

    $scope.navigateBack = function () {
        $state.transitionTo('users');
    };

    $scope.removeUser = function () {
        modalService.showConfirmModal({
            messages: {
                title: 'Remove user',
                body: 'Are you sure you want to remove the user?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            $rootScope.loading = true;
            usersService.remove(username).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $state.transitionTo('users');
                } else {
                    toasterService.showServerError();
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        });
    };

    $scope.save = function () {
        if ($scope.user.Picture) {
            $scope.user.Picture = $scope.user.Picture.split(',')[1];
        }

        if (!$scope.editMode) {
            $rootScope.loading = true;
            usersService.add($scope.user).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError(response.data.message);
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        } else {
            $rootScope.loading = true;
            usersService.update($scope.user).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError(response.data.message);
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        }
    };
};

exports['default'] = UserDetailController;
module.exports = exports['default'];

},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var UsersController = function UsersController($scope, $rootScope, $state, usersService, toasterService, modalService) {
    _classCallCheck(this, UsersController);

    var pageSize = 4;
    var pageCount = 0;

    $scope.users = [];

    $scope.getList = function () {
        $rootScope.loading = true;
        usersService.getList(pageSize, pageCount).then(function (users) {
            if (users.length < pageSize) {
                $scope.noMoreData = true;
            }
            users.forEach(function (user) {
                $scope.users.push(user);
            });
            pageCount++;
            $scope.refreshSelectedItems();

            if (!$scope.users.length) {
                $scope.noData = true;
            }
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    };

    $scope.nagivateToDetail = function (username) {
        username ? $state.transitionTo('user', { username: username }) : $state.transitionTo('user');
    };

    $scope.refreshSelectedItems = function (all) {
        if (all) {
            $scope.users.forEach(function (user) {
                user.selected = $scope.everySelected;
            });
        }

        $scope.anySelected = $scope.users.some(function (user) {
            return user.selected;
        });

        $scope.everySelected = $scope.users.every(function (user) {
            return user.selected;
        });
    };

    $scope.remove = function (user) {
        var severalUsers = user === undefined;

        modalService.showConfirmModal({
            messages: {
                title: 'Remove user' + (severalUsers ? 's' : ''),
                body: 'Are you sure you want to remove the selected user' + (severalUsers ? 's' : '') + '?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            var usernameList;
            if (user) {
                usernameList = [user.UserName];
            } else {
                usernameList = $scope.users.map(function (userItem) {
                    if (userItem.selected) {
                        return userItem.UserName;
                    }
                    return null;
                });
            }

            usernameList.forEach(function (username) {
                usersService.remove(username).then(function (response) {
                    if (response.status === 200) {
                        $scope.users.forEach(function (userItem) {
                            if (username === userItem.UserName) {
                                var index = $scope.users.indexOf(userItem);
                                $scope.users.splice(index, 1);
                            }
                        });
                    }
                })['catch'](function (error) {
                    toasterService.showServerError(error);
                });
            });

            $scope.refreshSelectedItems();
        });
    };

    $scope.getList();
};

exports['default'] = UsersController;
module.exports = exports['default'];

},{}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function UsersService($http) {
    'use strict';

    var users;

    return {
        getUser: getUser,
        getList: getList,
        add: add,
        update: update,
        remove: remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getUser(username) {
        var url = '/api/users/' + username;
        return $http({
            method: 'GET',
            url: url
        });
    }

    function getList(pageSize, pageCount) {
        var handleSuccess = function handleSuccess(response) {
            users = response.data;
            return users;
        };

        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/users';
            return $http({
                method: 'GET',
                url: url,
                params: {
                    pageSize: pageSize,
                    pageCount: pageCount
                },
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function add(user) {
        var url = '/api/users/';
        return $http({
            method: 'POST',
            url: url,
            data: {
                user: user,
                password: user.newPassword || null
            }
        });
    }

    function update(user) {
        var url = '/api/users/';
        return $http({
            method: 'PUT',
            url: url,
            data: {
                user: user,
                password: user.newPassword || null
            }
        });
    }

    function remove(username) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/users/' + username;
            return $http({
                method: 'DELETE',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }
}

exports['default'] = UsersService;
module.exports = exports['default'];

},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersUsersController = require('./controllers/usersController');

var _controllersUsersController2 = _interopRequireDefault(_controllersUsersController);

var _controllersUserDetailController = require('./controllers/userDetailController');

var _controllersUserDetailController2 = _interopRequireDefault(_controllersUserDetailController);

var _servicesUsersService = require('./services/usersService');

var _servicesUsersService2 = _interopRequireDefault(_servicesUsersService);

var moduleName = 'myHealth.users';

angular.module(moduleName, []).controller('usersController', _controllersUsersController2['default']).controller('userDetailController', _controllersUserDetailController2['default']).service('usersService', _servicesUsersService2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/userDetailController":30,"./controllers/usersController":31,"./services/usersService":32}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvYXBwLmJvb3RzdHJhcHBlci5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9hcHAubW9kdWxlLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvY2xpbmljcy9jbGluaWNzLm1vZHVsZS5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL2NsaW5pY3MvY29udHJvbGxlcnMvY2xpbmljRGV0YWlsQ29udHJvbGxlci5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL2NsaW5pY3MvY29udHJvbGxlcnMvY2xpbmljc0NvbnRyb2xsZXIuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9jbGluaWNzL3NlcnZpY2VzL2NsaW5pY3NTZXJ2aWNlLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvZGFpbHlSZXBvcnQvY29udHJvbGxlcnMvZGFpbHlSZXBvcnRDb250cm9sbGVyLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvZGFpbHlSZXBvcnQvZGFpbHlSZXBvcnQubW9kdWxlLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRyb2xsZXJzL2Rhc2hib2FyZENvbnRyb2xsZXIuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kaXJlY3RpdmVzL01IQ2hhcnREaXJlY3RpdmUuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvc2VydmljZXMvZGFzaGJvYXJkU2VydmljZS5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL2RvY3RvcnMvY29udHJvbGxlcnMvZG9jdG9yRGV0YWlsQ29udHJvbGxlci5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL2RvY3RvcnMvY29udHJvbGxlcnMvZG9jdG9yc0NvbnRyb2xsZXIuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9kb2N0b3JzL2RpcmVjdGl2ZXMvZmlsZURpcmVjdGl2ZS5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL2RvY3RvcnMvZG9jdG9ycy5tb2R1bGUuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9kb2N0b3JzL3NlcnZpY2VzL2RvY3RvcnNTZXJ2aWNlLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvY29udHJvbGxlcnMvcGF0aWVudHNDb250cm9sbGVyLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudHMubW9kdWxlLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvc2VydmljZXMvcGF0aWVudHNTZXJ2aWNlLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NvbnRyb2xsZXJzL2hlYWRlckNvbnRyb2xsZXIuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9zaGFyZWQvZGlyZWN0aXZlcy9oZWFkZXJCYXIvaGVhZGVyQmFyRGlyZWN0aXZlLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2RpcmVjdGl2ZXMvbGVmdE1lbnUvbGVmdE1lbnVEaXJlY3RpdmUuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9zaGFyZWQvZmlsdGVycy9jYW1lbENhc2VGaWx0ZXIuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZXhjZXB0aW9uSGFuZGxlci5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9pbml0aWFsUGFnZVNlcnZpY2UuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbW9kYWxTZXJ2aWNlLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL3RvYXN0ZXJTZXJ2aWNlLmpzIiwiQzovVXNlcnMva2FydGhpa24vU291cmNlL1JlcG9zL0RvY2tlckVWMi9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJDOi9Vc2Vycy9rYXJ0aGlrbi9Tb3VyY2UvUmVwb3MvRG9ja2VyRVYyL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy91c2Vycy9jb250cm9sbGVycy91c2VyRGV0YWlsQ29udHJvbGxlci5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL3VzZXJzL2NvbnRyb2xsZXJzL3VzZXJzQ29udHJvbGxlci5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL3VzZXJzL3NlcnZpY2VzL3VzZXJzU2VydmljZS5qcyIsIkM6L1VzZXJzL2thcnRoaWtuL1NvdXJjZS9SZXBvcy9Eb2NrZXJFVjIvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXJzLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7eUJDQTBDLGNBQWM7Ozs7QUFFeEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLHdCQUFnQixDQUFDLENBQUM7Ozs7Ozs7Ozs7OzRDQ0F2QyxtQ0FBbUM7Ozs7a0RBQ2hDLHlDQUF5Qzs7Ozs4Q0FDM0MscUNBQXFDOzs7O2dEQUNwQyx1Q0FBdUM7Ozs7c0RBQ3BDLDZDQUE2Qzs7OzswQ0FDbkQsaUNBQWlDOzs7OzhDQUMvQixxQ0FBcUM7Ozs7QUFSbEUsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDOztBQVU3QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLG9VQUEwSSxDQUFDLENBQUM7O0FBRTFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVuQixTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUU7QUFDckMsc0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxD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QztBQUN4QixlQUFPLEtBQUssQ0FBQztBQUNULGtCQUFNLEVBQUUsS0FBSztBQUNiLGVBQUcsRUFBRSxHQUFHO0FBQ1IsZ0JBQUksRUFBRTtBQUNGLG9CQUFJLEVBQUUsSUFBSTtBQUNWLHdCQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJO2FBQ3JDO1NBQ0osQ0FBQyxDQUFDO0tBQ047O0FBRUQsYUFBUyxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQ3RCLGVBQU8sU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUSxFQUFFO0FBQ3ZDLGdCQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCLGdCQUFJLEdBQUcsbUJBQWlCLFFBQVEsQUFBRSxDQUFDO0FBQ25DLG1CQUFPLEtBQUssQ0FBQztBQUNULHNCQUFNLEVBQUUsUUFBUTtBQUNoQixtQkFBRyxFQUFFLEdBQUc7QUFDUix1QkFBTyxFQUFFO0FBQ0wsNEJBQVEsRUFBRSxRQUFRO2lCQUNyQjthQUNKLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztLQUNOO0NBQ0o7O3FCQUVjLFlBQVk7Ozs7Ozs7Ozs7OzswQ0N4RkMsK0JBQStCOzs7OytDQUMxQixvQ0FBb0M7Ozs7b0NBQzVDLHlCQUF5Qjs7OztBQUpqRCxJQUFJLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQzs7QUFNbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQzFCLFVBQVUsQ0FBQyxpQkFBaUIsMENBQWtCLENBQzlDLFVBQVUsQ0FBQyxzQkFBc0IsK0NBQXVCLENBQ3hELE9BQU8sQ0FBQyxjQUFjLG9DQUFlLENBQUM7O3FCQUUzQixVQUFVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIu+7v2ltcG9ydCB7IGRlZmF1bHQgYXMgbXlIZWFsdGhNb2R1bGV9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSwgW215SGVhbHRoTW9kdWxlXSk7Iiwi77u/dmFyIG1vZHVsZU5hbWUgPSAnbXlIZWFsdGgnO1xuXG5pbXBvcnQgc2hhcmVkTW9kdWxlTmFtZSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IGRhc2hib2FyZE1vZHVsZU5hbWUgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlJztcbmltcG9ydCBkb2N0b3JzTW9kdWxlTmFtZSBmcm9tICcuL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzLm1vZHVsZSc7XG5pbXBvcnQgcGF0aWVudHNNb2R1bGVOYW1lIGZyb20gJy4vY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50cy5tb2R1bGUnO1xuaW1wb3J0IGRhaWx5UmVwb3J0TW9kdWxlTmFtZSBmcm9tICcuL2NvbXBvbmVudHMvZGFpbHlSZXBvcnQvZGFpbHlSZXBvcnQubW9kdWxlJztcbmltcG9ydCB1c2Vyc01vZHVsZU5hbWUgZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5pbXBvcnQgY2xpbmljc01vZHVsZU5hbWUgZnJvbSAnLi9jb21wb25lbnRzL2NsaW5pY3MvY2xpbmljcy5tb2R1bGUnO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgWyd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgc2hhcmVkTW9kdWxlTmFtZSwgZGFzaGJvYXJkTW9kdWxlTmFtZSwgZG9jdG9yc01vZHVsZU5hbWUsIHBhdGllbnRzTW9kdWxlTmFtZSwgZGFpbHlSZXBvcnRNb2R1bGVOYW1lLCB1c2Vyc01vZHVsZU5hbWUsIGNsaW5pY3NNb2R1bGVOYW1lXSk7XG5cbmFwcC5ydW4ocnVuKTtcbmFwcC5jb25maWcoY29uZmlnKTtcblxuZnVuY3Rpb24gcnVuKCRzdGF0ZSwgaW5pdGlhbFBhZ2VTZXJ2aWNlKSB7XG4gICAgaW5pdGlhbFBhZ2VTZXJ2aWNlLmdldEluaXRpYWxTdGF0ZSgpLnRoZW4oZnVuY3Rpb24oaW5pdGlhbFN0YXRlKXtcbiAgICAgICAgJHN0YXRlLmdvKGluaXRpYWxTdGF0ZSwge30sIHtsb2NhdGlvbjogXCJyZXBsYWNlXCJ9KTsgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyKSB7XG5cbiAgICBjb25zdCBkZWZhdWx0VXJsID0gJy8nO1xuXG4gICAgJGNvbXBpbGVQcm92aWRlci5kZWJ1Z0luZm9FbmFibGVkKGZhbHNlKTtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci53aGVuKCcnLCBkZWZhdWx0VXJsKTtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy80MDQnKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnZGVmYXVsdCcsIHtcbiAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICcnXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnZGFzaGJvYXJkJywge1xuICAgICAgICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdmlld3MvbWFpbi5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6J2Rhc2hib2FyZENvbnRyb2xsZXInXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnZG9jdG9ycycsIHtcbiAgICAgICAgICAgIHVybDogJy9kb2N0b3JzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL2RvY3RvcnMvdmlld3MvbWFpbi5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6J2RvY3RvcnNDb250cm9sbGVyJ1xuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2RvY3RvcicsIHtcbiAgICAgICAgICAgIHVybDogJy9kb2N0b3I/aWQnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvZG9jdG9ycy92aWV3cy9kZXRhaWwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOidkb2N0b3JEZXRhaWxDb250cm9sbGVyJ1xuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ3BhdGllbnRzJywge1xuICAgICAgICAgICAgdXJsOiAnL3BhdGllbnRzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3ZpZXdzL21haW4uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOidwYXRpZW50c0NvbnRyb2xsZXInXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnZGFpbHlSZXBvcnQnLCB7XG4gICAgICAgICAgICB1cmw6ICcvZGFpbHlyZXBvcnQnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvZGFpbHlSZXBvcnQvdmlld3MvbWFpbi5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdkYWlseVJlcG9ydENvbnRyb2xsZXInXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgndXNlcnMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlcnMnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvdXNlcnMvdmlld3MvbWFpbi5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICd1c2Vyc0NvbnRyb2xsZXInXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgndXNlcicsIHtcbiAgICAgICAgICAgIHVybDogJy91c2VyP3VzZXJuYW1lJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL3VzZXJzL3ZpZXdzL2RldGFpbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6J3VzZXJEZXRhaWxDb250cm9sbGVyJ1xuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2NsaW5pY3MnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY2xpbmljcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy9jbGluaWNzL3ZpZXdzL21haW4uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnY2xpbmljc0NvbnRyb2xsZXInXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnY2xpbmljJywge1xuICAgICAgICAgICAgdXJsOiAnL2NsaW5pYz9pZCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy9jbGluaWNzL3ZpZXdzL2RldGFpbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjbGluaWNEZXRhaWxDb250cm9sbGVyJ1xuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2Vycm9yJywge1xuICAgICAgICAgICAgdXJsOiAnLzQwNCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy9zaGFyZWQvdmlld3MvZXJyb3IuaHRtbCdcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7Iiwi77u/dmFyIG1vZHVsZU5hbWUgPSAnbXlIZWFsdGguY2xpbmljcyc7XG5cbmltcG9ydCBDbGluaWNzQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2NsaW5pY3NDb250cm9sbGVyJztcbmltcG9ydCBDbGluaWNEZXRhaWxDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvY2xpbmljRGV0YWlsQ29udHJvbGxlcic7XG5pbXBvcnQgQ2xpbmljc1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9jbGluaWNzU2VydmljZSc7XG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKS5cbiAgICBjb250cm9sbGVyKCdjbGluaWNzQ29udHJvbGxlcicsIENsaW5pY3NDb250cm9sbGVyKS5cbiAgICBjb250cm9sbGVyKCdjbGluaWNEZXRhaWxDb250cm9sbGVyJywgQ2xpbmljRGV0YWlsQ29udHJvbGxlcikuXG4gICAgc2VydmljZSgnY2xpbmljc1NlcnZpY2UnLCBDbGluaWNzU2VydmljZSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7Iiwi77u/Y2xhc3MgQ2xpbmljRGV0YWlsQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSwgY2xpbmljc1NlcnZpY2UsIHRvYXN0ZXJTZXJ2aWNlLCBtb2RhbFNlcnZpY2UpIHtcblxuICAgICAgICB2YXIgdGVuYW50SWQgPSAkc3RhdGVQYXJhbXMuaWQ7XG4gICAgICAgICRzY29wZS5lZGl0TW9kZSA9IHRlbmFudElkICE9PSB1bmRlZmluZWQ7XG5cbiAgICAgICAgJHNjb3BlLmNsaW5pYyA9IHt9O1xuXG4gICAgICAgIGlmICgkc2NvcGUuZWRpdE1vZGUpIHtcbiAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBjbGluaWNzU2VydmljZS5nZXRDbGluaWModGVuYW50SWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5jbGluaWMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRzY29wZS5uYXZpZ2F0ZUJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAkc3RhdGUudHJhbnNpdGlvblRvKCdjbGluaWNzJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnJlbW92ZUNsaW5pYyA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsU2VydmljZS5zaG93Q29uZmlybU1vZGFsKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlbW92ZSBjbGluaWMnLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgY2xpbmljPycsXG4gICAgICAgICAgICAgICAgICAgIG9rOiAnWWVzLCByZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgIGNsaW5pY3NTZXJ2aWNlLnJlbW92ZSh0ZW5hbnRJZClcbiAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoISRzY29wZS5lZGl0TW9kZSkge1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nSW5mbyA9IGBHZW5lcmF0aW5nIGV4YW1wbGUgZGF0YS5cXHJcXG5UaGlzIGNvdWxkIHRha2UgYSB3aGlsZSwgcGxlYXNlIHdhaXQuYDtcbiAgICAgICAgICAgICAgICBjbGluaWNzU2VydmljZS5hZGQoJHNjb3BlLmNsaW5pYylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZ0luZm8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjbGluaWNzU2VydmljZS51cGRhdGUoJHNjb3BlLmNsaW5pYylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGluaWNEZXRhaWxDb250cm9sbGVyOyIsIu+7v2NsYXNzIENsaW5pY3NDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgY2xpbmljc1NlcnZpY2UsIHRvYXN0ZXJTZXJ2aWNlLCBtb2RhbFNlcnZpY2UpIHtcblxuICAgICAgICBjb25zdCBwYWdlU2l6ZSA9IDQ7XG4gICAgICAgIHZhciBwYWdlQ291bnQgPSAwO1xuXG4gICAgICAgICRzY29wZS5jbGluaWNzID0gW107XG5cbiAgICAgICAgJHNjb3BlLmdldExpc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY2xpbmljc1NlcnZpY2UuZ2V0TGlzdChwYWdlU2l6ZSwgcGFnZUNvdW50KVxuICAgICAgICAgICAgICAgIC50aGVuKChjbGluaWNzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGluaWNzLmxlbmd0aCA8IHBhZ2VTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubm9Nb3JlRGF0YSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xpbmljcy5mb3JFYWNoKChjbGluaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jbGluaWNzLnB1c2goY2xpbmljKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuY2xpbmljcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ub0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5uYWdpdmF0ZVRvRGV0YWlsID0gKHRlbmFudElkKSA9PiB7XG4gICAgICAgICAgICB0ZW5hbnRJZCA/ICRzdGF0ZS50cmFuc2l0aW9uVG8oJ2NsaW5pYycsIHsgaWQ6IHRlbmFudElkIH0pIDogJHN0YXRlLnRyYW5zaXRpb25UbygnY2xpbmljJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zID0gKGFsbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFsbCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5jbGluaWNzLmZvckVhY2goKGNsaW5pYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGluaWMuc2VsZWN0ZWQgPSAkc2NvcGUuZXZlcnlTZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLmFueVNlbGVjdGVkID0gJHNjb3BlLmNsaW5pY3Muc29tZSgoY2xpbmljKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaW5pYy5zZWxlY3RlZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkc2NvcGUuZXZlcnlTZWxlY3RlZCA9ICRzY29wZS5jbGluaWNzLmV2ZXJ5KChjbGluaWMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpbmljLnNlbGVjdGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnJlbW92ZSA9IChjbGluaWMpID0+IHtcbiAgICAgICAgICAgIHZhciBzZXZlcmFsQ2xpbmljcyA9IGNsaW5pYyA9PT0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBtb2RhbFNlcnZpY2Uuc2hvd0NvbmZpcm1Nb2RhbCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBSZW1vdmUgY2xpbmljJHtzZXZlcmFsQ2xpbmljcz8ncyc6Jyd9YCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhlIHNlbGVjdGVkIGNsaW5pYyR7c2V2ZXJhbENsaW5pY3M/J3MnOicnfT9gLFxuICAgICAgICAgICAgICAgICAgICBvazogJ1llcywgcmVtb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbmFudElkTGlzdDtcbiAgICAgICAgICAgICAgICBpZiAoY2xpbmljKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbmFudElkTGlzdCA9IFtjbGluaWMudGVuYW50SWRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbmFudElkTGlzdCA9ICRzY29wZS5jbGluaWNzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjbGluaWNJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaW5pY0l0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsaW5pY0l0ZW0udGVuYW50SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmdJbmZvID0gYFJlbW92aW5nIHRoZSBjbGluaWMke3NldmVyYWxDbGluaWNzPydzJzonJ30gYW5kIGFsbCB0aGUgcmVsYXRlZCBkYXRhLlxcclxcblRoaXMgY291bGQgdGFrZSBhIHdoaWxlLCBwbGVhc2Ugd2FpdC5gO1xuXG4gICAgICAgICAgICAgICAgdGVuYW50SWRMaXN0LmZvckVhY2goKHRlbmFudElkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaW5pY3NTZXJ2aWNlLnJlbW92ZSh0ZW5hbnRJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY2xpbmljcy5mb3JFYWNoKChjbGluaWNJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVuYW50SWQgPT09IGNsaW5pY0l0ZW0udGVuYW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAkc2NvcGUuY2xpbmljcy5pbmRleE9mKGNsaW5pY0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jbGluaWNzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nSW5mbyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRzY29wZS5yZWZyZXNoU2VsZWN0ZWRJdGVtcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLmdldExpc3QoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpbmljc0NvbnRyb2xsZXI7Iiwi77u/ZnVuY3Rpb24gQ2xpbmljc1NlcnZpY2UoJGh0dHApIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgY2xpbmljcztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldENsaW5pYyxcbiAgICAgICAgZ2V0TGlzdCxcbiAgICAgICAgYWRkLFxuICAgICAgICB1cGRhdGUsXG4gICAgICAgIHJlbW92ZVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRUZW5hbnQoKSB7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2xpbmljKHRlbmFudElkKSB7XG4gICAgICAgIGxldCB1cmwgPSBgL2FwaS90ZW5hbnRzLyR7dGVuYW50SWR9YDtcbiAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaXN0KHBhZ2VTaXplLCBwYWdlQ291bnQpIHtcbiAgICAgICAgbGV0IGhhbmRsZVN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNsaW5pY3MgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGNsaW5pY3M7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS90ZW5hbnRzL2xpc3QnO1xuICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICAgICAgICAgIHBhZ2VDb3VudDpwYWdlQ291bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihoYW5kbGVTdWNjZXNzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGQodGVuYW50KSB7XG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS90ZW5hbnRzLyc7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRlbmFudDogdGVuYW50LFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0ZW5hbnQucGFzc3dvcmQgfHwgbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUodGVuYW50KSB7XG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS90ZW5hbnRzLyc7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdGVuYW50OiB0ZW5hbnQsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRlbmFudC5wYXNzd29yZCB8fCBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSh0ZW5hbnRJZCkge1xuICAgICAgICBsZXQgdXJsID0gYC9hcGkvdGVuYW50cy8ke3RlbmFudElkfWA7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGluaWNzU2VydmljZTsiLCLvu79jbGFzcyBEYWlseVJlcG9ydENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKiBlbXB0eSAqL1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFpbHlSZXBvcnRDb250cm9sbGVyOyIsIu+7v3ZhciBtb2R1bGVOYW1lID0gJ215SGVhbHRoLmRhaWx5UmVwb3J0JztcblxuaW1wb3J0IERhaWx5UmVwb3J0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2RhaWx5UmVwb3J0Q29udHJvbGxlcic7XG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKS5cbiAgICBjb250cm9sbGVyKCdkYWlseVJlcG9ydENvbnRyb2xsZXInLCBEYWlseVJlcG9ydENvbnRyb2xsZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVOYW1lOyIsIu+7v2NsYXNzIERhc2hib2FyZENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHJvb3RTY29wZSwgZGFzaGJvYXJkU2VydmljZSwgdG9hc3RlclNlcnZpY2UpIHtcblxuICAgICAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICRzY29wZS5pbmNvbWVzRXhwZW5zZXNZZWFyID0geWVhcjtcbiAgICAgICAgJHNjb3BlLnBhdGllbnRzWWVhciA9IHllYXI7XG4gICAgICAgICRzY29wZS5jdXJyZW50WWVhciA9IHllYXI7XG5cbiAgICAgICAgJHNjb3BlLmFkZFllYXJJbmNvbWVzRXhwZW5zZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLmN1cnJlbnRZZWFyID4gJHNjb3BlLmluY29tZXNFeHBlbnNlc1llYXIpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuaW5jb21lc0V4cGVuc2VzWWVhciArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5yZWR1Y2VZZWFySW5jb21lc0V4cGVuc2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgJHNjb3BlLmluY29tZXNFeHBlbnNlc1llYXIgLT0gMTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuYWRkWWVhclBhdGllbnRzID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCRzY29wZS5jdXJyZW50WWVhciA+ICRzY29wZS5wYXRpZW50c1llYXIpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUucGF0aWVudHNZZWFyICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnJlZHVjZVllYXJQYXRpZW50cyA9ICgpID0+IHtcbiAgICAgICAgICAgICRzY29wZS5wYXRpZW50c1llYXIgLT0gMTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuY29ycmVjdFllYXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLmN1cnJlbnRZZWFyIDwgJHNjb3BlLnBhdGllbnRzWWVhcikge1xuICAgICAgICAgICAgICAgICRzY29wZS5wYXRpZW50c1llYXIgPSAkc2NvcGUuY3VycmVudFllYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJHNjb3BlLmN1cnJlbnRZZWFyIDwgJHNjb3BlLmluY29tZXNFeHBlbnNlc1llYXIpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuaW5jb21lc0V4cGVuc2VzWWVhciA9ICRzY29wZS5jdXJyZW50WWVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY3JlYXRlQ2hhcnREYXRhSW5jb21lc0V4cGVuc2VzID0gKGV4cGVuc2VzLCBpbmNvbWVzKSA9PiB7XG4gICAgICAgICAgICAkc2NvcGUuY2hhcnREYXRhSW5jb21lc0V4cGVuc2VzID0ge1xuICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IGZ1bmN0aW9uICh2YWx1ZVBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZVBheWxvYWQudmFsdWUpLnRvRml4ZWQucmVwbGFjZSgnLicsICcsJykgKyAnJCc7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSU5DT01FUycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICAncmdiYSgwLDIxNiwyMDQsMC4yKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogJ3JnYmEoMCwyMTYsMjA0LDEpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50Q29sb3I6ICdyZ2JhKDAsMjE2LDIwNCwxKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludFN0cm9rZUNvbG9yOiAncmdiYSgwLDIxNiwyMDQsMSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRGaWxsOiAncmdiYSgwLDIxNiwyMDQsMSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRTdHJva2U6ICAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpbmNvbWVzXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRVhQRU5TRVMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAgJ3JnYmEoMjU1LDIzLDExMiwwLjIpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmdiYSgyNTUsMjMsMTEyLDEpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50Q29sb3I6ICdyZ2JhKDI1NSwyMywxMTIsMSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRTdHJva2VDb2xvcjogJ3JnYmEoMjU1LDIzLDExMiwxKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhpZ2hsaWdodEZpbGw6ICdyZ2JhKDI1NSwyMywxMTIsMSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRTdHJva2U6ICAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBleHBlbnNlc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNyZWF0ZUNoYXJ0RGF0YVBhdGllbnRzID0gZnVuY3Rpb24gKHBhdGllbnRzKSB7XG4gICAgICAgICAgICAkc2NvcGUuY2hhcnREYXRhUGF0aWVudHMgPSB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1BBVElFTlRTJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogICdyZ2JhKDAsMjE2LDIwNCwxKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogJ3JnYmEoMCwyMTYsMjA0LDEpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50Q29sb3I6ICdyZ2JhKDAsMjE2LDIwNCwxKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludFN0cm9rZUNvbG9yOiAncmdiYSgwLDIxNiwyMDQsMSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRGaWxsOiAncmdiYSgwLDIxNiwyMDQsMSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRTdHJva2U6ICAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwYXRpZW50c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkYXNoYm9hcmRTZXJ2aWNlLmdldFN1bW1hcnkoKVxuICAgICAgICAgICAgLnRoZW4oKHN1bW1hcnkpID0+IHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3VtbWFyeSA9IHN1bW1hcnk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAkc2NvcGUuJHdhdGNoKCdpbmNvbWVzRXhwZW5zZXNZZWFyJywgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIHx8IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGVuc2VzID0gbmV3IEFycmF5KDEyKTtcbiAgICAgICAgICAgICAgICBleHBlbnNlcy5maWxsKDAsIDAsIDEzKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5jb21lcyA9IG5ldyBBcnJheSgxMik7XG4gICAgICAgICAgICAgICAgaW5jb21lcy5maWxsKDAsIDAsIDEzKTtcblxuICAgICAgICAgICAgICAgIGRhc2hib2FyZFNlcnZpY2UuZ2V0RXhwZW5zZXMoJHNjb3BlLmluY29tZXNFeHBlbnNlc1llYXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChhbGxFeHBlbnNlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsRXhwZW5zZXMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlbnNlc1tpbmRleF0gPSBlbGVtLmV4cGVuc2VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY29tZXNbaW5kZXhdID0gZWxlbS5pbmNvbWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNoYXJ0RGF0YUluY29tZXNFeHBlbnNlcyhleHBlbnNlcywgaW5jb21lcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkc2NvcGUuJHdhdGNoKCdwYXRpZW50c1llYXInLCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgfHwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aWVudHMgPSBuZXcgQXJyYXkoMTIpO1xuICAgICAgICAgICAgICAgIHBhdGllbnRzLmZpbGwoMCwgMCwgMTMpO1xuXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkU2VydmljZS5nZXRQYXRpZW50cygkc2NvcGUucGF0aWVudHNZZWFyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoYWxsUGF0aWVudHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBhdGllbnRzLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudHNbaW5kZXhdID0gZWxlbS5wYXRpZW50c0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNoYXJ0RGF0YVBhdGllbnRzKHBhdGllbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkQ29udHJvbGxlcjsiLCLvu792YXIgbW9kdWxlTmFtZSA9ICdteUhlYWx0aC5kYXNoYm9hcmQnO1xuXG5pbXBvcnQgRGFzaGJvYXJkQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2Rhc2hib2FyZENvbnRyb2xsZXInO1xuaW1wb3J0IERhc2hib2FyZFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9kYXNoYm9hcmRTZXJ2aWNlJztcbmltcG9ydCBNSENoYXJ0IGZyb20gJy4vZGlyZWN0aXZlcy9NSENoYXJ0RGlyZWN0aXZlJztcblxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pLlxuICAgIGRpcmVjdGl2ZSgnY2hhcnQnLCBNSENoYXJ0KS5cbiAgICBjb250cm9sbGVyKCdkYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcikuXG4gICAgc2VydmljZSgnZGFzaGJvYXJkU2VydmljZScsIERhc2hib2FyZFNlcnZpY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVOYW1lOyIsIu+7v2NvbnN0IEZJTFRFUiA9IG5ldyBXZWFrTWFwKCk7XG5cbmNsYXNzIE1IQ2hhcnQge1xuICAgIGNvbnN0cnVjdG9yKCRmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcbiAgICAgICAgICAgICdjaGFydGRhdGEnIDogJz0nLFxuICAgICAgICAgICAgJ2tpbmQnOiAnQCdcbiAgICAgICAgfTtcbiAgICAgICAgRklMVEVSLnNldCh0aGlzLCAkZmlsdGVyKTtcbiAgICB9XG5cbiAgICBsaW5rIChzY29wZSwgZWxlbWVudCkge1xuICAgICAgICBjb25zdCBudW1iZXJGaWx0ZXIgPSBGSUxURVIuZ2V0KE1IQ2hhcnQuaW5zdGFuY2UpKCdudW1iZXInKTtcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNjYWxlU2hvd0dyaWRMaW5lcyA6IHRydWUsXG4gICAgICAgICAgICBzY2FsZUdyaWRMaW5lQ29sb3IgOiAncmdiYSgwLDAsMCwuMDUpJyxcbiAgICAgICAgICAgIHNjYWxlR3JpZExpbmVXaWR0aCA6IDEsXG4gICAgICAgICAgICBzY2FsZVNob3dIb3Jpem9udGFsTGluZXM6IHRydWUsXG4gICAgICAgICAgICBzY2FsZVNob3dWZXJ0aWNhbExpbmVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IGZ1bmN0aW9uICh2YWx1ZVBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyRmlsdGVyKHZhbHVlUGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmV6aWVyQ3VydmUgOiB0cnVlLFxuICAgICAgICAgICAgYmV6aWVyQ3VydmVUZW5zaW9uIDogMC40LFxuICAgICAgICAgICAgcG9pbnREb3QgOiBmYWxzZSxcbiAgICAgICAgICAgIHBvaW50RG90UmFkaXVzIDogMyxcbiAgICAgICAgICAgIHBvaW50RG90U3Ryb2tlV2lkdGggOiAxLFxuICAgICAgICAgICAgcG9pbnRIaXREZXRlY3Rpb25SYWRpdXMgOiAyMCxcbiAgICAgICAgICAgIGRhdGFzZXRTdHJva2UgOiB0cnVlLFxuICAgICAgICAgICAgZGF0YXNldFN0cm9rZVdpZHRoIDogMixcbiAgICAgICAgICAgIGRhdGFzZXRGaWxsIDogdHJ1ZSxcbiAgICAgICAgICAgIGxlZ2VuZFRlbXBsYXRlIDogJzx1bCBjbGFzcz1cIjwlPW5hbWUudG9Mb3dlckNhc2UoKSU+LWxlZ2VuZFwiPjwlIGZvciAodmFyIGk9MDsgaTxkYXRhc2V0cy5sZW5ndGg7IGkrKyl7JT48bGk+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOjwlPWRhdGFzZXRzW2ldLnN0cm9rZUNvbG9yJT5cIj48L3NwYW4+PCVpZihkYXRhc2V0c1tpXS5sYWJlbCl7JT48JT1kYXRhc2V0c1tpXS5sYWJlbCU+PCV9JT48L2xpPjwlfSU+PC91bD4nLFxuICAgICAgICAgICAgdG9vbHRpcEZvbnRDb2xvcjogJyM3YzdjODEnLFxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgICAgICBhbmltYXRpb25FYXNpbmc6ICdlYXNlT3V0UXVpbnQnLFxuICAgICAgICAgICAgY3VzdG9tVG9vbHRpcHM6ICBmdW5jdGlvbiBjdXN0b21Ub29sdGlwcyh0b29sdGlwKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgJHRvb2x0aXAgPSAkKCcjY2hhcnQtY3VzdG9tdG9vbHRpcCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkdG9vbHRpcFswXSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwiY2hhcnQtY3VzdG9tdG9vbHRpcFwiIGNsYXNzPVwiY2hhcnQtY3VzdG9tdG9vbHRpcFwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAkdG9vbHRpcCA9ICQoJyNjaGFydGpzLWN1c3RvbXRvb2x0aXAnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgJHRvb2x0aXAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkdG9vbHRpcC5yZW1vdmVDbGFzcygnYWJvdmUgYmVsb3cgbm8tdHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRvb2x0aXAueUFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgICR0b29sdGlwLmFkZENsYXNzKHRvb2x0aXAueUFsaWduKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkdG9vbHRpcC5hZGRDbGFzcygnbm8tdHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRvb2x0aXAudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAkdG9vbHRpcC5odG1sKHRvb2x0aXAudGV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlubmVySHRtbCA9IGA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rvb2x0aXAudGl0bGV9PC9kaXY+YDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b29sdGlwLmxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIdG1sICs9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNlY3Rpb25cIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgICA8c3BhbiBjbGFzcz1cImtleVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoke3Rvb2x0aXAubGVnZW5kQ29sb3JzW2ldLmZpbGx9XCI+PC9zcGFuPmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4kJHtudW1iZXJGaWx0ZXIodG9vbHRpcC5sYWJlbHNbaV0pfTwvc3Bhbj5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR0b29sdGlwLmh0bWwoaW5uZXJIdG1sKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgdG9wID0gMDtcbiAgICAgICAgICAgICAgICBpZiAodG9vbHRpcC55QWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXAueUFsaWduID09PSAnYWJvdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSB0b29sdGlwLnkgLSB0b29sdGlwLmNhcmV0SGVpZ2h0IC0gdG9vbHRpcC5jYXJldFBhZGRpbmc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSB0b29sdGlwLnkgKyB0b29sdGlwLmNhcmV0SGVpZ2h0ICsgdG9vbHRpcC5jYXJldFBhZGRpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJCh0b29sdGlwLmNoYXJ0LmNhbnZhcykub2Zmc2V0KCk7XG5cbiAgICAgICAgICAgICAgICAkdG9vbHRpcC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdG9vbHRpcC53aWR0aCA/IHRvb2x0aXAud2lkdGggKyAncHgnIDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCArIHRvb2x0aXAueCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogb2Zmc2V0LnRvcCArIHRvcCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRvb2x0aXAuZm9udEZhbWlseSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHRvb2x0aXAuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogdG9vbHRpcC5mb250U3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsIDI1NSwgMjU1KScsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgLjgpJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjdHggPSBlbGVtZW50LmdldCgwKS5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHNjb3BlLiR3YXRjaCgnY2hhcnRkYXRhJywgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG5cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiAhb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUua2luZCA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gODA7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmluY29tZUV4cGVuc2VzQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4KS5MaW5lKHNjb3BlLmNoYXJ0ZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWdlbmQgPSBzY29wZS5pbmNvbWVFeHBlbnNlc0NoYXJ0LmdlbmVyYXRlTGVnZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWdlbmRJbmNvbWVFeHBlbnNlcycpLmlubmVySFRNTCA9IGxlZ2VuZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUua2luZCA9PT0gJ2JhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSA4MDtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGF0aWVudHNDaGFydCA9IG5ldyBDaGFydChjdHgpLkJhcihzY29wZS5jaGFydGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICYmIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmtpbmQgPT09ICdsaW5lJykge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5jaGFydGRhdGEuZGF0YXNldHNbMF0uZGF0YS5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuaW5jb21lRXhwZW5zZXNDaGFydC5kYXRhc2V0c1swXS5wb2ludHNbaW5kZXhdLnZhbHVlID0gZWxlbTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY2hhcnRkYXRhLmRhdGFzZXRzWzFdLmRhdGEuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmluY29tZUV4cGVuc2VzQ2hhcnQuZGF0YXNldHNbMV0ucG9pbnRzW2luZGV4XS52YWx1ZSA9IGVsZW07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmluY29tZUV4cGVuc2VzQ2hhcnQudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmtpbmQgPT09ICdiYXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNoYXJ0ZGF0YS5kYXRhc2V0c1swXS5kYXRhLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wYXRpZW50c0NoYXJ0LmRhdGFzZXRzWzBdLmJhcnNbaW5kZXhdLnZhbHVlID0gZWxlbTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhdGllbnRzQ2hhcnQudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBDaGFydC5kZWZhdWx0cy5nbG9iYWwucmVzcG9uc2l2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpcmVjdGl2ZUZhY3RvcnkoJGZpbHRlcikge1xuICAgICAgICBNSENoYXJ0Lmluc3RhbmNlID0gbmV3IE1IQ2hhcnQoJGZpbHRlcik7XG4gICAgICAgIHJldHVybiBNSENoYXJ0Lmluc3RhbmNlO1xuICAgIH1cbn1cblxuTUhDaGFydC5kaXJlY3RpdmVGYWN0b3J5LiRpbmplY3QgPSBbJyRmaWx0ZXInXTtcblxuZXhwb3J0IGRlZmF1bHQgTUhDaGFydC5kaXJlY3RpdmVGYWN0b3J5OyIsIu+7v2Z1bmN0aW9uIERhc2hib2FyZFNlcnZpY2UoJGh0dHApIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRTdW1tYXJ5LFxuICAgICAgICBnZXRFeHBlbnNlcyxcbiAgICAgICAgZ2V0UGF0aWVudHNcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0U3VtbWFyeSgpIHtcbiAgICAgICAgbGV0IGhhbmRsZVN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHZhciBzdW1tYXJ5ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBzdW1tYXJ5O1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0ZW5hbnRJZCA9ICcnO1xuXG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3JlcG9ydHMvY2xpbmljc3VtbWFyeSc7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGhhbmRsZVN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFeHBlbnNlcyh5ZWFyKSB7XG4gICAgICAgIGxldCBoYW5kbGVTdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgZXhwZW5zZXMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2VzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0ZW5hbnRJZCA9ICcnO1xuXG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3JlcG9ydHMvZXhwZW5zZXMvJyArIHllYXI7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGhhbmRsZVN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYXRpZW50cyh5ZWFyKSB7XG4gICAgICAgIGxldCBoYW5kbGVTdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgcGF0aWVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGllbnRzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0ZW5hbnRJZCA9ICcnO1xuXG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3JlcG9ydHMvcGF0aWVudHMvJyArIHllYXI7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGhhbmRsZVN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFNlcnZpY2U7Iiwi77u/Y2xhc3MgRG9jdG9yRGV0YWlsQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSwgZG9jdG9yc1NlcnZpY2UsIHRvYXN0ZXJTZXJ2aWNlLCBtb2RhbFNlcnZpY2UpIHtcblxuICAgICAgICB2YXIgZG9jdG9ySWQgPSAkc3RhdGVQYXJhbXMuaWQ7XG4gICAgICAgICRzY29wZS5lZGl0TW9kZSA9IGRvY3RvcklkICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciB0ZW5hbnRJZDtcblxuICAgICAgICAkc2NvcGUuZG9jdG9yID0ge1xuICAgICAgICAgICAgQ3JlYXRlZEF0OiBuZXcgRGF0ZSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCRzY29wZS5lZGl0TW9kZSkge1xuICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3RvcnNTZXJ2aWNlLmdldERvY3Rvcihkb2N0b3JJZClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRvY3RvciA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kb2N0b3IucGljdHVyZSA9IGBkYXRhOmltYWdlL3BuZztiYXNlNjQsJHskc2NvcGUuZG9jdG9yLnBpY3R1cmV9YDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdG9yc1NlcnZpY2UuZ2V0VGVuYW50KClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW5hbnRJZCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICRzdGF0ZS50cmFuc2l0aW9uVG8oJ2RvY3RvcnMnKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUubmFnaXZhdGVUb1BhdGllbnRMaXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgJHN0YXRlLnRyYW5zaXRpb25UbygncGF0aWVudHMnKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUucmVtb3ZlRG9jdG9yID0gKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWxTZXJ2aWNlLnNob3dDb25maXJtTW9kYWwoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVtb3ZlIGRvY3RvcicsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoZSBkb2N0b3I/JyxcbiAgICAgICAgICAgICAgICAgICAgb2s6ICdZZXMsIHJlbW92ZScsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgZG9jdG9yc1NlcnZpY2UucmVtb3ZlKGRvY3RvcklkKVxuICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZS50cmFuc2l0aW9uVG8oJ2RvY3RvcnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLmRvY3Rvci5waWN0dXJlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmRvY3Rvci5waWN0dXJlID0gJHNjb3BlLmRvY3Rvci5waWN0dXJlLnNwbGl0KCcsJylbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghJHNjb3BlLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmRvY3Rvci50ZW5hbnRJZCA9IHRlbmFudElkO1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZG9jdG9yc1NlcnZpY2UuYWRkKCRzY29wZS5kb2N0b3IpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZG9jdG9yc1NlcnZpY2UudXBkYXRlKCRzY29wZS5kb2N0b3IpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JEZXRhaWxDb250cm9sbGVyOyIsIu+7v2NsYXNzIERvY3RvcnNDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgZG9jdG9yc1NlcnZpY2UsIHRvYXN0ZXJTZXJ2aWNlLCBtb2RhbFNlcnZpY2UpIHtcbiAgICAgICAgY29uc3QgcGFnZVNpemUgPSA0O1xuICAgICAgICB2YXIgcGFnZUNvdW50ID0gMDtcbiAgICAgICAgJHNjb3BlLmRvY3RvcnMgPSBbXTtcblxuICAgICAgICAkc2NvcGUuZ2V0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBkb2N0b3JzU2VydmljZS5nZXRMaXN0KHBhZ2VTaXplLCBwYWdlQ291bnQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRvY3RvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3RvcnMubGVuZ3RoIDwgcGFnZVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ub01vcmVEYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkb2N0b3JzLmZvckVhY2goKGRvY3RvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRvY3RvcnMucHVzaChkb2N0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVmcmVzaFNlbGVjdGVkSXRlbXMoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kb2N0b3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5vRGF0YSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLm5hZ2l2YXRlVG9EZXRhaWwgPSAoZG9jdG9ySWQpID0+IHtcbiAgICAgICAgICAgIGRvY3RvcklkID8gJHN0YXRlLnRyYW5zaXRpb25UbygnZG9jdG9yJywgeyBpZDogZG9jdG9ySWQgfSkgOiAkc3RhdGUudHJhbnNpdGlvblRvKCdkb2N0b3InKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUucmVmcmVzaFNlbGVjdGVkSXRlbXMgPSAoYWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWxsKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmRvY3RvcnMuZm9yRWFjaCgoZG9jdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3Rvci5zZWxlY3RlZCA9ICRzY29wZS5ldmVyeVNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUuYW55U2VsZWN0ZWQgPSAkc2NvcGUuZG9jdG9ycy5zb21lKChkb2N0b3IpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdG9yLnNlbGVjdGVkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRzY29wZS5ldmVyeVNlbGVjdGVkID0gJHNjb3BlLmRvY3RvcnMuZXZlcnkoKGRvY3RvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N0b3Iuc2VsZWN0ZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUucmVtb3ZlID0gKGRvY3RvcikgPT4ge1xuICAgICAgICAgICAgdmFyIHNldmVyYWxEb2N0b3JzID0gZG9jdG9yID09PSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIG1vZGFsU2VydmljZS5zaG93Q29uZmlybU1vZGFsKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogYFJlbW92ZSBkb2N0b3Ike3NldmVyYWxEb2N0b3JzPydzJzonJ31gLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgc2VsZWN0ZWQgZG9jdG9yJHtzZXZlcmFsRG9jdG9ycz8ncyc6Jyd9P2AsXG4gICAgICAgICAgICAgICAgICAgIG9rOiAnWWVzLCByZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgZG9jdG9ySWRMaXN0O1xuICAgICAgICAgICAgICAgIGlmIChkb2N0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdG9ySWRMaXN0ID0gW2RvY3Rvci5kb2N0b3JJZF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdG9ySWRMaXN0ID0gJHNjb3BlLmRvY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGRvY3Rvckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdG9ySXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdG9ySXRlbS5kb2N0b3JJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb2N0b3JJZExpc3QuZm9yRWFjaCgoZG9jdG9ySWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdG9yc1NlcnZpY2UucmVtb3ZlKGRvY3RvcklkKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kb2N0b3JzLmZvckVhY2goKGRvY3Rvckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdG9ySWQgPT09IGRvY3Rvckl0ZW0uZG9jdG9ySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gJHNjb3BlLmRvY3RvcnMuaW5kZXhPZihkb2N0b3JJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRvY3RvcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuZ2V0TGlzdCgpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JzQ29udHJvbGxlcjsiLCLvu79jbGFzcyBGaWxlQmFzZTY0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcbiAgICAgICAgICAgICdiNjQnIDogJz0nXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbGluayAoc2NvcGUsIGVsZW1lbnQpIHtcblxuICAgICAgICBlbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZmlsZSA9IGVsZW1lbnQuZ2V0KDApLmZpbGVzWzBdO1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5iNjQgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuYjY0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXJlY3RpdmVGYWN0b3J5KCkge1xuICAgICAgICBGaWxlQmFzZTY0Lmluc3RhbmNlID0gbmV3IEZpbGVCYXNlNjQoKTtcbiAgICAgICAgcmV0dXJuIEZpbGVCYXNlNjQuaW5zdGFuY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlQmFzZTY0LmRpcmVjdGl2ZUZhY3Rvcnk7Iiwi77u/dmFyIG1vZHVsZU5hbWUgPSAnbXlIZWFsdGguZG9jdG9ycyc7XG5cbmltcG9ydCBEb2N0b3JzQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2RvY3RvcnNDb250cm9sbGVyJztcbmltcG9ydCBEb2N0b3JEZXRhaWxDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZG9jdG9yRGV0YWlsQ29udHJvbGxlcic7XG5pbXBvcnQgRG9jdG9yc1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9kb2N0b3JzU2VydmljZSc7XG5pbXBvcnQgRmlsZUJhc2U2NCBmcm9tICcuL2RpcmVjdGl2ZXMvZmlsZURpcmVjdGl2ZSc7XG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKS5cbiAgICBjb250cm9sbGVyKCdkb2N0b3JzQ29udHJvbGxlcicsIERvY3RvcnNDb250cm9sbGVyKS5cbiAgICBjb250cm9sbGVyKCdkb2N0b3JEZXRhaWxDb250cm9sbGVyJywgRG9jdG9yRGV0YWlsQ29udHJvbGxlcikuXG4gICAgc2VydmljZSgnZG9jdG9yc1NlcnZpY2UnLCBEb2N0b3JzU2VydmljZSkuXG4gICAgZGlyZWN0aXZlKCdmaWxlQmFzZTY0JywgRmlsZUJhc2U2NCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7Iiwi77u/ZnVuY3Rpb24gRG9jdG9yc1NlcnZpY2UoJGh0dHApIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgZG9jdG9ycztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRlbmFudCxcbiAgICAgICAgZ2V0RG9jdG9yLFxuICAgICAgICBnZXRMaXN0LFxuICAgICAgICBhZGQsXG4gICAgICAgIHVwZGF0ZSxcbiAgICAgICAgcmVtb3ZlXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFRlbmFudCgpIHtcbiAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICB1cmw6ICcvYXBpL3VzZXJzL2N1cnJlbnQvdGVuYW50J1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREb2N0b3IoZG9jdG9ySWQpIHtcbiAgICAgICAgcmV0dXJuIGdldFRlbmFudCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgbGV0IHVybCA9IGAvYXBpL2RvY3RvcnMvJHtkb2N0b3JJZH1gO1xuICAgICAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgVGVuYW50SWQ6IHRlbmFudElkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExpc3QocGFnZVNpemUsIHBhZ2VDb3VudCkge1xuICAgICAgICBsZXQgaGFuZGxlU3VjY2VzcyA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZG9jdG9ycyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZG9jdG9ycztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZ2V0VGVuYW50KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHZhciB0ZW5hbnRJZCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvZG9jdG9ycyc7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50OnBhZ2VDb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGhhbmRsZVN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGQoZG9jdG9yKSB7XG4gICAgICAgIHJldHVybiBnZXRUZW5hbnQoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL2RvY3RvcnMvJztcbiAgICAgICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgZGF0YTogZG9jdG9yLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgVGVuYW50SWQ6IHRlbmFudElkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShkb2N0b3IpIHtcbiAgICAgICAgcmV0dXJuIGdldFRlbmFudCgpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciB0ZW5hbnRJZCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvZG9jdG9ycy8nO1xuICAgICAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRvY3RvcixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFRlbmFudElkOiB0ZW5hbnRJZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoZG9jdG9ySWQpIHtcbiAgICAgICAgcmV0dXJuIGdldFRlbmFudCgpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciB0ZW5hbnRJZCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvZG9jdG9ycy8nICsgZG9jdG9ySWQ7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JzU2VydmljZTsiLCLvu79jbGFzcyBQYXRpZW50c0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHJvb3RTY29wZSwgcGF0aWVudHNTZXJ2aWNlLCB0b2FzdGVyU2VydmljZSwgbW9kYWxTZXJ2aWNlKSB7XG5cbiAgICAgICAgY29uc3QgcGFnZVNpemUgPSA0O1xuICAgICAgICB2YXIgcGFnZUNvdW50ID0gMDtcblxuICAgICAgICAkc2NvcGUucGF0aWVudHMgPSBbXTtcblxuICAgICAgICAkc2NvcGUuZ2V0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBwYXRpZW50c1NlcnZpY2UuZ2V0TGlzdChwYWdlU2l6ZSwgcGFnZUNvdW50KVxuICAgICAgICAgICAgICAgIC50aGVuKChwYXRpZW50cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aWVudHMubGVuZ3RoIDwgcGFnZVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ub01vcmVEYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50cy5mb3JFYWNoKChwYXRpZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGF0aWVudHMucHVzaChwYXRpZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUucGF0aWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubm9EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUucmVmcmVzaFNlbGVjdGVkSXRlbXMgPSAoYWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWxsKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBhdGllbnRzLmZvckVhY2goKHBhdGllbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5zZWxlY3RlZCA9ICRzY29wZS5ldmVyeVNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUuYW55U2VsZWN0ZWQgPSAkc2NvcGUucGF0aWVudHMuc29tZSgocGF0aWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRpZW50LnNlbGVjdGVkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRzY29wZS5ldmVyeVNlbGVjdGVkID0gJHNjb3BlLnBhdGllbnRzLmV2ZXJ5KChwYXRpZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGllbnQuc2VsZWN0ZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUucmVtb3ZlID0gKHBhdGllbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBzZXZlcmFsUGF0aWVudHMgPSBwYXRpZW50ID09PSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIG1vZGFsU2VydmljZS5zaG93Q29uZmlybU1vZGFsKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogYFJlbW92ZSBwYXRpZW50JHtzZXZlcmFsUGF0aWVudHM/J3MnOicnfWAsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoZSBzZWxlY3RlZCBwYXRpZW50JHtzZXZlcmFsUGF0aWVudHM/J3MnOicnfT9gLFxuICAgICAgICAgICAgICAgICAgICBvazogJ1llcywgcmVtb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGllbnRJZExpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGllbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudElkTGlzdCA9IFtwYXRpZW50LnBhdGllbnRJZF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudElkTGlzdCA9ICRzY29wZS5wYXRpZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocGF0aWVudEl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aWVudEl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGllbnRJdGVtLnBhdGllbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXRpZW50SWRMaXN0LmZvckVhY2goKHBhdGllbnRJZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwYXRpZW50c1NlcnZpY2UucmVtb3ZlKHBhdGllbnRJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGF0aWVudHMuZm9yRWFjaCgocGF0aWVudEl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXRpZW50SWQgPT09IHBhdGllbnRJdGVtLnBhdGllbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICRzY29wZS5wYXRpZW50cy5pbmRleE9mKHBhdGllbnRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGF0aWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUucmVmcmVzaFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5nZXRMaXN0KCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhdGllbnRzQ29udHJvbGxlcjsiLCLvu792YXIgbW9kdWxlTmFtZSA9ICdteUhlYWx0aC5wYXRpZW50cyc7XG5cbmltcG9ydCBQYXRpZW50c0NvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9wYXRpZW50c0NvbnRyb2xsZXInO1xuaW1wb3J0IFBhdGllbnRzU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL3BhdGllbnRzU2VydmljZSc7XG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKS5cbiAgICBjb250cm9sbGVyKCdwYXRpZW50c0NvbnRyb2xsZXInLCBQYXRpZW50c0NvbnRyb2xsZXIpLlxuICAgIHNlcnZpY2UoJ3BhdGllbnRzU2VydmljZScsIFBhdGllbnRzU2VydmljZSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7Iiwi77u/ZnVuY3Rpb24gUGF0aWVudHNTZXJ2aWNlKCRodHRwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHBhdGllbnRzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TGlzdCxcbiAgICAgICAgcmVtb3ZlXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFRlbmFudCgpIHtcbiAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICB1cmw6ICcvYXBpL3VzZXJzL2N1cnJlbnQvdGVuYW50J1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaXN0KHBhZ2VTaXplLCBwYWdlQ291bnQpIHtcbiAgICAgICAgbGV0IGhhbmRsZVN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHBhdGllbnRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBwYXRpZW50cztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZ2V0VGVuYW50KCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIHRlbmFudElkID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHZhciB1cmwgPSAnL2FwaS9wYXRpZW50cyc7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50OnBhZ2VDb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGhhbmRsZVN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUocGF0aWVudElkKSB7XG4gICAgICAgIHJldHVybiBnZXRUZW5hbnQoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgbGV0IHVybCA9IGAvYXBpL3BhdGllbnRzLyR7cGF0aWVudElkfWA7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXRpZW50c1NlcnZpY2U7Iiwi77u/Y29uc3QgU1RBVEUgPSBuZXcgV2Vha01hcCgpO1xuXG5jbGFzcyBIZWFkZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGUsICRyb290U2NvcGUsICRodHRwLCAkdGltZW91dCkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICBTVEFURS5zZXQodGhpcywgJHN0YXRlKTtcblxuICAgICAgICB2YXIgc3RhdGVDaGFuZ2VDYWxsZWQgPSBmYWxzZTtcblxuICAgICAgICAkdGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZihzdGF0ZUNoYW5nZUNhbGxlZCl7cmV0dXJuO31cbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSAkc3RhdGUuY3VycmVudC5uYW1lICE9PSAnZGVmYXVsdCcgPyAkc3RhdGUuY3VycmVudC5uYW1lIDogJyc7XG4gICAgICAgICAgICB2bS52aWV3TmFtZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWU7XG4gICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JyxcbiAgICAgICAgICAgIChlLCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGVDaGFuZ2VDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0b1N0YXRlLm5hbWUgIT09ICdkZWZhdWx0JyA/IHRvU3RhdGUubmFtZSA6ICcnO1xuICAgICAgICAgICAgICAgIHZtLnZpZXdOYW1lID0gdG9TdGF0ZS5uYW1lO1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICB1cmw6ICcvYXBpL3VzZXJzL2N1cnJlbnQvdXNlcidcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHZtLnVzZXJOYW1lID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHVybDogJy9hcGkvdXNlcnMvY3VycmVudC9jbGFpbXMnXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB2bS5jYW5NYW5hZ2VVc2VycyA9IHJlc3BvbnNlLmRhdGEuTWFuYWdlVXNlcnMgfHwgZmFsc2U7XG4gICAgICAgICAgICB2bS5jYW5NYW5hZ2VUZW5hbnRzID0gcmVzcG9uc2UuZGF0YS5NYW5hZ2VUZW5hbnRzIHx8IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkhlYWRlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJywgJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnJHRpbWVvdXQnXTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbnRyb2xsZXI7Iiwi77u/Y2xhc3MgSGVhZGVyQmFyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdFJztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9ICcvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2RpcmVjdGl2ZXMvaGVhZGVyQmFyL2hlYWRlckJhclRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSAnaGVhZGVyQ29udHJvbGxlcic7XG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ3ZtJztcbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNjb3BlLm1lbnVPcGVuKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5oZWFkZXItaGFtYnVyZ3VlciwgI3NpZGViYXItY29udGFpbmVyJykuYmluZCgnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlyZWN0aXZlRmFjdG9yeSgpIHtcbiAgICAgICAgSGVhZGVyQmFyLmluc3RhbmNlID0gbmV3IEhlYWRlckJhcigpO1xuICAgICAgICByZXR1cm4gSGVhZGVyQmFyLmluc3RhbmNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQmFyLmRpcmVjdGl2ZUZhY3Rvcnk7Iiwi77u/Y2xhc3MgTGVmdE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlVXJsID0gJy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZGlyZWN0aXZlcy9sZWZ0TWVudS9sZWZ0TWVudVRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSAnaGVhZGVyQ29udHJvbGxlcic7XG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ3ZtJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlyZWN0aXZlRmFjdG9yeSgpIHtcbiAgICAgICAgTGVmdE1lbnUuaW5zdGFuY2UgPSBuZXcgTGVmdE1lbnUoKTtcbiAgICAgICAgcmV0dXJuIExlZnRNZW51Lmluc3RhbmNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdE1lbnUuZGlyZWN0aXZlRmFjdG9yeTsiLCLvu79mdW5jdGlvbiBDYW1lbENhc2VGaWx0ZXIoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGlzdCA9IGlucHV0Lm1hdGNoKC9bQS1aYS16XVthLXpdKi9nKTtcblxuICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gbGlzdC5qb2luKCcgJyk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIHJlc3VsdC5zdWJzdHIoMSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtZWxDYXNlRmlsdGVyOyIsIu+7v2Z1bmN0aW9uIEV4Y2VwdGlvbkhhbmRsZXIoJGluamVjdG9yKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGhhbmRsZWRFeGNlcHRpb25zID0gW107XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICAgIGlmIChoYW5kbGVkRXhjZXB0aW9ucy5pbmRleE9mKGV4Y2VwdGlvbikgPT09IC0xKSB7XG4gICAgICAgICAgICBhcHBJbnNpZ2h0cy50cmFja0V4Y2VwdGlvbihleGNlcHRpb24pO1xuICAgICAgICAgICAgJGluamVjdG9yLmdldCgndG9hc3RlclNlcnZpY2UnKS5zaG93U2VydmVyRXJyb3IoKTtcbiAgICAgICAgICAgIGhhbmRsZWRFeGNlcHRpb25zLnB1c2goZXhjZXB0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5oYW5kbGVkIEV4Y2VwdGlvbicsIGV4Y2VwdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb25IYW5kbGVyOyIsIu+7v2Z1bmN0aW9uIEluaXRpYWxQYWdlKCRodHRwLCAkcSkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluaXRpYWxTdGF0ZVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiAkcShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L2NsYWltcydcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5NYW5hZ2VVc2Vycykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCd1c2VycycpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlLmRhdGEuTWFuYWdlVGVuYW50cykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdjbGluaWNzJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ2Rhc2hib2FyZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluaXRpYWxQYWdlOyIsIu+7v2Z1bmN0aW9uIE1vZGFsU2VydmljZSgkbW9kYWwpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93Q29uZmlybU1vZGFsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNob3dDb25maXJtTW9kYWwob3B0cykge1xuICAgICAgICByZXR1cm4gJG1vZGFsLm9wZW4oe1xuXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy9zaGFyZWQvdmlld3MvY29uZmlybU1vZGFsLmh0bWwnLFxuXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsICckbW9kYWxJbnN0YW5jZScsIGZ1bmN0aW9uICgkc2NvcGUsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZXMgPSBvcHRzLm1lc3NhZ2VzO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLm9rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfV1cblxuICAgICAgICB9KS5yZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFNlcnZpY2U7Iiwi77u/ZnVuY3Rpb24gVG9hc3RlclNlcnZpY2UodG9hc3Rlcikge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dTZXJ2ZXJFcnJvclxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzaG93U2VydmVyRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgdG9hc3Rlci5wb3AoJ2Vycm9yJywgJ0Vycm9yJywgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgJiYgZXJyb3IpID8gZXJyb3IgOiAnT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdGVyU2VydmljZTsiLCLvu792YXIgbW9kdWxlTmFtZSA9ICdteUhlYWx0aC5zaGFyZWQnO1xuXG5pbXBvcnQgTGVmdE1lbnVEaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmVzL2xlZnRNZW51L2xlZnRNZW51RGlyZWN0aXZlJztcbmltcG9ydCBIZWFkZXJCYXJEaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmVzL2hlYWRlckJhci9oZWFkZXJCYXJEaXJlY3RpdmUnO1xuaW1wb3J0IEhlYWRlckNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9oZWFkZXJDb250cm9sbGVyJztcbmltcG9ydCBUb2FzdGVyU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL3RvYXN0ZXJTZXJ2aWNlJztcbmltcG9ydCBNb2RhbFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9tb2RhbFNlcnZpY2UnO1xuaW1wb3J0IEluaXRpYWxQYWdlU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2luaXRpYWxQYWdlU2VydmljZSc7XG5pbXBvcnQgRXhjZXB0aW9uSGFuZGxlciBmcm9tICcuL3NlcnZpY2VzL2V4Y2VwdGlvbkhhbmRsZXInO1xuaW1wb3J0IENhbWVsQ2FzZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvY2FtZWxDYXNlRmlsdGVyJztcblxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgWyd1aS5ib290c3RyYXAnLCAndG9hc3RlciddKS5cbiAgICBkaXJlY3RpdmUoJ2xlZnRNZW51JywgTGVmdE1lbnVEaXJlY3RpdmUpLlxuICAgIGRpcmVjdGl2ZSgnaGVhZGVyQmFyJywgSGVhZGVyQmFyRGlyZWN0aXZlKS5cbiAgICBjb250cm9sbGVyKCdoZWFkZXJDb250cm9sbGVyJywgSGVhZGVyQ29udHJvbGxlcikuXG4gICAgc2VydmljZSgndG9hc3RlclNlcnZpY2UnLCBUb2FzdGVyU2VydmljZSkuXG4gICAgc2VydmljZSgnbW9kYWxTZXJ2aWNlJywgTW9kYWxTZXJ2aWNlKS5cbiAgICBzZXJ2aWNlKCdpbml0aWFsUGFnZVNlcnZpY2UnLCBJbml0aWFsUGFnZVNlcnZpY2UpLlxuICAgIGZhY3RvcnkoJyRleGNlcHRpb25IYW5kbGVyJywgRXhjZXB0aW9uSGFuZGxlcikuXG4gICAgZmlsdGVyKCdjYW1lbENhc2UnLCBDYW1lbENhc2VGaWx0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVOYW1lOyIsIu+7v2NsYXNzIFVzZXJEZXRhaWxDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcywgJHN0YXRlLCB1c2Vyc1NlcnZpY2UsIHRvYXN0ZXJTZXJ2aWNlLCBtb2RhbFNlcnZpY2UpIHtcblxuICAgICAgICB2YXIgdXNlcm5hbWUgPSAkc3RhdGVQYXJhbXMudXNlcm5hbWU7XG4gICAgICAgICRzY29wZS5lZGl0TW9kZSA9IHVzZXJuYW1lICE9PSB1bmRlZmluZWQ7XG5cbiAgICAgICAgJHNjb3BlLnVzZXIgPSB7fTtcblxuICAgICAgICBpZiAoJHNjb3BlLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdXNlcnNTZXJ2aWNlLmdldFVzZXIodXNlcm5hbWUpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnVzZXIuUGljdHVyZSA9IGBkYXRhOmltYWdlL3BuZztiYXNlNjQsJHskc2NvcGUudXNlci5QaWN0dXJlfWA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICRzdGF0ZS50cmFuc2l0aW9uVG8oJ3VzZXJzJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnJlbW92ZVVzZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbFNlcnZpY2Uuc2hvd0NvbmZpcm1Nb2RhbCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZW1vdmUgdXNlcicsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoZSB1c2VyPycsXG4gICAgICAgICAgICAgICAgICAgIG9rOiAnWWVzLCByZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgIHVzZXJzU2VydmljZS5yZW1vdmUodXNlcm5hbWUpXG4gICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCAmJiByZXNwb25zZS5kYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgJHN0YXRlLnRyYW5zaXRpb25UbygndXNlcnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUudXNlci5QaWN0dXJlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnVzZXIuUGljdHVyZSA9ICRzY29wZS51c2VyLlBpY3R1cmUuc3BsaXQoJywnKVsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEkc2NvcGUuZWRpdE1vZGUpIHtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHVzZXJzU2VydmljZS5hZGQoJHNjb3BlLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLmRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHVzZXJzU2VydmljZS51cGRhdGUoJHNjb3BlLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLmRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckRldGFpbENvbnRyb2xsZXI7Iiwi77u/Y2xhc3MgVXNlcnNDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgdXNlcnNTZXJ2aWNlLCB0b2FzdGVyU2VydmljZSwgbW9kYWxTZXJ2aWNlKSB7XG5cbiAgICAgICAgY29uc3QgcGFnZVNpemUgPSA0O1xuICAgICAgICB2YXIgcGFnZUNvdW50ID0gMDtcblxuICAgICAgICAkc2NvcGUudXNlcnMgPSBbXTtcblxuICAgICAgICAkc2NvcGUuZ2V0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB1c2Vyc1NlcnZpY2UuZ2V0TGlzdChwYWdlU2l6ZSwgcGFnZUNvdW50KVxuICAgICAgICAgICAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcnMubGVuZ3RoIDwgcGFnZVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ub01vcmVEYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXNlcnMucHVzaCh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUudXNlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubm9EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUubmFnaXZhdGVUb0RldGFpbCA9ICh1c2VybmFtZSkgPT4ge1xuICAgICAgICAgICAgdXNlcm5hbWUgPyAkc3RhdGUudHJhbnNpdGlvblRvKCd1c2VyJywgeyB1c2VybmFtZTogdXNlcm5hbWUgfSkgOiAkc3RhdGUudHJhbnNpdGlvblRvKCd1c2VyJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zID0gKGFsbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFsbCkge1xuICAgICAgICAgICAgICAgICRzY29wZS51c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc2VsZWN0ZWQgPSAkc2NvcGUuZXZlcnlTZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLmFueVNlbGVjdGVkID0gJHNjb3BlLnVzZXJzLnNvbWUoKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5zZWxlY3RlZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkc2NvcGUuZXZlcnlTZWxlY3RlZCA9ICRzY29wZS51c2Vycy5ldmVyeSgodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLnNlbGVjdGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnJlbW92ZSA9ICh1c2VyKSA9PiB7XG4gICAgICAgICAgICB2YXIgc2V2ZXJhbFVzZXJzID0gdXNlciA9PT0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBtb2RhbFNlcnZpY2Uuc2hvd0NvbmZpcm1Nb2RhbCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBSZW1vdmUgdXNlciR7c2V2ZXJhbFVzZXJzPydzJzonJ31gLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgc2VsZWN0ZWQgdXNlciR7c2V2ZXJhbFVzZXJzPydzJzonJ30/YCxcbiAgICAgICAgICAgICAgICAgICAgb2s6ICdZZXMsIHJlbW92ZScsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB1c2VybmFtZUxpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWVMaXN0ID0gW3VzZXIuVXNlck5hbWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lTGlzdCA9ICRzY29wZS51c2Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodXNlckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlckl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJJdGVtLlVzZXJOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVzZXJuYW1lTGlzdC5mb3JFYWNoKCh1c2VybmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1c2Vyc1NlcnZpY2UucmVtb3ZlKHVzZXJuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS51c2Vycy5mb3JFYWNoKCh1c2VySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJuYW1lID09PSB1c2VySXRlbS5Vc2VyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICRzY29wZS51c2Vycy5pbmRleE9mKHVzZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXNlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUucmVmcmVzaFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5nZXRMaXN0KCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzQ29udHJvbGxlcjsiLCLvu79mdW5jdGlvbiBVc2Vyc1NlcnZpY2UoJGh0dHApIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgdXNlcnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRVc2VyLFxuICAgICAgICBnZXRMaXN0LFxuICAgICAgICBhZGQsXG4gICAgICAgIHVwZGF0ZSxcbiAgICAgICAgcmVtb3ZlXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFRlbmFudCgpIHtcbiAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICB1cmw6ICcvYXBpL3VzZXJzL2N1cnJlbnQvdGVuYW50J1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRVc2VyKHVzZXJuYW1lKSB7XG4gICAgICAgIGxldCB1cmwgPSBgL2FwaS91c2Vycy8ke3VzZXJuYW1lfWA7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TGlzdChwYWdlU2l6ZSwgcGFnZUNvdW50KSB7XG4gICAgICAgIGxldCBoYW5kbGVTdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB1c2VycyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGdldFRlbmFudCgpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciB0ZW5hbnRJZCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvdXNlcnMnO1xuICAgICAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudDpwYWdlQ291bnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgVGVuYW50SWQ6IHRlbmFudElkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihoYW5kbGVTdWNjZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkKHVzZXIpIHtcbiAgICAgICAgdmFyIHVybCA9ICcvYXBpL3VzZXJzLyc7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIubmV3UGFzc3dvcmQgfHwgbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUodXNlcikge1xuICAgICAgICB2YXIgdXJsID0gJy9hcGkvdXNlcnMvJztcbiAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLm5ld1Bhc3N3b3JkIHx8IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHVzZXJuYW1lKSB7XG4gICAgICAgIHJldHVybiBnZXRUZW5hbnQoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgbGV0IHVybCA9IGAvYXBpL3VzZXJzLyR7dXNlcm5hbWV9YDtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFRlbmFudElkOiB0ZW5hbnRJZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzU2VydmljZTsiLCLvu792YXIgbW9kdWxlTmFtZSA9ICdteUhlYWx0aC51c2Vycyc7XG5cbmltcG9ydCBVc2Vyc0NvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy91c2Vyc0NvbnRyb2xsZXInO1xuaW1wb3J0IFVzZXJEZXRhaWxDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvdXNlckRldGFpbENvbnRyb2xsZXInO1xuaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL3VzZXJzU2VydmljZSc7XG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKS5cbiAgICBjb250cm9sbGVyKCd1c2Vyc0NvbnRyb2xsZXInLCBVc2Vyc0NvbnRyb2xsZXIpLlxuICAgIGNvbnRyb2xsZXIoJ3VzZXJEZXRhaWxDb250cm9sbGVyJywgVXNlckRldGFpbENvbnRyb2xsZXIpLlxuICAgIHNlcnZpY2UoJ3VzZXJzU2VydmljZScsIFVzZXJzU2VydmljZSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7Il19
