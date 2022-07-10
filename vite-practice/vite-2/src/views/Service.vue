<template>
<div>
    <h1>Service</h1>
    <nav>
        <router-link :to="{
            name: 'service.first'
        }">First</router-link>
        <router-link :to="{
            name: 'service.second'
        }">Second</router-link>
        <router-link :to="{
            name: 'service.third'
        }">Third</router-link>
    </nav>
    <router-view></router-view>
</div>
</template>