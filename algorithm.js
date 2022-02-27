'use strict'

let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
let course = [2,3,4];

// 각 order의 조합을 구해주며 조합은 list에 저장
// list에 저장된 조합을 정렬
// 조합을 count
// count된 것 출력


function solution(orders, course) {
  const candidateMap = new Map();
  const maxCountMap = new Map();
  const courseSet = new Set(course);

  function comb(idx, order, result) {
    //
      if (courseSet.has(result.length)) {
          let count = candidateMap.get(result) || 0;
          candidateMap.set(result, ++count);

          const max = maxCountMap.get(result.length) || 0;

          if (max < count) {
              maxCountMap.set(result.length, count);
          }
      }

      for (let i = idx; i < order.length; i++) {
          comb(i + 1, order, result + order[i]);
      }
  }

  orders.map((order) => order.split("").sort().join("")).forEach((order) => comb(0, order, ""));

  return course
      .map((length) => {
          const max = maxCountMap.get(length);
          return Array.from(candidateMap)
              .filter((e) => e[0].length === length && e[1] >= 2 && e[1] === max)
              .map((e) => e[0]);
      })
      .flatMap((e) => e)
      .sort();
}
