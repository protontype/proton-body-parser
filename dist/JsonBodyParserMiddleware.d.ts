import { BaseMiddleware, MiddlewareFunctionParams } from 'protontype';
export declare class JsonBodyParserMiddleware extends BaseMiddleware {
    private options?;
    constructor(options?: {});
    bodyParser(params: MiddlewareFunctionParams): void;
}
