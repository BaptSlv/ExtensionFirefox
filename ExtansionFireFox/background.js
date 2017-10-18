var tickRate = 60000

function checkStream() {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "https://api.twitch.tv/kraken/streams/iamjoppy11?client_id=u6puqk9u6tgremlgz5ed4y3ewdk4c9", true)
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4) {
      var data = JSON.parse(xhr.responseText)
      if(data["stream"] === null){
        chrome.browserAction.setIcon({path:"img/pandaTriste.png"})
      }else{
        chrome.browserAction.setIcon({path:"img/pandaContent.png"})
      }
      setTimeout(checkStream, tickRate)
    }
  }
  xhr.send()
}

checkStream() 