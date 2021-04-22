"use strict";

import m from 'mithril';

import { list } from "./views/list";
import { menu } from "./views/menu";
import { home } from "./views/home";
import { form } from "./views/form";
import { invoices } from "./views/invoices.js";
import { login } from "./views/login.js";

import { auth } from "./models/auth.js";
//import { year } from "./views/year";

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(menu, m(home));
        }
    },
    "/deliveries": {
        render: function() {
            return m(menu, m(list));
        }
    },
    "/form": {
        render: function() {
            return m(menu, m(form));
        }
    },
    "/invoices": {
        onmatch: function() {
            if (auth.token) {
                return invoices;
            }

            return m.route.set("/login");
        },
        render: function (vnode) {
            return m(menu, vnode);
        }
    },
    "/login": {
        render: function() {
            return m(menu, m(login));
        }
    }
});
