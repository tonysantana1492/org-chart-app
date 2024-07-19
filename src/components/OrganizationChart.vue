<template>
        <organization-chart
          :datasource="records"
          :pan="true"
          :zoom="true"
          :zoomin-limit="1"
        >
          <template slot-scope="{ nodeData }">
            <div
              :style="{ borderTop: `5px solid ${nodeData.color}` }"
              :class="['node-box', nodeData.id == '1' ? 'parent' : '']"
            >
              <img class="node-image" :src="nodeData.image" :alt="nodeData.name" />
              <div class="text-container">
                <span class="text-name">{{ nodeData.name }}</span>
                <span class="text-role">{{ nodeData.type }}</span>
              </div>
            </div>
          </template>
        </organization-chart>
  </template>
  
  <script>
  import OrganizationChart from "vue-organization-chart";
  import "vue-organization-chart/dist/orgchart.css";
  import data from "../assets/records_for_test.json";
  import { transformDataToHierarchy } from "../utils";
  
  export default {
    components: {
      OrganizationChart,
    },
    data() {
      return {
        records: transformDataToHierarchy(data),
      };
    },
  };
  </script>
  
  <style>
  @import "../styles/main.css";
  </style>