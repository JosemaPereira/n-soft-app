import { DefaultAppConfig, HttpClient } from '../providers';

export const getAllIssues = async (query = '') => {
  const {
    api: { source, repo }
  } = DefaultAppConfig;

  const { data } = await HttpClient.get(
    `${source}?q=${
      query !== '' ? query.replace(/ /g, '+') + '+in:title+' : ''
    }repo:${repo}`
  );
  return data;
};
