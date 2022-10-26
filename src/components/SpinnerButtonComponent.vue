<template>
	<button disabled>
		<div>
		</div>
	</button>
</template>
<script>
export default {
	name : 'SpinnerBtn'
}
</script>

<style lang="scss" scoped>
button{
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
	margin:.2em .5em .2em .5em;
	background: rgb(216, 226, 253);
	border: none;
	width: 8em;
	height: 2.5em;
	//box-shadow: 0px 0px 6px #555;
	transition: 0.3s;
	cursor:pointer;



}
div{
	height: 1.3em;
	width: 1.3em;

  border:3px solid #ff00c8;
  border-top:3px solid rgb(216, 226, 253);
  border-radius:50%;
	
	-webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 1.2s;
  -webkit-animation-name: rotate;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  
  -moz-transition-property: -moz-transform;
  -moz-animation-name: rotate; 
  -moz-animation-duration: 1.2s; 
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  
  transition-property: transform;
  animation-name: rotate; 
  animation-duration: 1.2s; 
  animation-iteration-count: infinite;
  animation-timing-function: linear;}



#html-spinner{
  
}

@-webkit-keyframes rotate {
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
}

@-moz-keyframes rotate {
    from {-moz-transform: rotate(0deg);}
    to {-moz-transform: rotate(360deg);}
}

@keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}


/* Rest of page style*/
body{
  background:#FABC20;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  color:#393D3D;
}

#container{
  width:90%;
  max-width:700px;
  margin:1em auto;
  position:relative;
}

/* spinner positioning */

#html-spinner, #svg-spinner{
  position:absolute;
  top:80px;
  margin-left:-24px;
}





</style>