<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <template>
                  <h5 class="card-category">Total Shipments</h5>
                </template>

                <template>
                  <h2 class="card-title">Performance</h2>
                </template>
              </div>
            </div>
          </template>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12 col-md-12">
        <card class="card">

          <h4 slot="header" class="card-title mb-4">
            <template> Mis Archivos
              <button class="btn btn-info"> Agregar +</button>
            </template>
          </h4>

          

          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Archivos</th>
                  <th>Nombre</th>
                  <th>ddddd</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <card style="width:100px;"><input type="file" class="form-control"></card>
                  </th>
                  <th>ggg</th>
                  <th>ggg</th>
                 
                </tr>
              </tbody>
            </table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>



<script>
import { Card } from "@/components/index";



export default {
  components: {
    Card,

  
    Card},
};
</script>
<style>
input{
  width: 80px;
}
</style>
