<template>
  <highcharts :options="chartOptions"></highcharts>
</template>
<script>
import { Chart } from "highcharts-vue";
import { barCustomSeries } from "@/data/dummy";

export default {
  name: "BarChart",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Olympic Medal Counts - RIO",
        },
        subtitle: {
          text: "Bar chart",
        },
        yAxis: {
          labels: {
            enabled: false,
          },
          gridLineWidth: 0,
        },
        xAxis: {
          categories: ["USA", "GBR", "CHN"],
        },

        legend: {},
        series: barCustomSeries.map((item) => ({
          name: item.name,
          data: item.dataSource.map((e) => {
            return [e.x, e.y];
          }),
        })),
      },
    };
  },
  components: {
    highcharts: Chart,
  },
};
</script>
