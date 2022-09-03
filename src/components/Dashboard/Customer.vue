<template>
  <div class="p-8">
    <table class="table" id="datatable"></table>
  </div>
</template>
<script>
import { customersData } from "@/data/dummy";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
export default {
  mounted() {
    this.custormers = customersData;
    $("#datatable").DataTable({
      data: customersData,
      columns: [
        { title: "Customer ID", data: "CustomerID" },
        {
          title: "Name",
          data: "CustomerName",
        },
        { title: "Email", data: "CustomerEmail" },
        { title: "Project Name", data: "ProjectName" },
        {
          title: "Status",
          data: "Status",
        },
        { title: "Weeks", data: "Weeks" },
        {
          title: "Budget",
          data: "Budget",
        },
      ],
      rowCallback: function (row, data) {
        const statusRow = $(row).find("td:eq(4)");
        const nameRow = $(row).find("td:eq(1)");
        nameRow.html(`
        <div class="flex items-center">
        <img class="w-12 h-12 rounded-full mr-3" src="${data.CustomerImage}" />
        <span>${data.CustomerName}</span>
        </div>`);

        statusRow.css("color", data.StatusBg);
        statusRow.addClass("flex items-center gap-2");
        statusRow.html(
          `<div class='w-2.5 h-2.5 rounded-full' style="background-color: ${data.StatusBg}"></div><span>${data.Status}</span>`
        );
      },
    });
  },
  data: function () {
    return {
      custormers: [],
    };
  },
};
</script>
