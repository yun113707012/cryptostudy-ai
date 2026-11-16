import test from 'node:test';
import assert from 'node:assert/strict';
import {mod,gcd,inverse,powMod,rsaDemo,parseInteger} from '../js/crypto.js';
test('mod with positive and negative numbers',()=>{assert.equal(mod(29n,6n),5n);assert.equal(mod(-3n,7n),4n);assert.throws(()=>mod(2n,0n));});
test('gcd including zero and negative',()=>{assert.equal(gcd(48n,18n).value,6n);assert.equal(gcd(-24n,0n).value,24n);});
test('mod inverse valid and absent',()=>{assert.equal(inverse(3n,11n).value,4n);assert.equal(inverse(-3n,11n).value,7n);assert.throws(()=>inverse(6n,9n));});
test('mod exponent including exponent zero',()=>{assert.equal(powMod(7n,13n,11n).value,2n);assert.equal(powMod(5n,0n,7n).value,1n);assert.throws(()=>powMod(2n,-1n,7n));});
test('RSA example roundtrip',()=>{const r=rsaDemo(5n,11n,3n,7n);assert.equal(r.value,13n);assert.match(r.steps.at(-1),/ = 7$/);assert.throws(()=>rsaDemo(4n,11n,3n,7n));});
test('parse rejects decimals and scientific notation',()=>{assert.equal(parseInteger(' 123 '),123n);assert.throws(()=>parseInteger('1.5'));assert.throws(()=>parseInteger('1e3'));});
