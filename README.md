# bibx
Open-source and free bibliography generator similar to easybib.com. No ads or tracking. [Try it out here!](https://bibx.io/)

Written in [Svelte](https://svelte.dev/) and [Typescript](https://www.typescriptlang.org/), compiled by [SvelteKit](https://kit.svelte.dev/), using [Tailwind](https://tailwindcss.com/) / [DaisyUI](https://daisyui.com/) for styling and [Playwright](https://playwright.dev/) for testing. 

Graciously hosted by [Github Pages](https://pages.github.com/).

*DOCS: [Requirements](docs/requirements.md), [Schedule](docs/schedule.md), [Design and Architecture](docs/design_architecture.md)*  

To install this project locally, run:
```bash
curl https://bun.sh/install | bash; #install bun, unnessecary if you already have it
git clone https://github.com/xavierclarkvt/bibx.git;
cd bibx; bun install;
```

And to start, run:
```bash
bun run dev;
```

If you intend to submit a PR, make sure you're using VSCode and a few specific settings:
- Install the following extensions:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- Add the following to your VSCode Settings (CMD/CTRL-SHIFT-P -> "Preferences: Open Default Settings (JSON)):
```json
  "svelte.enable-ts-plugin": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  }
```

## Deployment

To deploy the current state of main to production (Github Pages), create a new release with a new tag.
