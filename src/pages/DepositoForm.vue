
<template>
  <card class="card" title="Realizar Depósito">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-3">
            <money v-model="valor_lancamento" v-bind="valor_lancamento"></money>
          </div>

        </div>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="realizarDeposito">
                    Salvar
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      valor_lancamento: ""
    };
  },
  methods: {
    realizarDeposito() {

      let rawData = {
        valor_lancamento: this.valor_lancamento
      }

      return axios
        .post('http://127.0.0.1:8000/api/lancamento_conta_deposito', rawData)
        .then(response => {
          alert(response.data);
          this.$router.go();
        })
        .catch(error => {
          this.errored = true
        })
        .finally(() => this.loading = false,

        )
    }
  }
};
</script>
<style>
</style>
