export interface BaseContext<T> {
    success: boolean;
    code: number;
    businessCode: number;
    message: string;
    content: T;
}
