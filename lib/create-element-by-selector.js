import selectorParse from 'selector-parse';

export default function createElementBySelector(selector) {
  const result = selectorParse(selector);
  const el = document.createElement(result.tag);

  addAttrs(el, result);
  addDataSets(el, result);
  return el;
}

function addAttrs(el, result) {
  const ignores = ['tag', 'classList', 'dataSet'];
  Object.keys(result)
    .filter(attr => ignores.indexOf(attr) === -1)
    .forEach(attr => {
      el.setAttribute((attr === 'className') ? 'class' : attr, result[attr]);
    });
}

function addDataSets(el, result) {
  if (result.dataSet) {
    Object.keys(result.dataSet)
      .forEach(data => el.setAttribute(`data-${data}`, result.dataSet[data]));
  }
}
