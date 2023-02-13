<script>
    console.log("foo!");
</script>

<div class="flex flex-col centering">
    <h2>Give us your <span class="underline">best</span> email so we can send you our FREE report!</h2>
    <div class="flex flex-col-on-mobile input-container debug1">
        <div class="m-2">
            <input class="p-3" placeholder="Your Best Email" type="text" />
        </div>
        <div class="m-2">
            <input class="p-3" placeholder="Your First Name" />
        </div>
    </div>
    <button class="cta-btn">Get My FREE Report</button>
</div>

<style>
    .cta-btn {
        color: white;
        font-size: 18px;
        margin: 12px;
        height: 64px;
        width: 218px;
        background-color: #d44445;
        border-radius: 12px;
    }

    .centering {
        justify-content: center;
        align-items: center;
    }

    .flex {
        display: flex;
    }

    .flex-col {
        flex-direction: column;
    }

    @media screen and (max-width: 800px) {
        .flex-col-on-mobile {
            flex-direction: column;
        }
    }

    .h-12 {
        height: 36px;
    }

    input {
        border-radius: 5px;
        border: 3px solid #ffd300;
        height: 24px;
        font-size: 18px;
    }

    .input-container {
        margin-bottom: 20px;
    }

    .m-2 {
        margin: 6px;
    }

    .p-3 {
        padding: 8px;
    }

    .underline {
        text-decoration: underline;
    }
</style>
