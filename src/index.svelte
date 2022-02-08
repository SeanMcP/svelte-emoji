<script>
    export let symbol
    export let label = null

    const hidden = !label ? true : null
</script>

<span aria-hidden={hidden} aria-label={label} role="img" {...$$restProps}>{symbol}</span>
