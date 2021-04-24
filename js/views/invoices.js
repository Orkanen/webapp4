import m from "mithril";

import { deliveries } from "../models/deliveries.js";

import { invoicesModel } from "../models/invoices.js";

let invoiceTable = {
    view: function () {
        return [
            m("h1", "Inleverans"),
            m("table.table.table-scroll.table-striped", [
                m("thead", [
                    m("th", "Name"),
                    m("th", "Price"),
                    m("th", "Fakturadatum"),
                    m("th", "Förfallodatum")
                ])
            ]),
            m("tbody", invoicesModel.invoices.map(function(invoice) {
                return m("tr", [
                    m("td", invoice.name),
                    m("td", invoice.total_price),
                    m("td", invoice.creation_date),
                    m("td", invoice.due_date)
                ]);
            })),
            m(m.route.Link, {
                selector: "button",
                href: "/inform",
                class: "form-button"
            }, "Add Invoice")
        ];
    }
};

let noData = {
    view: function() {
        return [m("p", "Det har inga fakturor!"),
                m(m.route.Link, {
                    selector: "button",
                    href: "/inform",
                    class: "form-button"
                }, "Add Invoice")
        ];
    }
};

let invoices = {
    oninit: invoicesModel.getInvoices,
    view: function () {
        return [
            m("h1", "Fakturor"),
            invoicesModel.invoices.length > 0 ? m(invoiceTable) : m(noData)
        ];
    }
};

export { invoices };
