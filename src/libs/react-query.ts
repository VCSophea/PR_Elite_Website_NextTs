import { QueryClient } from "@tanstack/react-query";
// import { storage } from "../helpers/utils/helpers";

// Handles errors for queries and mutations
const queryErrorHandler = () => {
  // if (storage.getToken()) {
  //   alert("An error occurred. Please try again.");
  // }
};

// Default configuration options for queries and mutations
const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorHandler,
    retry: 2,
    staleTime: 1,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  },
  mutations: {
    onError: queryErrorHandler,
  },
};

// Create a QueryClient with the default options
export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
