import { ProtonMiddleware, MiddlewareFunctionParams, Middleware } from 'protontype';
import bodyParser from 'body-parser';

export class TextBodyParserMiddleware extends ProtonMiddleware {
    constructor(private options?: {}) {
        super();
    }

    @Middleware()
    bodyParser(params: MiddlewareFunctionParams) {
        if (this.options) {
            bodyParser.text(this.options)(params.req, params.res, params.next);
        } else {
            bodyParser.text()(params.req, params.res, params.next);
        }
    }
}