<template>
  <div class="row">
    <div class="col-xl-12 col-lg-7 col-md-6">
      <deposito-form>

      </deposito-form>
    </div>
  </div>
</template>
<script>
import DepositoForm from "./DepositoForm.vue";
import money from 'v-money'
export default {
  components: {
    DepositoForm,
    money
  }
};
</script>
<style>
</style>
