<template>
  <div id="app">
    <date-range-picker v-model="pickerDates">
      <template v-slot:input="pickerDates"
        >{{ pickerDates.startDate | date }} -
        {{ pickerDates.endDate | date }}</template
      >
    </date-range-picker>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
  name: "App",
  components: {
    DateRangePicker,
  },
  data() {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 6);

    return {
      pickerDates: {
        startDate,
        endDate,
      },
    };
  },
  filters: {
    date(date) {
      return new Intl.DateTimeFormat("en-US").format(date);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
