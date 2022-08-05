# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


# bibx
Open-source and free bibliography generator similar to easybib.com. No ads or tracking.

Written in Svelte and vite, hosted on github pages, 

To use, go to [bibx.io](bibx.io). 

It's a little early but I really like bun so you should also have that installed (bun.sh)

To install this project locally, run:
```bash
git clone https://github.com/xavierclarkvt/bibx.git
cd bibx; bun install;
```

And to start, run:
```bash
bun run dev;
```

In case you haven't already:
- you should use vscode for your editor
  - make sure you have the svelte extension installed

TODO: Add links to all of the stuff referenced (bun, vscode, extension)

<img width="1104" alt="image" src="https://user-images.githubusercontent.com/70333748/178888015-2a2e851e-3d83-4c02-b4e1-f14f886a317f.png">


## Deployment

To deploy the current state of main to production (Github Pages), create a new release with a new tag. TODO: Add pictures with step by step.
