<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Antic Slab', sans-serif;
  font-size: 20px;
}

h1 {
  margin-bottom: 30px;
  font-weight: 900;
  font-size: 2.5em;
  text-transform: uppercase;
  line-height: 1.1em;
}

h2 {
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.1em;
  margin-top: 40px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
}

$transitionSpeed: 0.4s;

.page-enter-active,
.page-leave-active {
  transition: opacity $transitionSpeed;

  .sheet {
    transition: margin $transitionSpeed, opacity $transitionSpeed, transform $transitionSpeed;
  }
}
.page-enter,
.page-leave-to {
  .sheet {
    opacity: 0;
    transform: perspective(600px) rotateY(-10deg) translateZ(-30px);
    pointer-events: none;
  }
}
</style>
