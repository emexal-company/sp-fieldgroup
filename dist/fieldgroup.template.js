import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function standardTemplate() {
    const classes = {
        'spectrum-FieldGroup--vertical': this.vertical
    };
    return html `
<div class="spectrum-FieldGroup ${classMap(classes)}">
   <slot></slot>
</div>
   `;
}
//# sourceMappingURL=fieldgroup.template.js.map