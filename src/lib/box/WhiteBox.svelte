<script>
</script>

<div class="flex-center white-bg blue-text blue-border standard-box-padding">
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
        padding: 16px 20px;
    }

    @media screen and (min-width: 500px) {
        .standard-box-padding {
            padding: 26px 30px;
        }
    }

    .white-bg {
        background-color: white;
    }
</style>
