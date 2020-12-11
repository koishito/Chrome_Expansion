window.onload = function() {
  // floatBOX('content_scripts.js');


}

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log(request.message); // hello
//   console.log(sender);

  // document.addEventListener('scroll',function() {
  //   const scrollHeight = Math.max(
  //     document.body.scrollHeight, document.documentElement.scrollHeight,
  //     document.body.offsetHeight, document.documentElement.offsetHeight,
  //     document.body.clientHeight, document.documentElement.clientHeight
  //   );
  //   var scrollTop =
  //   document.documentElement.scrollTop || // IE、Firefox、Opera
  //   document.body.scrollTop;              // Chrome、Safari
  
  //   console.log("scrollHeight : " + scrollHeight);
  //   console.log("window.innerHeight : " + window.innerHeight);
  //   console.log("bottom : " + (scrollHeight - window.innerHeight));
  //   console.log("currrent : " + document.documentElement.scrollTop);
  //   console.log("Difference : " + parseInt(scrollHeight - window.innerHeight - document.documentElement.scrollTop));
  //   console.log("");
  //   if(parseInt(scrollHeight - window.innerHeight - document.documentElement.scrollTop) == 0) {
  //     floatBOX("bottom");
  //   };
  // });

//   sendResponse({}); // 送り返すものがない場合は空のオブジェクトを送る
// });

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
//   floatBOX(message);

  // floatBOX('content_scripts.js');

  // document.addEventListener('scroll',function() {
  //   const scrollHeight = Math.max(
  //     document.body.scrollHeight, document.documentElement.scrollHeight,
  //     document.body.offsetHeight, document.documentElement.offsetHeight,
  //     document.body.clientHeight, document.documentElement.clientHeight
  //   );
  //   var scrollTop =
  //   document.documentElement.scrollTop || // IE、Firefox、Opera
  //   document.body.scrollTop;              // Chrome、Safari
  
  //   console.log("scrollHeight : " + scrollHeight);
  //   console.log("window.innerHeight : " + window.innerHeight);
  //   console.log("bottom : " + (scrollHeight - window.innerHeight));
  //   console.log("currrent : " + document.documentElement.scrollTop);
  //   console.log("Difference : " + parseInt(scrollHeight - window.innerHeight - document.documentElement.scrollTop));
  //   console.log("");
  //   if(parseInt(scrollHeight - window.innerHeight - document.documentElement.scrollTop) == 0) {
  //     floatBOX("bottom");
  //   };
  // }, {passive: true});
    
//   // sendResponse("got it!");
//   return true;
// })


function floatBOX(e){
  var a=document.createElement("div");
  a.style.cssText="position:fixed;top:150px;left:0;width:25%;padding:10px;background:silver;border:1px solid #aaa;text-align:center;z-index:19999;";
  //a.style.cssText="position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);padding:50px;background:silver;border:1px solid #aaa;text-align:center;";
  a.innerHTML=e;
  a.style.fontSize = '40px';
  document.body.appendChild(a);
  setTimeout(closenode, 3000);
  function closenode(){a.parentNode.removeChild(a);}
  
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.text == "code-block") {
      const selection = window.getSelection().toString().replace(/\n/g, "<br/>");
      const insertContent = `<samp>${selection}</samp>`;
      document.execCommand("insertHTML", false, insertContent);
      sendResponse({ "text": insertContent });
  }
});