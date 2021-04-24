"use strict";

import m from 'mithril';

let orders = {
    url: "https://lager.emilfolino.se/v2/",

    list: [],
    current_items: [],
    total: 0,
    current: [],

    loadList: function() {
        return m.request({
            method: "GET",
            url: `${orders.url}orders?api_key=79ec5a01a507b1090a62166a71ee2ea1`
        }).then(function(result) {
            orders.list = [];
            //console.log(result.data);
            result.data.forEach(element => {
                if (element.status_id != 600) {
                    orders.list.push(element);
                }
            });
        });
    },
    save: function(id) {
        return m.request({
            method: "GET",
            url: `${orders.url}orders/${id}?api_key=79ec5a01a507b1090a62166a71ee2ea1`
        }).then(function(result) {
            orders.total = 0;
            //console.log(result.data);
            orders.current_items = [];
            result.data.order_items.forEach(element => {
                orders.current_items.push(element)
                orders.total += (element.price * element.amount)
            });
            console.log(orders.total);
            console.log(orders.current_items);
            orders.current = result.data;
        });
    }

};

export { orders };
