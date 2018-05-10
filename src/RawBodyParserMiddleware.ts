import { ProtonMiddleware, MiddlewareFunctionParams, Middleware } from 'protontype';
import bodyParser from 'body-parser';

export class RawBodyParserMiddleware extends ProtonMiddleware {
    constructor(private options?: {}) {
        super();
    }

    @Middleware()
    bodyParser(params: MiddlewareFunctionParams) {
        if (this.options) {
            bodyParser.raw(this.options)(params.req, params.res, params.next);
        } else {
            bodyParser.raw()(params.req, params.res, params.next);
        }
    }
}