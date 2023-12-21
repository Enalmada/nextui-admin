# helper for generating admin pages with nextui

Based on the amazing [nextui-dashboard-template](https://github.com/Siumauricio/nextui-dashboard-template).
This repo basically takes that template and:
* abstracts out code that can be considered implementation details, shared, etc
* adds sorting and pagination

It doesn't add modularization for every possible spot.  Feel free to improve it with a PR for anything you need.

## Getting Started
Read the [documentation](https://nextui-admin.vercel.app/guides/getting-started)

See module in use in [nextjs-boilerplate](https://github.com/Enalmada/nextjs-boilerplate)

## TODO
[ ] add slots across sidebar and top nav for arbitrary components
[ ] remove next as a dependency (Image, Router used sidebar)


## Alternatives

[refine](https://refine.dev/) 
* didn't support nextui 

[Mantine-Admin](https://github.com/jotyy/Mantine-Admin)
* at the time, v7 wasn't out with tailwind support

[React-Admin](https://marmelab.com/react-admin/)
* looked really nice but I some features I desired were enterprise.  Wanted something next-ui specific

## Build Notes
* Using [latest module and target settings](https://stackoverflow.com/questions/72380007/what-typescript-configuration-produces-output-closest-to-node-js-18-capabilities/72380008#72380008) for current LTS
* using tsc for types until [bun support](https://github.com/oven-sh/bun/issues/5141#issuecomment-1727578701) comes around

## Contribute
Using [changesets](https://github.com/changesets/changesets) so please remember to run "changeset" with any PR.  
Give consideration for the summary as it is what will show up in the changelog.