var rbt = new Audio ('img/eTas.mpeg');

function addone(){
  var count = document.getElementById('thisone').innerHTML;
	count++;
	// memberikan getaran pada saat ditekan
  navigator.vibrate([100]); 
  // rbt.currentTime = 0; //untuk menghilangkan jeda rbt
  // rbt.play(); //rbt play
  document.getElementById('thisone').innerHTML = count;
  if (count == 100){
  	alarm();
  }
}

function reset(){
  document.getElementById('thisone').innerHTML = 0;
}

function alarm(){
  rbt.play();
}
