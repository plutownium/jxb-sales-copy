<script>
    export let bolded;
    // export let text;
</script>

<h3 class="m-0"><span class="black-font font-bold">{bolded}</span> <slot /></h3>

<style>
    .black-font {
        color: black;
    }

    .m-0 {
        margin: 0;
    }
</style>
