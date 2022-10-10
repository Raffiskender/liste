<template>
    <div class="loading">
        <div class="loading__circle loading__circle--color-blue"></div>
        <div class="loading__circle loading__circle--color-red"></div>
    <div class="loading__circle loading__circle--color-yellow"></div>
		<div class="loading__circle loading__circle--color-green"></div>
	</div>
</template>

<script>
export default {
    name: 'LoadingView',
}
</script>

<style lang="scss" scoped>
.loading {
  margin: 50% auto;
  padding: 0.625rem;
  display: flex;
  justify-content: center;
    align-items: center;
}

.loading__circle {
  width: 2rem;
  height: 2rem;
  background-color: lightgrey;
  border-radius: 50%;
  margin: 0 0.375rem;
    animation-name: bump; 
    animation-duration: 2s; 
    animation-iteration-count: infinite; 
}

.loading__circle--color-blue {
  background-color: #4285f4;
    animation-delay:0;

}
.loading__circle--color-red {
  background-color: #ea4335;
  animation-delay:0.5s;
}
.loading__circle--color-yellow {
  background-color: #fbbc05;
  animation-delay:1s;
    
}
.loading__circle--color-green {
  background-color: #34a853;
  animation-delay:1.5s;
}

@keyframes bump {
    from {
    transform: scale(1);
    }
    25% {
    transform: scale(1.4);
    }
    50%{
    transform: scale(1);
    }
    100%{
    transform:scale(1);
    }
}
</style>