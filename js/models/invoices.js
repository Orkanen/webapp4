import m from "mithril";

import { baseUrl, apiKey } from "../vars.js";

import { auth } from "./auth.js";

let invoicesModel = {
    url: `${baseUrl}/invoices`,
    invoices: [],
    getInvoices: function() {
        m.request({
            url: `${invoicesModel.url}?api_key=${apiKey}`,
            method: "GET",
            headers: {
                'x-access-token': auth.token
            }
        }).then(function(result) {
            invoicesModel.invoices = result.data
        });
    }
};

export { invoicesModel };
