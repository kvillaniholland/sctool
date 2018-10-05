[![Build Status](https://travis-ci.org/kvillaniholland/sctool.svg?branch=master)](https://travis-ci.org/kvillaniholland/sctool)
[![Coverage Status](https://coveralls.io/repos/github/kvillaniholland/sctool/badge.svg?branch=master)](https://coveralls.io/github/kvillaniholland/sctool?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Follow The Beat 🎧
A tool for SoundCloud users to track and filter their followers.

## Install dependencies
`npm install`

## Run tests
`npm test`

## Usage
1. Create a .env file (you can use example.env)
2. Populate it with your SoundCloud credentials
3. `npm start`

## Warning
SoundCloud closed their public API a while back, so this was built by inspecting API requests their web app makes and copying them. This is probably against SoundCloud's TOS. Use at your own risk.

## Roadmap
- Finish `LATERS` in codebase
- Improve test coverage (cover everything in `src/data`
- Add configuration interface (so we don't need `.env`)
- Make binaries


## Finding your SoundCloud credentials
![SoundCloud credentials](https://dzwonsemrish7.cloudfront.net/items/0H3l3o0q1b0W1u1K2X3z/Image%202018-10-05%20at%205.32.39%20PM.png?v=18425876)
