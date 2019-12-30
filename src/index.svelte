<script>
    export let symbol
    export let label = null

    const hidden = !label ? true : null

    const rest = {...$$props}
    delete rest.symbol
    delete rest.label
</script>

<span aria-hidden={hidden} aria-label={label} role="img" {...rest}>{symbol}</span>