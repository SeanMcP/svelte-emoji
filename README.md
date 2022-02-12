# svelte-emoji

[![npm](https://img.shields.io/npm/v/svelte-emoji.svg)](https://npmjs.com/package/svelte-emoji) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/svelte-emoji.svg)](https://npmjs.com/package/svelte-emoji) [![npm](https://img.shields.io/npm/dt/svelte-emoji.svg)](https://npmjs.com/package/svelte-emoji)

🎀 An accessible Emoji component for Svelte applications

## Why?
Emojis can add a light playfulness to your project but require some specific formatting in order to ensure they are accessible for all users. `svelte-emoji`'s reusable `Emoji` component helps you do that quickly and painlessly.

This component was ported to Svelte from [`a11y-react-emoji`](https://npm.im/a11y-react-emoji).

## Installation
Add `svelte-emoji` to your project:

```sh
npm install -D svelte-emoji
# or
yarn add -D svelte-emoji
```

## Use
Import `Emoji`, a default export, from `svelte-emoji` and add it to your code:

```jsx
<script>
    import Emoji from `svelte-emoji`
</script>

<footer>
    Made with
    {' '}
    <Emoji symbol="💕" label="love" />
    {' '}
    by Sean McPherson
</footer>
```

## Emoji component
The `Emoji` component consumes two props: `symbol` and `label`. Every other prop is spread to the top-level `<span>` element.

## License

[MIT](/LICENSE)
