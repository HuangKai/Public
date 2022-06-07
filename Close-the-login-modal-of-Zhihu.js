// ==UserScript==
// @name         Close the login modal of Zhihu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kay
// @match        https://*.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// @updateURL    https://github.com/HuangKai/Public/blob/main/Close-the-login-modal-of-Zhihu.js
// ==/UserScript==

(function() {
    'use strict';

    function removeElement(){
        var ele = document.querySelector('.Modal-wrapper');
        ele.parentNode.removeChild(ele);
        console.log('Removed Zhihu Login Modal');
    }

    var timer = window.setTimeout(removeElement,100);
    //window.clearTimeout(timer);// 清除定时器
})();


