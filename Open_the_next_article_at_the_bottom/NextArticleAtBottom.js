(function (){
  var nextarticle = "";
  if (/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\/.+$/.test(location.href)){
    //kakuyomu
    var lp = location.href.match(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\//)[0];
    var dlinks = document.links;
    for (var i = dlinks.length-1; i >= 0; i--){
      //console.log(lpn);
      if((dlinks[i].id == 'contentMain-readNextEpisode') &&
         (dlinks[i].href.match(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\//)[0] == lp)){
        //alert(dlinks[i].href);
        nextarticle = dlinks[i].href;
        break;
      }
    }

  }else{
    //other
    var tc ='次';
    var dlinks = document.links;
    for (var i = dlinks.length-1; i >= 0; i--){
      if(('textContent' in dlinks[i] ) &&
         (location.hostname == dlinks[i].hostname) &&
         (dlinks[i].textContent.indexOf(tc)==0)){
        nextarticle = dlinks[i].href;
        break;
      }
    }
  }

  console.log("nextarticle : " + nextarticle);
  if(nextarticle != ""){
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
  }

})();