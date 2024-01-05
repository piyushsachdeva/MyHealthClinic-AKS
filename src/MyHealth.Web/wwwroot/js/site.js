"use strict";

if (![].fill) {
    Array.prototype.fill = function (value) {

        var O = Object(this);
        var len = parseInt(O.length, 10);
        var start = arguments[1];
        var relativeStart = parseInt(start, 10) || 0;
        var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
        var end = arguments[2];
        var relativeEnd = end === undefined ? len : parseInt(end) || 0;
        var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

        for (; k < final; k++) {
            O[k] = value;
        }

        return O;
    };
}
'use strict';

var MyHealthClinic = MyHealthClinic || {};

MyHealthClinic.Config = (function () {
    var bingMapsKey = 'YOUR_BING_MAPS_KEY',
        infobBoxCompanyAddress = 'HealthClinic.biz',
        companyLocation = {
        Latitude: 40.7197044,
        Longitude: -74.003000
    };

    return {
        bingMapsKey: bingMapsKey,
        infoBoxCompanyAddress: infobBoxCompanyAddress,
        companyLocation: companyLocation
    };
})();
'use strict';

var MyHealthClinic = MyHealthClinic || {};
MyHealthClinic.Pages = MyHealthClinic.Pages || {};
MyHealthClinic.Pages.Home = MyHealthClinic.Pages.Home || {};

MyHealthClinic.Pages.Home.Index = (function () {
    'use strict';

    var mapElement = document.getElementById('mapDiv');

    var initMap = function initMap(isInExtraSmallScreenWidth) {
        var pinLocation = new Microsoft.Maps.Location(MyHealthClinic.Config.companyLocation.Latitude, MyHealthClinic.Config.companyLocation.Longitude),
            latitudeDeviation;

        if (isInExtraSmallScreenWidth) {
            latitudeDeviation = 0.0020;
        } else {
            latitudeDeviation = -0.0050;
        }

        var centerLocation = new Microsoft.Maps.Location(MyHealthClinic.Config.companyLocation.Latitude + latitudeDeviation, MyHealthClinic.Config.companyLocation.Longitude);

        var mapOptions = {
            zoom: 15,
            center: centerLocation,
            showScalebar: false,
            enableSearchLogo: false,
            showMapTypeSelector: false,
            showDashboard: false,
            credentials: MyHealthClinic.Config.bingMapsKey
        },
            pinOptions = {
            icon: '',
            width: 50,
            height: 70
        },
            infoBoxOptions = {
            visible: true,
            offset: new Microsoft.Maps.Point(-100, 85),
            htmlContent: '<div class="map-infoBox"><h2>' + MyHealthClinic.Config.infoBoxCompanyAddress + '</h2><div class="map-infoBox-nav"><a href="">Indications</a><a href="">Save</a><a href="">Zoom</a><a href="">Send</a></div></div>'
        };

        var map = new Microsoft.Maps.Map(mapElement, mapOptions);
        var pin = new Microsoft.Maps.Pushpin(pinLocation, pinOptions);
        var pinInfoBox = new Microsoft.Maps.Infobox(pin.getLocation(), infoBoxOptions);

        // This hack avoids the map zoom when user scrolls into the page.
        Microsoft.Maps.Events.addHandler(map, 'mousewheel', function (e) {
            e.handled = true;
            return true;
        });

        Microsoft.Maps.Events.addHandler(map, 'dblclick', function (e) {
            e.handled = true;
            return true;
        });

        Microsoft.Maps.Events.addHandler(map, 'mousedown', function (mouseEvent) {
            mouseEvent.handled = true;
            return true;
        });

        map.entities.push(pin);
        map.entities.push(pinInfoBox);
    };

    var initialize = function initialize() {
        if (mapElement) {
            initMap(true);
        }
    };

    return {
        initialize: initialize
    };
})();

MyHealthClinic.Pages.Home.Index.initialize();
//# sourceMappingURL=site.js.map
