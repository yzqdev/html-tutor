<script setup lang="ts">
// ==UserScript==
// @name         鼠标点击冒泡
// @namespace    https://djzhao.js.org
// @version      0.3.1
// @description  一个用JS写的鼠标左击特效
// @author       一碗单炒饭
// @include      /[a-zA-z]+://[^\s]*/
// @run-at       document_start
// @grant        unsafeWindow
// @grant        GM_setClipboard
// ==/UserScript==
window.onload = function () {
  let click_cnt = 0
  const $html = document.getElementsByTagName('html')[0]
  const $body = document.getElementsByTagName('body')[0]
  $html.onclick = function (e) {
    const $elem = document.createElement('b')
    $elem.style.color = '#E94F06'
    $elem.style.zIndex = 9999
    $elem.style.position = 'absolute'
    $elem.style.select = 'none'
    const x = e.pageX
    const y = e.pageY
    $elem.style.left = x - 10 + 'px'
    $elem.style.top = y - 20 + 'px'
    clearInterval(anim)
    switch (++click_cnt) {
      case 10:
        $elem.innerText = 'OωO'
        break
      case 20:
        $elem.innerText = '(๑•́ ∀ •̀๑)'
        break
      case 30:
        $elem.innerText = '(๑•́ ₃ •̀๑)'
        break
      case 40:
        $elem.innerText = '(๑•̀_•́๑)'
        break
      case 50:
        $elem.innerText = '（￣へ￣）'
        break
      case 60:
        $elem.innerText = '(╯°口°)╯(┴—┴'
        break
      case 70:
        $elem.innerText = '૮( ᵒ̌皿ᵒ̌ )ა'
        break
      case 80:
        $elem.innerText = '╮(｡>口<｡)╭'
        break
      case 90:
        $elem.innerText = '( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃'
        break
      case 100:
      case 101:
      case 102:
      case 103:
      case 104:
      case 105:
        $elem.innerText = '(ꐦ°᷄д°᷅)'
        break
      default:
        $elem.innerText = '❤'
        break
    }
    $elem.style.fontSize = Math.random() * 10 + 8 + 'px'
    let increase = 0
    let anim
    setTimeout(function () {
      anim = setInterval(function () {
        if (++increase === 150) {
          clearInterval(anim)
          $body.removeChild($elem)
        }
        $elem.style.top = y - 20 - increase + 'px'
        $elem.style.opacity = (150 - increase) / 120
      }, 8)
    }, 70)
    $body.appendChild($elem)
  }
}
</script>
