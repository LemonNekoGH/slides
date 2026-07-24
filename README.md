# Welcome to LemonNeko's slides!

## Development

Node.js and pnpm are managed by mise using `mise.toml` and the committed
`mise.lock`.

```sh
mise trust
mise install
mise x -- pnpm install --frozen-lockfile
mise x -- pnpm build
```

After changing a tool version in `mise.toml`, refresh the generated lockfile
with `mise lock node pnpm`.

## Contents

- [Flow Chat Demo Inn 20250322](./packages/20250322-demo-inn/slides.md)
- [Flow Chat Demo Inn 20250727](./packages/20250727-demo-inn/slides.md)
