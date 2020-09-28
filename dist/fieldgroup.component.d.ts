import { Base } from '@spectrum/sp-base';
export declare class Fieldgroup extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    vertical: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-fieldgroup': Fieldgroup;
    }
}
