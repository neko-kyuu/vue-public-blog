<template>
    <div>
        this is the todo list. {{clickedDate.value}}
    </div>
</template>

<script>
export default {
    name:'Todo',
    props: ['clickedDate'],

}
</script>

<style scoped>

</style>