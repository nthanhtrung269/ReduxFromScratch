import { compose, pipe } from 'lodash/fp'

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);

const transformWithPipe = pipe(trim, toLowerCase, wrapInDiv);
transformWithPipe(input);

const transformWithPipe2 = pipe(trim, toLowerCase, wrapInDiv("div"));
console.log(transformWithPipe2(input));