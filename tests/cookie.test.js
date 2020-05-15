const test = require('tap').test
const cookieLib = require('../src/cookie')

const dateTime = new Date('2020-01-01 00:00:00')

test('setCookie() testing', (t) => {

  const cases = [
    { name: '', value: '', options: null, expected: '' },
    { name: 't1', value: 't1', options: null, expected: 't1=t1' },
    { name: 't2', value: '', options: null, expected: 't2=' },
    { name: 't3', value: true, options: null, expected: 't3=true' },
    { name: 't4', value: false, options: null, expected: 't4=false' },
    { name: 't5', value: null, options: null, expected: 't5=null' },
    { name: 't6', value: {}, options: null, expected: 't6=%7B%7D' },
    { name: 't7', value: { k: 1 }, options: null, expected: 't7=%7B%22k%22%3A1%7D' },
    { name: 'o1', value: 1, options: { path: '/' }, expected: 'o1=1; path=/' },
    { name: 'o2', value: 2, options: { expires: dateTime }, expected: 'o2=2; expires=' + dateTime.toUTCString() },
    {
      name: 'o3',
      value: 3,
      options: { expires: dateTime, path: '/' },
      expected: 'o3=3; expires=' + dateTime.toUTCString() + '; path=/'
    },
  ]

  t.plan(cases.length)

  cases.map(data => {
    cookieLib.document.cookie = ''
    cookieLib.setCookie(data.name, data.value, data.options)
    t.same(cookieLib.document.cookie, data.expected)
  })
})
