export const addQueryParamsToUrl = (urlBase: string, query: Record<string, any>) => {
  if (!query) return urlBase;
  let url = '';

  try {
    const apiQuery: URLSearchParams = new URLSearchParams(query);
    url = `${urlBase}?${decodeURIComponent(apiQuery.toString())}`;
  } catch (error) {
    url = urlBase;
  }

  return url;
};
