### Add NPM Token

Add your npm token to your GitHub repository secrets as `NPM_TOKEN`.

### Add Codecov integration

Enable the Codecov GitHub App [here](https://github.com/apps/codecov).

**Remove everything from here and above**

---

# SQL Comment parser

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> Parser for google/sqlcommenter comments

## Install

```bash
npm install sql-comment-parser
```

## Usage

```ts
import { parse } from 'sql-comment-parser';

const { query, comments } = parse("SELECT * FROM FOO /*action='%2Fparam*d',controller='index',framework='spring',traceparent='00-5bd66ef5095369c7b0d1f8f4bd33716a-c532cb4098ac3dd2-01',tracestate='congo%3Dt61rcWkgMzE%2Crojo%3D00f067aa0ba902b7'*/");
//=> query: "SELECT * FROM FOO"
//=> comments: { action: "/param*d", controller: "index", framework: "spring", traceparent: "00-5bd66ef5095369c7b0d1f8f4bd33716a-c532cb4098ac3dd2-01", tracestate: "congo=t61rcWkgMzE,rojo=00f067aa0ba902b7" }
```

The input may or may not include a valid sql comment. This parser will not check the validity of the input and will do a best effort.

[build-img]:https://github.com/Sam-Apostel/sql-comment-parser/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/Sam-Apostel/sql-comment-parser/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/sql-comment-parser
[downloads-url]:https://www.npmtrends.com/sql-comment-parser
[npm-img]:https://img.shields.io/npm/v/sql-comment-parser
[npm-url]:https://www.npmjs.com/package/sql-comment-parser
[issues-img]:https://img.shields.io/github/issues/Sam-Apostel/sql-comment-parser
[issues-url]:https://github.com/Sam-Apostel/sql-comment-parser/issues
[codecov-img]:https://codecov.io/gh/Sam-Apostel/sql-comment-parser/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/Sam-Apostel/sql-comment-parser
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
