import axios from '@/api/axios';

import { addQueryParamsToUrl } from '@/utils/api';

export const commonListApi = <T>(baseUrl: string, queryParams: Record<string, any>): Promise<T> => {
  const url = addQueryParamsToUrl(baseUrl, queryParams);

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        if (!res?.data?.results) resolve({ ...res.data, results: [] });
        resolve({ ...res.data, results: res.data.results.slice(0, 10) });
      })
      .catch(reject);
  });
};

export const commonDetailedApi = <T>(
  baseUrl: string,
  queryParams: Record<string, any>
): Promise<T> => {
  const url = addQueryParamsToUrl(baseUrl, queryParams);

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
