/** @odoo-module **/

import { onMounted,useRef} from "@odoo/owl";
export function useAutofocus(name){
    const ele= useRef(name);
    onMounted(() => ele.el.focus());
}