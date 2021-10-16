<template>
  <div class="content">
    <div class="row">
      <div class="col-md-6">
        <card>
          <template slot="header">
            <h4>Notifications Style</h4>
          </template>
        </card>
      </div>
      <div class="col-md-6">
        <card class="row">
          <div class="col-12">
          <h4 slot="header">Notifications states</h4>
          </div>

        </card>
      </div>
      <div class="col-md-12">
        <card>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto text-center">
              <h4 class="card-title">
                Notifications Places
                <p class="category">Click to view notifications</p>
              </h4>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Card
} from "@/components/index";




export default{
  components:{
    Card
  },
 
  
}
</script>
<style>
</style>
