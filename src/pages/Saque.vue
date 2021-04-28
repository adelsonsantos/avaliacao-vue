<template>
  <div className="row">
    <div className="col-xl-12 col-lg-7 col-md-6">
      <saque-form>

      </saque-form>

    </div>
  </div>
</template>
<script>
import SaqueForm from "./SaqueForm.vue";
import money from 'v-money'
import FlashMessage from '@smartweb/vue-flash-message';

export default {
  components: {
    SaqueForm,
    money
  }
};
</script>
<style>
</style>
