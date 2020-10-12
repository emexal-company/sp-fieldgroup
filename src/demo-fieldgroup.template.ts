/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { DemoFieldgroup } from './demo-fieldgroup.component';

import '@spectrum/sp-fieldgroup';
import '@spectrum/sp-container';


export default function template(this: DemoFieldgroup) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
      <sp-demo width="300">
      <pre><sp-fieldgroup>
  <sp-radio label="Kittens"></sp-radio>
  <sp-radio label="Dogs"></sp-radio>
</sp-fieldgroup></pre>
</sp-demo>
<sp-demo width="300">
<pre><sp-fieldgroup>
  <sp-checkbox label="Checkbox"></sp-checkbox>
  <sp-checkbox label="Checkbox" checked></sp-checkbox>
</sp-fieldgroup></pre>
      </sp-demo>
      <sp-rule medium label="Labels below"></sp-rule>
      <sp-demo width="300">
      <pre><sp-fieldgroup>
  <sp-radio labelBelow label="1"></sp-radio>
  <sp-radio labelBelow label="2"></sp-radio>
  <sp-radio labelBelow label="3"></sp-radio>
</sp-fieldgroup></pre>
</sp-demo>
<sp-rule medium label="Vertical"></sp-rule>
      <sp-demo width="300">
      <pre><sp-fieldgroup vertical>
  <sp-radio label="Kittens"></sp-radio>
  <sp-radio label="Dogs"></sp-radio>
</sp-fieldgroup></pre>
</sp-demo>
<sp-demo width="300">
<pre><sp-fieldgroup vertical>
  <sp-checkbox label="Checkbox"></sp-checkbox>
  <sp-checkbox label="Checkbox" checked></sp-checkbox>
</sp-fieldgroup></pre>
      </sp-demo>
  </sp-container>
  `;
  
}
 