<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-else>{{ number }}</p>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { useGetNumberQuery } from "~/graphql/codegen";
import { useResult } from "~/packages/apollo";

const { loading, result } = useGetNumberQuery()
const number = useResult(result, null, data => data.number)
</script>
