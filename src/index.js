module.exports = function reverse (n) {
  return n.toString().match(/\d/g).reverse().join('')

  // return n.toString().match(/[0-9]/g).reverse().join('')

  // return Math.abs(n).toString().split('').reverse().join('')

  // return Array.from(Math.abs(n).toString()).reverse().join('')

  // return [...Math.abs(n).toString()].reverse().join('')
  
  /* const posNum = n.toString().startsWith('-') ? n.toString().slice(1) : n.toString()
  // const posNum = n.toString().startsWith('-') ? n.toString().replace('-', '') : n.toString()
  let newStr = ''
  for (let i = posNum.length - 1; i >= 0; i--) {
    newStr = newStr + posNum[i]
  }
  return Number(newStr) */
}
