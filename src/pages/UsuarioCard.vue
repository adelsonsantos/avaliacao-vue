<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/background.png" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/faces/foto-3.png" alt="...">
        <h4 class="title">{{usuario.nm_cliente}}
          <br>
        </h4>
      </div>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div  class="col-lg-3 offset-lg-1">
          <h5>{{usuario.nm_banco}}
            <br>
            <small>Banco</small>
          </h5>
        </div>

        <div class="col-lg-4">
          <h5>{{usuario.nu_agencia}}
            <br>
            <small>Agência</small>
          </h5>
        </div>

        <div  class="col-lg-3">
          <h5>{{usuario.nu_conta}}
            <br>
            <small>Conta</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: {
        nm_cliente: "",
        nu_agencia: "",
        nu_conta: "",
        nm_banco: ""
      }
    };
  },
  created: async function () {
    return this.consultarDadosConta()
  },
  methods: {
    consultarDadosConta: async function () {
      return axios
        .get('http://127.0.0.1:8000/api/conta')
        .then(response => {
            this.usuario.nm_cliente = response.data.nm_cliente;
            this.usuario.nu_agencia = response.data.nu_agencia;
            this.usuario.nu_conta = response.data.nu_conta;
            this.usuario.nm_banco = response.data.nm_banco;
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
