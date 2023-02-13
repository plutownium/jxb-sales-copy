<script>
    import AttentionGrabber from "../lib/text/AttentionGrabber.svelte";
    import SqueezeHeadline from "../lib/text/SqueezeHeadline.svelte";
</script>

<main>
    <!-- squeeze page  -->
    <SqueezeHeadline />
    <p>
        Learn about the day of a junior developer, who only started his role <span class="underline">three weeks</span> prior.
    </p>
    <p>
        Find out what the work day of a senior developer with only <span class="underline">four years</span> of experience
        is like.
    </p>
    <p>And finally discover what it’s like to be a lead developer who manages twelve other programmers!</p>
</main>

<style>
    .underline {
        text-decoration: underline;
    }
</style>
