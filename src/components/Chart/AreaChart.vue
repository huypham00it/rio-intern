<template>
  <highcharts :options="chartOptions"></highcharts>
</template>
<script>
import { Chart } from "highcharts-vue";
import { areaCustomSeries } from "@/data/dummy";

export default {
  name: "AreaChart",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "areaspline",
          height: 600,
        },
        title: {
          text: "Inflation Rate in percentage",
        },
        softThreshold: true,
        subtitle: {
          text: "Area chart",
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
          },
          min: 0,
          max: 4,
          categories: [],
        },
        series: areaCustomSeries.map((item) => ({
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
