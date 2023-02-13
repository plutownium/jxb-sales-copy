<script>
</script>

<div class="flex-center white-bg blue-text blue-border-dotted standard-box-padding">
    <slot />
</div>

<style>
    .white-bg {
        background-color: white;
    }

    .blue-border-dotted {
        border: 3px dotted #0e4482;
    }

    .flex-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .standard-box-padding {
        padding: 25px 20px;
    }

    @media screen and (min-width: 500px) {
        .standard-box-padding {
            padding: 25px 30px;
        }
    }

    .blue-text {
        color: #0e4482;
    }
</style>
