<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { $t } from "@/locales";

const active = ref(0);
// 使用 computed 保持视图实时更新
const tabbarData = reactive([
  {
    icon: "wap-home-o",
    title: computed(() => $t("tabbar.home")),
    to: {
      name: "Demo"
    }
  },
  {
    icon: "gem-o",
    title: computed(() => $t("tabbar.tools")),
    to: {
      name: "Tools"
    }
  },
  {
    icon: "user-o",
    title: computed(() => $t("tabbar.about")),
    to: {
      name: "About"
    }
  },
  {
    icon: "user-o",
    title: computed(() => $t("tabbar.my")),
    to: {
      name: "My"
    }
  }
]);
</script>
