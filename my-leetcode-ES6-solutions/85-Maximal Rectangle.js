//dp solution from https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-85-maximal-rectangle/
//rewritten by ES6
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const r = matrix.length
  if(r === 0) return 0
  const c = matrix[0].length

  // dp[i][j] := max len of all 1s ends with col j at row i.
  const dp = []
  matrix.forEach((row, i) => {
    dp[i] = []
    row.forEach((col, j) => {
      dp[i][j] = (matrix[i][j] === '1') ? (j === 0 ? 1 : dp[i][j - 1] + 1) : 0
    })
  })

  let ans = 0
  dp.forEach((row, i) => {
    row.forEach((col, j) => {
      let len = Number.MAX_SAFE_INTEGER
      for (let k = i; k < r; k++) {
        len = Math.min(len, dp[k][j])
        if (len == 0) break
        ans = Math.max(len * (k - i + 1), ans)
      }
    })
  })

  return ans
}