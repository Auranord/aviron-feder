import Vue from 'vue'

import { Validator, install as VeeValidate } from 'vee-validate';
import { ValidationProvider, ValidationObserver} from 'vee-validate';
import rules from '@vee-validate/rules';
import de from 'vee-validate/dist/locale/de';

Validator.localize('de', de);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Object.keys(rules).forEach(rule => Validator.extend(rule, rules[rule]));

Vue.use(VeeValidate);