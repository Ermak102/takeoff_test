/**

 * Реализуйте функцию, которая будет запрашивать URL-адреса и возвращать массив ответов
 * ['url1_answer', 'url2_answer', ...] за кратчайшее возможное время. В любой момент времени необходимо обрабатывать
 * не более [limit] запросов. Используйте функцию asyncFetch в качестве замены для fetch.

**/

export interface ResponseDataType {
  delay: number;
  data: string;
}

const fakeFetch = (url: string) =>
  new Promise<ResponseDataType>((resolve) => {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      resolve({ delay, data: "result" + url });
    }, delay);
  });

/**               Решение задачи                */

export const parallelUploading = (
  urls: string[],
  parallelLimit: number,
  asyncFetch = fakeFetch
): Promise<ResponseDataType[]> => {
  const iterator = urls.entries();

  const promise = new Promise<ResponseDataType[]>((resolve, reject) => {
    const results: ResponseDataType[] = [];

    Array(parallelLimit)
      .fill(iterator)
      .map(async () => {
        for (let item of iterator) {
          results.push(await asyncFetch(item[1]));

          results.length === urls.length && resolve(results);
        }
      });
  });

  return Promise.resolve(promise);
};

/**

  * Вспомогательные данные

**/

const urlsToFetch = Array(30)
  .fill((i: number) => `/${i}/aadt`)
  .map((fn, index) => fn(index));

parallelUploading(urlsToFetch, 3).then((x) => console.log(x, x.length));
