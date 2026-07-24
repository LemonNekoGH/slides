# Repository Guide

## Purpose

This repository is the owner's personal Slidev workspace and presentation archive. Its decks may cover different topics and be written for different audiences, venues, and occasions. Current deck subjects and directory names are not repository-wide scope or naming requirements. Keep every existing deck buildable and visually faithful, and start with the smallest change that solves the requested presentation or maintenance problem.

## Tooling and Setup

- Treat `mise.toml` and `mise.lock` together as the sole project toolchain authority: `mise.toml` declares the requested Node.js and pnpm versions, while the generated lock records the resolved versions, backends, and available platform assets.
- Commit `mise.lock`. Refresh it with `mise lock node pnpm` after changing a tool version, and never edit it by hand.
- Review and trust the project configuration with `mise trust`, then install both tools with `mise install`.
- In automation or a shell where mise activation is uncertain, run toolchain commands through `mise x --` so a system, Homebrew, Corepack, or other pnpm installation cannot take precedence.
- Do not add `.tool-versions`, `.node-version`, `.nvmrc`, or a `packageManager` version as a second toolchain authority unless a confirmed external consumer requires it.
- Install the workspace with `mise x -- pnpm install --frozen-lockfile`.
- Treat `pnpm-lock.yaml` as generated output: update it with pnpm, never by hand.
- Use current stable dependency releases unless a deck has a confirmed compatibility constraint. Do not adopt prerelease releases by default.
- If registry metadata, a release artifact, or a checksum is inconsistent, stop and report the exact failure. Do not add overrides, patches, vendored packages, alternate URLs, or other dependency-boundary workarounds without explicit approval.

## Repository Layout

- Each directory under `packages/` is an independent deck, and its `slides.md` is the presentation entry point and content source of truth. Do not assume future deck directories must follow the naming pattern used by existing decks.
- `packages/*/public/` contains assets local to that deck. Reference these files from slides with root-relative URLs such as `/image.png`.
- A deck may provide local `components/`, `layouts/`, `utils/`, `vite.config.ts`, or `tsconfig.json`. Keep these customizations package-local unless sharing them is a confirmed requirement.
- `pnpm-workspace.yaml` defines workspace membership and allowed dependency build scripts.
- `packages/20250322-demo-inn/netlify.toml` applies only to that deck. Do not treat it as repository-wide tooling policy or remove it without confirming the deployment is retired.

## Common Commands

Run commands from the repository root.

```sh
mise trust
mise install
mise x -- pnpm install --frozen-lockfile
mise x -- pnpm build
```

Use path filters for individual decks, such as `mise x -- pnpm --filter ./packages/<deck-directory> dev`, `build`, or `export`. Some existing package names are duplicated or do not match their directories, so package-name filters can select the wrong project. When writing a glob directly in a shell command or package script, quote it, for example `mise x -- pnpm --recursive --filter './packages/*' build`.

## Slide Authoring

- Write deck content in Slidev Markdown. Use YAML headmatter/frontmatter and blank-line-padded `---` slide separators.
- Markdown may include Vue templates, `<script setup lang="ts">`, styles, UnoCSS utilities, and Slidev interactions such as `v-click`, `<v-clicks>`, `$clicks`, and `$slidev.nav`.
- Put presenter notes in the final HTML comment block of a slide.
- Before changing content or design, inspect the target deck and confirm its audience, purpose, language, and presentation constraints from the request and local context. Do not infer them from other decks.
- Preserve the language and tone of the deck being edited. Do not translate audience-facing copy or speaker notes unless requested; repository-maintenance documentation is English.
- Prefer existing local components and layouts over duplicating their behavior in `slides.md`.
- Preserve asset filenames and URLs unless every reference is updated and the rendered deck is checked.
- Use two-space indentation, LF line endings, a final newline, single quotes in JavaScript and TypeScript, and no semicolons, matching the existing code.

## Dependencies and Configuration

- Declare dependencies in the leaf deck that imports or invokes them. Do not rely on root dependencies or hoisting to make undeclared imports work.
- Keep `@slidev/cli` and the selected Slidev theme compatible across decks unless a deck has a documented reason to remain separate.
- Keep Carbon Iconify data in decks that use `<carbon-...>` components.
- Do not remove `vite.config.ts` or `tsconfig.json` from the 20260130 deck: its Vue code relies on the configured `~` alias.
- Invalid configuration must fail clearly. Do not silently coerce, replace, or ignore external configuration values.
- When a same-session design decision is replaced, implement the latest decision directly; do not retain compatibility with the abandoned version unless requested.

## Validation

- After any shared dependency or workspace change, run `mise x -- pnpm build` and require all decks to succeed.
- After changing one deck, run its path-filtered build and inspect it in the development server. Step through click animations and transitions, and check videos, images, custom components, and speaker notes affected by the change.
- Run export only when PDF, PNG, or PPTX behavior is relevant; it requires a working Playwright/Chromium environment.
- Run `git diff --check` before finishing.
- This repository currently has no lint, format, unit-test, or dedicated type-check scripts. Do not claim those checks ran. A production build is the automated baseline, not a substitute for visual inspection.
- Do not commit `dist/`, `node_modules/`, `.DS_Store`, or other ignored generated files.

## References

- [Slidev getting started](https://sli.dev/guide/)
- [Slidev Markdown syntax](https://sli.dev/guide/syntax)
- [Slidev components](https://sli.dev/guide/component)
- [Slidev directory structure](https://sli.dev/custom/directory-structure)
- [pnpm workspaces](https://pnpm.io/workspaces)
- [pnpm filtering](https://pnpm.io/filtering)
- [mise lockfiles](https://mise.jdx.dev/dev-tools/mise-lock.html)
