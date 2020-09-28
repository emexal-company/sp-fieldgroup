import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './fieldgroup.styles';
import standardTemplate from './fieldgroup.template';
let Fieldgroup = class Fieldgroup extends Base {
    constructor() {
        super(...arguments);
        this.vertical = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
Fieldgroup.componentStyles = [labelStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Fieldgroup.prototype, "vertical", void 0);
Fieldgroup = __decorate([
    customElement('sp-fieldgroup')
], Fieldgroup);
export { Fieldgroup };
//# sourceMappingURL=fieldgroup.component.js.map