"use strict";

import m from 'mithril';

let menu = {
    view: function(vnode) {
        return [
            m("nav.top-nav",
                { textContent: ""},
                [
                    m("a", { href: "#!/" }, "Home"),
                    m("a", { href: "#!/deliveries" }, "Deliveries"),
                    m("a", { href: "#!/invoices" }, "Invoices")
                ]),
            m("main.container", vnode.children)
        ];
    }
};

export { menu };
