import type { FetchOptions } from 'ohmyfetch';

/** fetch type */
export interface FetchType extends FetchOptions {
    key?: string;
    /** 初始缓存 */
    initialCache?: boolean;
    /** 是否懒加载 */
    lazy?: boolean;
}

/** fetch 返回 type */
export interface FatchResType {
    code: number;
    msg: string | null;
    data: {
        records?: Array<any>;
        size?: number;
        total?: number;
        pages?: number;
        current?: number;
    } | null
}

/** api search params */
export interface SearchParamsType {
    size?: number;
    current?: number;
    state?: '0' | '1';
    [key: string]: any;
}