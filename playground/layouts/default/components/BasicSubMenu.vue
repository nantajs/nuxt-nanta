<template>
  <div>
    <a-menu-item v-if="!menuHasChildren(item) && getShowMenu" :key="item.key">
      <template #icon>
        <Icon :icon="item.icon" />
      </template>
      <span>
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
      </span>
    </a-menu-item>
    <SubMenu v-if="menuHasChildren(item) && getShowMenu" :key="item.key" popupClassName="app-top-menu-popup">
      <template #title>
        <span>
          <Icon :icon="item.icon" />
          {{ item.name }}
        </span>
      </template>
      <!-- eslint-disable-next-line vue/no-v-for-template-key -->
      <template v-for="childrenItem in item.children || []" :key="childrenItem.key">
        <BasicSubMenu v-bind="$props" :item="childrenItem" />
      </template>
    </SubMenu>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { SubMenu } from 'ant-design-vue';
import { Menu } from "../../types/type";
import { PropType } from "~~/types/global";
import { Icon } from "@nanta/ui"
const props = defineProps({
  item: {
    type: Object as PropType<Menu>,
    default: {},
  },
});

const getShowMenu = computed(() => !props.item.hideMenu);
function menuHasChildren(menuTreeItem: Menu): boolean {
  return (
    Reflect.has(menuTreeItem, "children") &&
    !!menuTreeItem.children &&
    menuTreeItem.children.length > 0
  );
}
</script>
