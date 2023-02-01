# SQL Comment parser

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

Javascript parser for google/sqlcommenter comments.
Learn how to add comments to SQL queries made by Laravel at [laravel-sql-commenter](https://github.com/spatie/laravel-sql-commenter).

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/spatiebe.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/spatie.be)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Installation

```bash
npm install sql-comment-parser
```

```bash
yarn add sql-comment-parser
```

## Usage

```ts
import { parse } from 'sql-comment-parser';

const { query, comments } = parse("SELECT * FROM FOO /*action='%2Fparam*d',controller='index',framework='spring',traceparent='00-5bd66ef5095369c7b0d1f8f4bd33716a-c532cb4098ac3dd2-01',tracestate='congo%3Dt61rcWkgMzE%2Crojo%3D00f067aa0ba902b7'*/");
//=> query: "SELECT * FROM FOO"
//=> comments: { action: "/param*d", controller: "index", framework: "spring", traceparent: "00-5bd66ef5095369c7b0d1f8f4bd33716a-c532cb4098ac3dd2-01", tracestate: "congo=t61rcWkgMzE,rojo=00f067aa0ba902b7" }
```

The input may or may not include a valid sql comment. This parser will not check the validity of the input and will do a best effort.


## Changelog

Please see [releases](https://github.com/spatie/sql-comment-parser/releases) for more information what has changed recently.

## Testing

```bash
npm run test
```

## Contributing

Please see [CONTRIBUTING](https://github.com/spatie/.github/blob/main/CONTRIBUTING.md) for details.

## Security

If you've found a bug regarding security please mail [security@spatie.be](mailto:security@spatie.be) instead of using the issue tracker.

## Credits

- [Sam Apostel](https://github.com/Sam-Apostel)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.



[build-img]:https://github.com/spatie/sql-comment-parser/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/spatie/sql-comment-parser/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/sql-comment-parser
[downloads-url]:https://www.npmtrends.com/sql-comment-parser
[npm-img]:https://img.shields.io/npm/v/sql-comment-parser
[npm-url]:https://www.npmjs.com/package/sql-comment-parser
[issues-img]:https://img.shields.io/github/issues/spatie/sql-comment-parser
[issues-url]:https://github.com/spatie/sql-comment-parser/issues
[codecov-img]:https://codecov.io/gh/spatie/sql-comment-parser/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/spatie/sql-comment-parser
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
