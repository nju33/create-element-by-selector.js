import createElementBySelector from '..';
import test from 'ava';
import jsdom from 'jsdom';

global.document = jsdom.jsdom('');

test('main#id.main.box[contenteditable][data-foo=foo][data-bar=bar]', t => {
  const s = 'main#id.main.box[contenteditable][data-foo=foo][data-bar=bar]';
  const el = createElementBySelector(s);

  t.is(el.id, 'id');
  t.is(el.className, 'main box');
  t.ok(el.getAttribute('contenteditable'));
  t.is(el.getAttribute('data-foo'), 'foo');
  t.is(el.getAttribute('data-bar'), 'bar');
});
