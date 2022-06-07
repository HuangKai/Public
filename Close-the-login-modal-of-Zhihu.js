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

    function closeLoginModal(){
    var eleHTML = document.querySelector('html');
    var eleModal = document.querySelector('.Modal-wrapper');

        eleHTML.style="";//恢复页面滚动
        eleModal.parentNode.removeChild(eleModal);
        console.log('Removed Zhihu Login Modal');
    }

    var timer = window.setTimeout(closeLoginModal,300);
    //window.clearTimeout(timer);// 清除定时器
})();


