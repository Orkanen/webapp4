"use strict";

import m from 'mithril';

let deliveries = {
    url: "https://lager.emilfolino.se/v2/",
    apiKey: "79ec5a01a507b1090a62166a71ee2ea1",

    currentDeliveries: [],

    getDeliveries: function() {
        return m.request({
            method: "GET",
            url: `${deliveries.url}/deliveries?api_key=79ec5a01a507b1090a62166a71ee2ea1`
        }).then(function(result) {
            console.log(result);
            deliveries.currentDeliveries = result.data;
        });
    },

    addDelivery: function() {
        console.log("Delivery made");
    },
    current: {},
    save: function() {
        console.log(deliveries.current);
        deliveries.current.api_key = deliveries.apiKey;
        return m.request({
            method: "POST",
            url: `${deliveries.url}/deliveries`,
            body: deliveries.current
        }).then(function() {
            m.route.set("/deliveries");
        });
    }
};

export { deliveries };
