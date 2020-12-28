(function (){

  // class nextarticle {
  //   constructor(json) { /* コンストラクタ */
  //     this.location = json[location];
  //     this.urlMatch =json[urlMatch];
  //     this.elementName = json[elementName];
  //     this.elementValue = json[elementValue];
  //     const url = location.href;
  //     const matchedUrl = url.match(urlMatch)[0];
  //     if (!matchedUrl) {exit;}

  //     switch (elementName) {
  //       case `id` :
  //         if (urlMatch.test(url)){
  //           var targetElement = document.getElementById(elementValue);
  //         }
  //         break;

  //       default :
  //         var dlinks = document.links;
  //         for (var i = dlinks.length-1; i >= 0; i--){
  //           if(('textContent' in dlinks[i] ) && (dlinks[i].textContent.match(elementValue)==0)){
  //             var targetElement = dlinks[i];
  //             break;
  //           }
  //         }
  //     }

  //     if ((targetElement != undefined) && (targetElement.href.match(urlMatch)[0] == matchedUrl)) {
  //       this.nextarticle = targetElement.href
  //     }
  //   }

  //   get getNextArticle() {
  //     return this.nextarticle
  //   }
  // }

  const url = location.href;
  if (/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\/.+$/.test(url)){
    //kakuyomu
    var lp = url.match(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\//)[0];
    var dlinks = document.links;
    for (var i = dlinks.length-1; i >= 0; i--){
      //console.log(lpn);
      if((dlinks[i].id == 'contentMain-readNextEpisode') &&
         (dlinks[i].href.match(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\//)[0] == lp)){
        //alert(dlinks[i].href);
        var nextarticle = dlinks[i].href;
        break;
      }
    }

  } else {
    //other
    var tc ='次';
    var dlinks = document.links;
    for (var i = dlinks.length-1; i >= 0; i--){
      if(('textContent' in dlinks[i] ) &&
         (location.hostname == dlinks[i].hostname) &&
         (dlinks[i].textContent.indexOf(tc)==0)){
        var nextarticle = dlinks[i].href;
        break;
      }
    }
  }

  console.log("nextarticle : " + nextarticle);
  if(nextarticle != undefined){
    document.addEventListener('scroll',  function() {
      const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      var scrollTop =
      document.documentElement.scrollTop || // IE、Firefox、Opera
      document.body.scrollTop;              // Chrome、Safari
    
      console.log("scrollHeight : " + scrollHeight);
      console.log("window.innerHeight : " + window.innerHeight);
      console.log("bottom : " + (scrollHeight - window.innerHeight));
      console.log("currrent : " + document.documentElement.scrollTop);
      console.log("Difference : " + parseInt(scrollHeight - window.innerHeight - document.documentElement.scrollTop));
      if(parseInt(scrollHeight - window.innerHeight - scrollTop) < 1) {
        location.href = nextarticle;
      };
    });

    floatBox_to("Open nextArticle at bottom");
          
    function floatBox_to(text) {
      console.log("floatBox_to");
      var mbox = document.createElement("div");
      mbox.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:10px;text-align:center;z-index:19999;";
      mbox.style.opacity = '0.8';
      mbox.style.background = 'white';
      mbox.style.border = '1px solid #aaa';
      mbox.style.fontSize = '30px';
      var tnode = document.createTextNode(text);
      mbox.appendChild(tnode);
      document.body.appendChild(mbox);
  
      /* setTimeout(closenode, 3000);
      function closenode(){mbox.parentNode.removeChild(mbox);}*/
  
      setTimeout(() =>{mbox.parentNode.removeChild(mbox);}, 1000);
  
    }  

  }

  return nextarticle;

})();