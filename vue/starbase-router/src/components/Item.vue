<template>
  <div class="col-md-4">
    <div class="item-card">
      <div class="card-block">
        <h4 class="card-title">{{item.name}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['item']
  }
</script>
