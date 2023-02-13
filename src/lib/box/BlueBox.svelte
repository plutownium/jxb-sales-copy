<script>
</script>

<div class="flex-center blue-bg white-text standard-box-padding">
    <slot />
</div>

<style>
    .blue-bg {
        background-color: #0e4482;
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
            padding: 36px 100px;
        }
    }

    .white-text {
        color: white;
    }
</style>
