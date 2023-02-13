<script>
    export let height;
</script>

<div class="flex-center white-bg blue-text blue-border standard-box-padding" style="height: {height}px">
    <slot />
</div>

<style>
    .blue-border {
        border: 3px solid #0e4482;
    }

    .flex-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .blue-text {
        color: #0e4482;
    }

    .standard-box-padding {
        padding: 0px 20px;
    }

    @media screen and (min-width: 500px) {
        .standard-box-padding {
            padding: 0 30px;
        }
    }

    .white-bg {
        background-color: white;
    }
</style>
