import selectorParse from 'selector-parse';

export default function createElementBySelector(selector) {
  const result = selectorParse(selector);

  const el = document.createElement(result.tag);

  Object.keys(result)
    .filter(attr => ['tag', 'classList'].indexOf(attr) === -1)
    .forEach(attr => {
      el[attr] = result[attr];
    });

  return el;
}
