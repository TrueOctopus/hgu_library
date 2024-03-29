<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-28 19:53:37
 * @LastEditTime: 2023-01-01 18:37:22
 * @LastEditors: 郑钊宇
 * @Description: 分页组件
-->
<template>
  <ul class="pagination" :class="paginationClass">
    <li
      class="page-item prev-page"
      :class="{ disabled: value === 1, 'no-arrows': noArrows }"
    >
      <a class="page-link" aria-label="Previous" @click="prevPage">
        <template v-if="withText">Prev</template>
        <i v-else class="fas fa-angle-double-left" />
      </a>
    </li>
    <li
      v-for="item in range(minPage, maxPage)"
      :key="item"
      class="page-item"
      :class="{ active: value === item }"
    >
      <a class="page-link" @click="changePage(item)">{{ item }}</a>
    </li>
    <li
      class="page-item page-pre next-page"
      :class="{ disabled: value === totalPages, 'no-arrows': noArrows }"
    >
      <a class="page-link" aria-label="Next" @click="nextPage">
        <template v-if="withText">Next</template>
        <i v-else class="fas fa-angle-double-right" />
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: value => {
        return [
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info',
          'rose'
        ].includes(value)
      }
    },
    withText: Boolean,
    noArrows: Boolean,
    pageCount: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      defaultPagesToDisplay: 5
    }
  },
  computed: {
    paginationClass() {
      return `pagination-${this.type}`
    },
    totalPages() {
      if (this.pageCount > 0) return this.pageCount
      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage)
      }
      return 1
    },
    pagesToDisplay() {
      if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
        return this.totalPages
      }
      return this.defaultPagesToDisplay
    },
    minPage() {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2)
        const newMaxPage = pagesToAdd + this.value
        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.pagesToDisplay + 1
        }
        return this.value - pagesToAdd
      } else {
        return 1
      }
    },
    maxPage() {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2)
        const newMaxPage = pagesToAdd + this.value
        if (newMaxPage < this.totalPages) {
          return newMaxPage
        } else {
          return this.totalPages
        }
      } else {
        return this.pagesToDisplay
      }
    }
  },
  watch: {
    perPage() {
      this.$emit('input', 1)
    },
    total() {
      this.$emit('input', 1)
    }
  },
  methods: {
    range(min, max) {
      const arr = []
      for (let i = min; i <= max; i++) {
        arr.push(i)
      }
      return arr
    },
    changePage(item) {
      this.$emit('input', item)
      // console.log(item)
      window.sessionStorage.setItem('pageNo', item)
    },
    nextPage() {
      if (this.value < this.totalPages) {
        this.$emit('input', this.value + 1)
        window.sessionStorage.setItem('pageNo', this.value + 1)
      }
    },
    prevPage() {
      if (this.value > 1) {
        this.$emit('input', this.value - 1)
        window.sessionStorage.setItem('pageNo', this.value + 1)
      }
    }
  }
}
</script>
