<template>
  <highcharts :options="chartOptions"></highcharts>
</template>
<script>
import { Chart } from "highcharts-vue";
import { lineCustomSeries } from "@/data/dummy";

export default {
  name: "LineChart",
  data() {
    return {
      chartOptions: {
        title: {
          text: "Inflation Rate",
        },
        subtitle: {
          text: "Line chart",
        },
        xAxis: {
          categories: [],
        },
        yAxis: {
          gridLineWidth: 0,
          title: {
            text: "%",
          },
          labels: {
            format: "{value}%",
            step: 20,
          },
          min: 0,
          max: 100,
          categories: [],
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        },
        series: lineCustomSeries.map((item) => ({
          name: item.name,
          data: item.dataSource.map((e) => [e.x.getFullYear(), e.y]),
        })),
      },
    };
  },
  components: {
    highcharts: Chart,
  },
};
</script>
