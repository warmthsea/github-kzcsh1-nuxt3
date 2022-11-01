import type { FatchResType, FetchType } from '@/types/fetch';

const fetchConfig = {
    baseURL: '/',
    headers: {
        appid: '0123456789abcdefg',
    },
};

/** 请求体封装 */
function useGetFetchOptions(options: FetchType) {
    options.baseURL = options.baseURL ?? fetchConfig.baseURL;
    options.headers = options.headers ?? {
        appid: fetchConfig.headers.appid,
    };
    options.initialCache = options.initialCache ?? false;
    options.lazy = options.lazy ?? false;

    // 用户登录，默认传token
    const token = useCookie('token');

    if (token.value) (options.headers as any).token = token.value;

    return options;
}

/** http请求封装 */
export async function useHttp(key: string, url: string, options: FetchType): Promise<FatchResType> {
    options = useGetFetchOptions(options);
    options.key = key;

    return $fetch(url, options)
        .then((res) => {
            return res as unknown as FatchResType;
        })
        .catch((err: any) => {
            return err;
        }) as unknown as FatchResType;
}
