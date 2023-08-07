/** @odoo-module **/

import { Component} from "@odoo/owl";

export class Card extends Component {
    static template="awesome_tshirt.Card";

}
Card.props = {
    slots:{
        type:Object,
        shape:{
            title:{type:Object,optional:true},
            default:{type:Object,optional:true}
        }
    }        
}