# Async local storage

Alright, so I have a situation in which Async local storage is not working when the module using the store is `required` inside an async function and I am debugging the code using the `--inspect` flag.

The initial description may sound confusing, but let me try to break it up.

## Environment for the problem

- Node.js version is `18.8.0`.
- Running code in debug mode using `--inspect` flag.
- The debugger window should be open to reproduce the issue.

## The root cause (I am able to pin-point so far)

- Inside the `main.js` file, I have an async function called `requireModuleA` which uses CJS to require the `module_a.js` file.
- If I make that method synchronous, then all seems to work fine.
- If I move the `require` call to the top of the file, then also all seems to work fine.
- If I keep the method async, but do not turn on debugging mode, then also everything works fine.

Basically, it is a combination of `debugging` + `async method requiring module`.

## How to run the code

- Clone the repo.
- Run `node --inspect main.js`.