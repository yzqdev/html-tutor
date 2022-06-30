// ==UserScript==
// @icon            http://weibo.com/favicon.ico
// @name            a 花里胡哨小脚本
// @namespace       [url=mailto:1649991905@qq.com]1649991905@qq.com[/url]
// @author          是河兔兔啊
// @description     下载微博视频

// @require         http://cdn.bootcss.com/jquery/3.3.1/jquery.min.js

// @match        http://*/*
// @match        https://*/*
// @run-at       document-end
// @version         0.0.1
// @grant         none
// ==/UserScript==
(function () {
    'use strict';
    //设置网页代码字体
    $('pre').css('font-family', 'consolas!important');
    $('code').css('font-family', 'consolas!important');

    function auto_submit() {
        console.log("你试图离开当前窗口,系统将自动提交试卷!");
//自动提交的代码, 例如: form1.submit();
    }

    window.onblur = auto_submit;

    window.addEventListener('blur', function (e) {
        e.stopImmediatePropagation();

    }, false)
})();
