/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/create-element-by-selector.js
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.createElementBySelector = factory());
}(this, function () { 'use strict';

  function selectorParse(selector) {
    var re = /([#.[]?[^#.\[]+)/g;
    var matches = selector.match(re);
    if (matches) {
      return traverse(matches);
    }
    return {};
  }

  function traverse(selectors) {
    var result = {};
    selectors.forEach(function (selector) {
      var detail = specity(selector.trim());
      if (detail.attr) {
        if (result[detail.attr] && detail.attr === 'class') {
          result.class.push(detail.val);
        } else if (detail.attr === 'class') {
          result.class = [detail.val];
        } else if (!result[detail.attr]) {
          result[detail.attr] = detail.val;
        }
      } else {
        result.tag = detail.val;
      }
    });

    result.dataSet = Object.keys(result).filter(function (attr) {
      return attr.indexOf('data-') === 0;
    }).reduce(function (dataSet, attr) {
      dataSet[attr.substr(5)] = result[attr];
      delete result[attr];
      return dataSet;
    }, {});

    if (!result.tag) {
      result.tag = 'div';
    }
    if (result.class) {
      result.className = result.classList = result.class;
      result.className = result.className.join(' ');
      delete result.class;
    }
    return result;
  }

  function specity(selector) {
    if (selector[0] === '#') {
      return {
        attr: 'id',
        val: selector.slice(1, selector.length)
      };
    } else if (selector[0] === '.') {
      return {
        attr: 'class',
        val: selector.slice(1, selector.length)
      };
    } else if (selector[0] === '[' && selector[selector.length - 1] === ']') {
      var splited = selector.slice(1, selector.length - 1).split('=');
      var attr = splited[0];
      var val = splited[1] || true;
      return { attr: attr, val: val };
    }
    return {
      attr: null,
      val: selector
    };
  }

  function createElementBySelector(selector) {
    var result = selectorParse(selector);
    var el = document.createElement(result.tag);

    addAttrs(el, result);
    addDataSets(el, result);
    return el;
  }

  function addAttrs(el, result) {
    var ignores = ['tag', 'classList', 'dataSet'];
    Object.keys(result).filter(function (attr) {
      return ignores.indexOf(attr) === -1;
    }).forEach(function (attr) {
      el.setAttribute(attr === 'className' ? 'class' : attr, result[attr]);
    });
  }

  function addDataSets(el, result) {
    if (result.dataSet) {
      Object.keys(result.dataSet).forEach(function (data) {
        return el.setAttribute('data-' + data, result.dataSet[data]);
      });
    }
  }

  return createElementBySelector;

}));