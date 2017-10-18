var xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.twitch.tv/kraken/streams/iamjoppy11?client_id=u6puqk9u6tgremlgz5ed4y3ewdk4c9", true)
xhr.onreadystatechange = function(channel) {
  if(xhr.readyState == 4) {
    var data = JSON.parse(xhr.responseText)
    var elm  = document.getElementById("info")
    if(data["stream"] === null){
      elm.style.color = "red"
      elm.innerHTML = "iamjoppy n'est pas en live actuellement :("
    }else{
      elm.style.color = "green"
      elm.innerHTML = "Viens voir iamjoppy en live maintenant !"
    }
  }
}
xhr.send()