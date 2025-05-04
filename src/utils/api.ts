import { useQuery } from "@tanstack/react-query";

export const fetchNews = async () => {
  const res = await fetch(`${process.env.API_URL}/news`);
  return res.json();
};

export const useNews = () => useQuery({ queryKey: ["news"], queryFn: fetchNews });
