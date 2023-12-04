// task 1
var req = new XMLHttpRequest();
req.open("GET" , "articles.json");
req.send();
req.onreadystatechange = function(){
  if (this.status === 200 && this.readyState === 4){
    console.log(this.responseText);
    setTimeout(() => {
      console.log("Data Loaded");
    },0); 
  }
}
// task 2
var req2 = new XMLHttpRequest();
req.open("GET" , "articles.json");
req.send();
req.onreadystatechange = function(){
  if (this.status === 200 && this.readyState === 4){
    var mainData = JSON.parse(this.responseText);
    for (var i = 0 ; i < 5 ; i++){
      mainData[i].category = "All";
    }
    console.log(mainData)
  }
  var updatedData = JSON.stringify(mainData);
  console.log(updatedData)
}
// task 3 
var req2 = new XMLHttpRequest();
req.open("GET" , "articles.json");
req.send();
req.onreadystatechange = function(){
  if (this.status === 200 && this.readyState === 4){
  var div = document.createElement("div");
  div.setAttribute("id" , "data");
  for (var i = 0 ; i < 5 ; i++) {
    var div2 = document.createElement("div");
    var mainData = JSON.parse(this.responseText);
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    h2.innerText = mainData[i].title;
    p.innerText = mainData[i].body;
    p2.innerText = "Author : " + mainData[i].author;
    p3.innerText = "Category : " + mainData[i].category;
    div2.appendChild(h2);
    div2.appendChild(p);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div.appendChild(div2)

}
document.body.appendChild(div);
}
}