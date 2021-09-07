var accessToken =
  "33ff3110d0a4e9a547c59fbd6c70d68405da66dba7c46316d3e914aae236dac2";
url = "https://api.dribbble.com/v2/user/shots?access_token=" + accessToken;


(function () {
  var xmlHttp;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      //console.log(xmlHttp.responseText); // "" (empty string)
      var respData = JSON.parse(xmlHttp.responseText) || {};
      console.log(respData);
      
      function ifAnimated(shot) {
        if (respData[shot].animated == true) {
          return respData[shot].images.hidpi
        } else {
          return respData[shot].images.two_x
        }
      }

      page = document.getElementById("works");
      var works = // triple
      '<div class="rows triple">'+
      // work small
      '<div class="work small"><a href="'+
      respData[0].html_url +'" target="_blank"><img class="dribbble-shot" src="'+
      respData[0].images.two_x +'" alt="'+
      respData[0].title+'"><img class="dribbble-video" src="'+
      ifAnimated(0)+'"></a></div>'+
      // work small
      '<div class="work small"><a href="'+
      respData[1].html_url +'" target="_blank"><img class="dribbble-shot" src="'+
      respData[1].images.two_x +'" alt="'+
      respData[1].title+'"><img class="dribbble-video" src="'+
      ifAnimated(1)+'"></a></div>'+
      // work small
      '<div class="work small"><a href="'+
      respData[2].html_url +'" target="_blank"><img class="dribbble-shot" src="'+
      respData[2].images.two_x +'" alt="'+
      respData[2].title+'"><img class="dribbble-video" src="'+
      ifAnimated(2)+'"></a></div>'+
      '</div>' +
      // double
      '<div class="rows double">'+
      // work medium
      '<div class="work medium"><a href="'+
      respData[3].html_url +'" target="_blank"><img class="dribbble-shot" src="'+
      respData[3].images.two_x +'" alt="'+
      respData[3].title+'"><img class="dribbble-video" src="'+
      ifAnimated(3)+'"></a></div>'+
      // work medium
      '<div class="work medium"><a href="'+
      respData[4].html_url +'" target="_blank"><img class="dribbble-shot" src="'+
      respData[4].images.two_x +'" alt="'+
      respData[4].title+'"><img class="dribbble-video" src="'+
      ifAnimated(4)+'"></a></div>'+
      '</div>' +
      // triple
      '<div class="rows triple">'+
      // work small
      '<div class="work small"><a href="'+
      respData[5].html_url +'" target="_blank"><img class="dribbble-shot" src="'+
      respData[5].images.two_x +'" alt="'+
      respData[5].title+'"><img class="dribbble-video" src="'+
      ifAnimated(5)+'"></a></div>'+
      // work small
      '<div class="work small"><a href="'+
      respData[6].html_url +'" target="_blank"><img class="dribbble-shot" src="'+
      respData[6].images.two_x +'" alt="'+
      respData[6].title+'"><img class="dribbble-video" src="'+
      ifAnimated(6)+'"></a></div>'+
      // work small
      '<div class="work small"><a href="'+
      respData[7].html_url +'" target="_blank"><img class="dribbble-shot" src="'+
      respData[7].images.two_x +'" alt="'+
      respData[7].title+'"><img class="dribbble-video" src="'+
      ifAnimated(7)+'"></a></div>'+
      '</div>'+'</div>'
      page.innerHTML += works;
      
    }
  }
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
})();

// by @erf.gram