#!/usr/bin/env node

import { argv, env, exit } from "node:process";
import assert from "node:assert";

try {
  // check arguments
  argv.splice(2).forEach((arg) => {
    // equals condition
    const [key, value] = arg.split("=");
    key && assert.equal(env[key], value);
  });
} catch (error) {
  // exit process
  exit(1);
}
