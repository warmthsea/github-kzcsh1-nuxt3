import type { SearchParamsType } from '~~/types/fetch';

/** 获取 banner data */
export function getBannerApi(params?: SearchParamsType) {
    return useHttp('bannerData', '/cms/banner/page', {
        method: 'get',
        params,
    });
}

/** 获取平台介绍 */
export function getIntroduceApi(params?: SearchParamsType) {
    return useHttp('introduceData', '/cms/platformIntroduction/page', {
        method: 'get',
        params,
    });
}
