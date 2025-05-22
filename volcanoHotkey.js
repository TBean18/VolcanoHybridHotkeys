// ==UserScript==
// @name         Volcano Hybrid Hotkeys
// @namespace    http://tampermonkey.net/
// @version      2025-05-22
// @description  try to take over the world!
// @author       You
// @match        https://app.storz-bickel.com/*
// @grant unsafeWindow
// @icon         https://www.google.com/s2/favicons?sz=64&domain=storz-bickel.com
// ==/UserScript==

function doc_keyUp(e) {
  switch (e.keyCode) {
    case 38:
      //Up Arrow
      console.log("Up Arrow Clicked");
      unsafeWindow.onPlusButtonMouseDown();
      unsafeWindow.onPlusButtonMouseUp();
      break;
    case 40:
      //Down Arrow
      console.log("Down Arrow Clicked");
      unsafeWindow.onMinusButtonMouseDown();
      unsafeWindow.onMinusButtonMouseUp();
      break;
    case 13:
      // Enter
      console.log("Enter Clicked");
      unsafeWindow.onAirClickVolcano();
      break;
    case 69:
      // 'E'
      console.log("E Clicked");
      unsafeWindow.onHeatClickVolcano();
      break;
    default:
      break;
  }
}
document.addEventListener("keyup", doc_keyUp, false);
