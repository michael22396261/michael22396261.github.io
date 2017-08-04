let links = ["https://i2.kknews.cc/large/1e1b0007725c7ca58fdc",
"https://i2.kknews.cc/large/1f82000109bc0d1e995c",
 "https://i0.wp.com/overdope.com/wp-content/uploads/2017/07/2017-07-05_145247.jpg?fit=560%2C352",
 "https://i1.kknews.cc/large/2c26000332f98b9c2790",
 "https://ximg.smso.cc/wp-content/uploads/2017/07/7c5704d296de4324985ed06937494650_th.jpg",
 " http://img2.hsbaodi.com/201706/22/11/kkhcgnf0c1b61938.jpg"            
];
let titles = ["導師群", "Rap of China", "hip hop man", "你有freestyle嗎?", "百萬cp","最喜歡的導師","熱狗 阿岳"];
let index = 0;
let autoplay = false;
function prevPic() {
 console.log("nextPic: " + index);
  let img = document.getElementById("pic");
   if(index< 1){
   index = 6
  }
  index--;
  img.src = links[index% links.length];
  
  let title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  console.log(title);
 

}

function nextPic() {
  console.log("nextPic: " + index);
  let img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  
  let title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  console.log(title);
  
  if(autoplay) {
    setTimeout(nextPic, 3000);
  }
}

if(autoplay) {
    setTimeout(nextPic, 3000);
}






