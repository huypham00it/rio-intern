<template>
  <highcharts :options="chartOptions"></highcharts>
</template>
<script>
import { Chart } from "highcharts-vue";
import { pieChartData } from "@/data/dummy";

export default {
  name: "PieChart",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "pie",
        },
        title: {
          text: "Project Cost Breakdown",
        },
        subtitle: {
          text: "Pie chart",
        },
        legend: {},
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            },
            slicedOffset: 10,
          },
        },
        series: [
          {
            innerSize: "50%",
            data: pieChartData.map((item) => {
              if (item.x == "Production") {
                return {
                  name: item.x,
                  y: item.y,
                  selected: true,
                  sliced: true,
                };
              }
              return {
                name: item.x,
                y: item.y,
              };
            }),
          },
        ],
      },
    };
  },
  components: {
    highcharts: Chart,
  },
};
</script>
