<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-15 19:47:27
 * @LastEditors: 郑钊宇
 * @Description: 标签组件
-->
<template>
  <md-card
    class="md-card-tabs"
    :class="[
      { 'flex-column': flexColumn },
      { 'nav-pills-icons': navPillsIcons },
      { 'md-card-plain': plain }
    ]"
  >
    <md-card-header slot="header-title" />

    <md-card-content>
      <md-list class="nav-tabs">
        <md-list-item
          v-for="(item, index) in tabName"
          :key="item"
          :class="[
            { active: isActivePanel(tabName[index]) },
            { [getColorButton(colorButton)]: isActivePanel(tabName[index]) }
          ]"
          @click="switchPanel(tabName[index])"
        >
          {{ tabName[index] }}
          <md-icon v-if="navPillsIcons">{{ tabIcon[index] }}</md-icon>
        </md-list-item>
      </md-list>

      <transition name="fade" mode="out-in">
        <div class="tab-content">
          <div
            v-for="(item, index) in tabName"
            :key="item"
            :class="getTabContent(index + 1)"
          >
            <!-- v-if="isActivePanel(tabName[index])" -->
            <slot :name="getTabContent(index + 1)">
              This is the default text!
            </slot>
          </div>
        </div>
      </transition>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: {
    flexColumn: Boolean,
    navPillsIcons: Boolean,
    plain: Boolean,
    tabName: Array,
    tabIcon: Array,
    colorButton: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activePanel: this.tabName[0]
    }
  },
  methods: {
    switchPanel(panel) {
      this.activePanel = panel
    },
    isActivePanel(panel) {
      return this.activePanel === panel
    },
    getColorButton: function(colorButton) {
      return 'md-' + colorButton + ''
    },
    getTabContent: function(index) {
      return 'tab-pane-' + index + ''
    }
  }
}
</script>

<style lang="css"></style>
