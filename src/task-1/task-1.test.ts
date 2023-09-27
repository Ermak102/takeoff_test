import {firstUniqChar} from './task-1'

test('firstUniqChar', () => {
  expect(firstUniqChar('works')).toBe(0)
  expect(firstUniqChar('soundscool')).toBe(2)
  expect(firstUniqChar('zzbb')).toBe(-1)
  expect(firstUniqChar('hello')).toBe(0)
  expect(firstUniqChar('ggoodbye')).toBe(4)
  expect(firstUniqChar('zzzz')).toBe(-1)
  expect(firstUniqChar('bab')).toBe(1)
})
