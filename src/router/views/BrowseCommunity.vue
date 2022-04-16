<script>
  import SidebarContent from "@/components/sidebar-content.vue"
  import SearchBar from "@/components/search-bar.vue"
  import Sidebardata from "@/components/sidebar-data.json"
  import Userdata from "@/components/user-data.json"
  import Sidebaryears from "@/components/sidebar-years.json"

  export default {
    components: { SidebarContent, SearchBar },
    data(){
      return{
        contents: Sidebardata,
        content: Sidebaryears,
        users: Userdata
      }
    }
  }

</script>

<template>
  <div class="content-wrapper inner-content-top">
    <div class="row">
      <SearchBar />
    </div>

    <div class="row">
      <div class="col-md-4" data-spy="affix" data-offset-top="197">
        <div class="card sidebar-nav">
          <div class="card-body">
            <SidebarContent :contents="contents" :more="true"/>
            <SidebarContent :contents="content" :more="false" class="mt-3"/>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="card user-view">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4 col-sm-6" v-for="(user, index) in users" :key="index">
                <div class="card-body">
                  <div class="top-card">
                    <div class="img-placeholder">
                      <span class="img-placeholder-text">{{user.first_name.charAt(0)}}{{user.last_name.charAt(0)}}</span>
                    </div>
                  </div>
                  <div class="bottom-card">
                    <h3 class="text-center mt-3 mb-4">{{user.first_name}} {{user.last_name}}</h3>
                    <div class="legend">
                      <span class="">Message</span>
                      <i class="fa-solid fa-comment-dots"></i>
                    </div><!--end of mssg-->
                    <div class="legend legend-alt mt-2">
                      <span class="">View profile</span>
                      <i class="fa-solid fa-user"></i>
                    </div><!--end of mssg-->
                  </div>
                </div><!--end of card-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>