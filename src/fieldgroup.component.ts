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

import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './fieldgroup.styles';
import standardTemplate from './fieldgroup.template';

@customElement('sp-fieldgroup')
export class Fieldgroup extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: Boolean }) public vertical: boolean = false;

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-fieldgroup': Fieldgroup;
  }
}