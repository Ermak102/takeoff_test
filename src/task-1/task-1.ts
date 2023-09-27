/**

  Дана строка s. Найдите первый неповторяющийся символ в ней и верните его индекс.
  Если такого символа нет, верните -1.
 
**/

export function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    let counter = 0;

    s.split("").map((j) => j === s[i] && counter++);

    if (counter === 1) return i;
  }

  return -1;
}
