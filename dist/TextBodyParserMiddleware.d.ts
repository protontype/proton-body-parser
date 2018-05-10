import { ProtonMiddleware, MiddlewareFunctionParams } from 'protontype';
export declare class TextBodyParserMiddleware extends ProtonMiddleware {
    private options;
    constructor(options?: {});
    bodyParser(params: MiddlewareFunctionParams): void;
}
