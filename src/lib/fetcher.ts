export const fetcher = async <T>(url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json().then((data) => data as T);
};
