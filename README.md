# Check Environment Variables (CLI)

This CLI was created having a specific case. I had a script like

```
"prepare":"husky install"
```

and I wanted to run it only during non-production install ( because husky was a dev dependency )

So then I thought - it would be nice to check environment variable NODE_ENV which is prefilled with production value in case of using --production flag for npm install

Then I decided to solve this task in a generiс way with this module

## Usage

For the mentioned above problem now my code looks like this:

```
"prepare":"check NODE_ENV=production || husky install"
```

So as you see it's a very minimalistic implementation without complicated conditions or OS-dependent if statements but allowing to use any environment variable.
You can also wrap it to another script for reusability. Another trick is to use it via npx - thus you won't need to declare this module as a global depenendcy for your package.

```
    "prepare": "npm run is-prod || husky install",
    "is-prod": "npx -y check-env-cli NODE_ENV=production"
```
