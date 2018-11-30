import { BaseMiddleware, MiddlewareFunctionParams } from 'protontype';
export declare class TextBodyParserMiddleware extends BaseMiddleware {
    private options?;
    constructor(options?: {});
    bodyParser(params: MiddlewareFunctionParams): void;
}
