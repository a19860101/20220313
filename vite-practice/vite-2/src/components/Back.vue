<template>
<div>
    <a href="#" @click="$router.back()">Back</a> |
    <a href="#" @click="$router.go(1)">Next</a> |
    <a href="#" @click="$router.go(-1)">Prev</a>
</div>
</template>