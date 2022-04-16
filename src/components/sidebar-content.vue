<script>
  export default {
    props:{
      contents: Array,
      more: Boolean
    }
  }
</script>

<template>
  <div>
    <div v-for="(content, index) in contents" :key="index" class="mb-3">
      <div class="card">
        <div class="card-body">
          <h3>{{content.name}}</h3>
          <div class="content-body">
            <div v-for="(val, index) in content.data" :key="index">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label" for="flexCheckDefault">
                  {{val.name}}
                </label> {{' '}}
                <span class="muted-text">
                  {{'(' + val.value + ')'}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="more-button" v-if="more == true">
      <span class="text">More</span>
      <i class="fa-solid fa-angle-down"></i>
    </div>
  </div>
</template>