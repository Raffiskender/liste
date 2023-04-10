<template>
    <div class="checkbox">
      <input
      type="checkbox"
      :name="name"
      :id="name"
      class="default-checkbox-input"
      @click="check"
      :checked="checked">
      
      <label :for="name">
        <slot></slot>
      </label>
      <span class="checkmark"></span>
    </div>
</template>

<script>
  
export default {
  name: 'CheckBox',
  
  props:{
    name: String,
    toggled: Boolean,
    label: String,
    checked : Boolean,
  },
  
  setup(props, {emit}) {
    const check = () => {
      emit('toggled')
    }
        
    return{
      check,
    }
  }
}

</script>

<style lang="scss" scoped>
div.checkbox{
  //border: 1px red solid;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  &>label{
    display:inline-block;
    position: relative;
    left:-1.6em;
    height:25px;
    //border: 1px red solid;
    //margin-left: 5em;
    z-index: 1;
    padding-left: 1.5em;

    &:hover + .checkmark{
    background-color: rgb(255, 112, 112);
  }
  }
}
.default-checkbox-input{
  margin:0;
  padding:0;
  opacity: 1;
  display:none;
}

.checkmark {
  position: relative;
  left: 0px;
  width: 25px;
  height: 25px;
  background-color: #bbb;
  transition:0.5s;

}
/* On mouse-over, add a grey background color */


/* When the checkbox is checked, add a blue background */
input:checked ~ .checkmark {
  background-color: #c00;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  display: none;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  position: relative;
  top:4px;
  left: 8px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>