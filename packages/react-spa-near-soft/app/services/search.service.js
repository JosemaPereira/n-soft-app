import { DefaultAppConfig, HttpClient } from '../providers';

export const getAllIssues = async () => {
  const {
    api: { source }
  } = DefaultAppConfig;

  const { data } = await HttpClient.get(source);
  return data;
};
