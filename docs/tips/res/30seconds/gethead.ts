/*
 * @Author: frozen521
 * @Date:   2019-03-15 21:18:39
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-16 10:27:14
 */
let n = readline()
let allmoney = 1024 - n
let m64 = parseInt(allmoney / 64)
let m64rest = allmoney - 64 * m64
let m16 = parseInt(m64rest / 16)
let m16rest = m64rest - 16 * m16
let m4 = parseInt(m16rest / 4)
let m4rest = m16rest - 4 * m4
print(m64 + m16 + m4 + m4rest)
export {}
