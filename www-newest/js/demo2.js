var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');
function nearby(){

    //open and close menu when the button is clicked
    handler();
	nearopen = true;

	button.addEventListener('click', closeWrapper, false);



}
function closeWrapper(){
	if(nearopen){
		classie.remove(wrapper, 'opened-nav');
		$("#cn-button").css("display","none");

	}
	else{handler();}
	nearopen = !nearopen;

}
	function handler(){
/*	  if(!open){*/
    //this.innerHTML = "Close";
    classie.add(wrapper, 'opened-nav');
/*	  }
  else{
    this.innerHTML = "Menu";
	classie.remove(wrapper, 'opened-nav');
  }
  open = !open;*/
}