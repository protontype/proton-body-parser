import { BaseMiddleware, MiddlewareFunctionParams, Middleware } from 'protontype';
import bodyParser from 'body-parser'

export class JsonBodyParserMiddleware extends BaseMiddleware {
    constructor(private options?: {}) {
        super();
    }

    @Middleware()
    bodyParser(params: MiddlewareFunctionParams) {
        if (this.options) {
            bodyParser.json(this.options)(params.req, params.res, params.next);
        } else {
            bodyParser.json()(params.req, params.res, params.next);
        }
    }
}