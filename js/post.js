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
      
      page = document.getElementById("works");
      var works = '<div class="rows triple"><div class="work samll"><a href="'+
      respData[0].html_url + '" target="_blank"><img src="'+
      respData[0].images.two_x +'" alt="'+
      respData[0].title +'"></a></div>'+
      '<div class="work samll"><a href="'+
      respData[1].html_url + '" target="_blank"><img src="'+
      respData[1].images.two_x +'" alt="'+
      respData[1].title +'"></a></div>'+
      '<div class="work samll"><a href="'+
      respData[2].html_url + '" target="_blank"><img src="'+
      respData[2].images.two_x +'" alt="'+
      respData[2].title +'"></a></div></div>'+
      '<div class="rows double"><div class="work medium"><a href="'+
      respData[3].html_url + '" target="_blank"><img src="'+
      respData[3].images.two_x +'" alt="'+
      respData[3].title +'"></a></div>'+
      '<div class="work medium"><a href="' +
      respData[4].html_url + '" target="_blank"><img src="'+
      respData[4].images.two_x +'" alt="'+
      respData[4].title +'"></a></div></div>'+
      '<div class="rows triple"><div class="work samll"><a href="'+
      respData[5].html_url + '" target="_blank"><img src="'+
      respData[5].images.two_x +'" alt="'+
      respData[5].title +'"></a></div>'+
      '<div class="work samll"><a href="'+
      respData[6].html_url + '" target="_blank"><img src="'+
      respData[6].images.two_x +'" alt="'+
      respData[6].title +'"></a></div>'+
      '<div class="work samll"><a href="'+
      respData[7].html_url + '" target="_blank"><img src="'+
      respData[7].images.two_x +'" alt="'+
      respData[7].title +'"></a></div></div>'
      page.innerHTML += works;
      
    }
  }
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
})();

// by @erf.gram