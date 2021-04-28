<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-xl-4" :key="depositoCard.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${depositoCard.type}`" slot="header">
            <i :class="depositoCard.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{depositoCard.title}}</p>
            {{depositoCard.value}}
          </div>
        </stats-card>
      </div>

      <div class="col-md-6 col-xl-4" :key="saqueCard.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${saqueCard.type}`" slot="header">
            <i :class="saqueCard.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{saqueCard.title}}</p>
            {{saqueCard.value}}
          </div>
        </stats-card>
      </div>

      <div class="col-md-6 col-xl-4" :key="saldoCard.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${saldoCard.type}`" slot="header">
            <i :class="saldoCard.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{saldoCard.title}}</p>
            {{saldoCard.value}}
          </div>

        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">

      <div class="col-12">

        <chart-card title="Transações"
                    sub-title="Débitos / Saques"
                    :chart-data="preferencesChart.data"
                    chart-type="Pie">

          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Depósitos
            <i class="fa fa-circle text-warning"></i> Saques
          </div>
        </chart-card>
      </div>
    </div>

  </div>
</template>
<script>
import axios from 'axios';

import Chartist from 'chartist';
export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */

  data() {
    return {
      info : null,
      saldo: 0.0,
      depositoCard: {
        type: "info",
        icon: "ti-money",
        title: "Depósitos Realizados",
        value: 0,
        footerText: "Last day",
        footerIcon: "ti-calendar"
      },
      saqueCard: {
        type: "warning",
        icon: "ti-money",
        title: "Saques Realizados",
        value: 0,
        footerText: "Updated now",
        footerIcon: "ti-reload"
      },
      saldoCard: {
        type: "success",
        icon: "ti-money",
        title: "Saldo",
        value: 0,
        footerText: "In the last hour",
        footerIcon: "ti-timer"
      },
      preferencesChart: {

        options: {}
      }
    };
  },
  created: async function () {
    return axios
      .get('http://127.0.0.1:8000/api/lancamento_conta_valor_grafico_transacoes')
      .then(response => {

       this.preferencesChart.data = {
          labels: ["50%", "50%"],
          series: [50 , 50]
        };


      })
      .catch(error => {
        this.errored = true
      })
      .finally(() => this.loading = false,

      )
  },
  mounted: async function () {
      //return this.firstName + ' ' + this.lastName
    return this.multiple()
  },
  methods: {
    multiple: async function () {
      this.first()
      //this.second()
      //this.obterQuantidadeSaque()
      //this.obterDadosGraficostransacoes()
    },
    first: async function () {
      return axios
        .get('http://127.0.0.1:8000/api/lancamento_conta_saldo')
        .then(response => {
          this.saldoCard.value = response.data.dados
          this.second()
        })
        .catch(error => {
          this.errored = true
        })
        .finally(() => this.loading = false,

        )
    },
    second: async function () {
      return axios
        .get('http://127.0.0.1:8000/api/lancamento_conta_quantidade_deposito')
        .then(response => {
          this.depositoCard.value = response.data.dados;
          this.obterQuantidadeSaque()
        })
        .catch(error => {
          this.errored = true
        })
        .finally(() => this.loading = false,

        )
    },
    obterQuantidadeSaque: async function () {
      return axios
        .get('http://127.0.0.1:8000/api/lancamento_conta_quantidade_saque')
        .then(response => {
          this.saqueCard.value = response.data.dados
          this.obterDadosGraficostransacoes()
        })
        .catch(error => {
          this.errored = true
        })
        .finally(() => this.loading = false,

        )
    },

    obterDadosGraficostransacoes: async function () {
      var quantidadeTotal = (this.depositoCard.value + this.saqueCard.value);
      var porcentagemDeposito = (this.depositoCard.value * 100) / quantidadeTotal;
      var porcentagemSaque = (this.saqueCard.value * 100) / quantidadeTotal;

      //  exibe o valor em duas casas decimais
      porcentagemDeposito = Math.round(porcentagemDeposito * 100) / 100;
      porcentagemSaque = Math.round(porcentagemSaque * 100) / 100;

      //Carrega os dados no gráfico
      /*this.preferencesChart.data.labels[0] = porcentagemDeposito + "%";
      this.preferencesChart.data.labels[1] = porcentagemSaque + "%";*/

      var valorSaque = porcentagemSaque.toString();
      //var arr = ["50.20%", valorSaque+"%"];
      //this.preferencesChart.data.labels = ["50.20%", valorSaque+"%"];
      //this.preferencesChart.data.series = [50 , 50];


    }
  }


};

import { StatsCard, ChartCard } from "@/components/index";

</script>


<style>
</style>
