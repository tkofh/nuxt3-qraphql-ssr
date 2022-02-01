<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-else>{{ name }}</p>
    <nuxt-link to="/number">Number</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { useGetNameQuery } from "~/graphql/codegen";
import { useResult } from "~/packages/apollo";

const { loading, result } = useGetNameQuery()
const name = useResult(result, null, data => data.name)
</script>
