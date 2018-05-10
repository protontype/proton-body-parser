[![npm version](https://badge.fury.io/js/proton-body-parser.svg)](https://badge.fury.io/js/proton-body-parser)

# Express body-parser middleware for Protontype

This module wraps [body-parser](https://github.com/expressjs/body-parser) Nodejs module for use into a [Protontype](https://protontype.github.io/) project

## Middlewares
- **JsonBodyParserMiddleware**: Equivalent to [JSON body parser](https://github.com/expressjs/body-parser/blob/master/README.md#bodyparserjsonoptions)
- **RawBodyParserMiddleware**: Equivalent to [Raw body parser](https://github.com/expressjs/body-parser/blob/master/README.md#bodyparserrawoptions)
- **TextBodyParserMiddleware**: Equivalent to [Text body parser](https://github.com/expressjs/body-parser/blob/master/README.md#bodyparsertextoptions)
- **UrlBodyParserMiddleware**: Equivalent to [URL-encoded form body parser](https://github.com/expressjs/body-parser/blob/master/README.md#bodyparserurlencodedoptions)

### How to Use

```typescript
let app = new ProtonApplication().addMiddlewareAs(JsonBodyParserMiddleware)
app.start();
```

With options:

```typescript
let middlewareWithOptions = new JsonBodyParserMiddleware({ type: 'application/*+json' });
let app = new ProtonApplication().addMiddleware(middleware)
app.start();
```

For all options see: 
* [JSON body parser](https://github.com/expressjs/body-parser/blob/master/README.md#bodyparserjsonoptions)
* [Raw body parser](https://github.com/expressjs/body-parser/blob/master/README.md#bodyparserrawoptions)
* [Text body parser](https://github.com/expressjs/body-parser/blob/master/README.md#bodyparsertextoptions)
* [URL-encoded form body parser](https://github.com/expressjs/body-parser/blob/master/README.md#bodyparserurlencodedoptions)

For how to use middlewares into Protontype see [documentation](https://protontype.github.io/middlewares/)
