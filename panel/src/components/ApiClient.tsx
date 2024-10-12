import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { createContext, ReactNode, useContext } from "react";

interface Props {
  baseUrl: string;
  children: ReactNode;
}

export const ApiClientContext = createContext<{ baseUrl: string } | undefined>(
  undefined
);

export const ApiClient: React.FC<Props> = ({ children, baseUrl }) => {
  const queryClient = new QueryClient();

  return (
    <ApiClientContext.Provider value={{ baseUrl }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientContext.Provider>
  );
};

// Hook to execute a GET request
export function useGet(uri: string, options?: any) {
  const context = useContext(ApiClientContext);
  if (!context) {
    throw new Error("useGet must be used within an ApiClient provider");
  }
  const { baseUrl } = context;

  const { isError, isSuccess, isPending, data, error, refetch } = useQuery({
    queryKey: [uri],
    queryFn: () =>
      axios.get(`${baseUrl}/${uri}`, {
        ...options,
      }),
  });

  return { isError, isSuccess, isPending, data: data?.data, error, refetch };
}

// Hook to execute a POST request
export function usePost(uri: string) {
  const context = useContext(ApiClientContext);
  if (!context) {
    throw new Error("usePost must be used within an ApiClient provider");
  }
  const { baseUrl } = context;

  const {
    mutate: request,
    mutateAsync: requestAsync,
    isError,
    isSuccess,
    isPending,
    data,
    error,
  } = useMutation({
    mutationKey: [uri],
    mutationFn: (body: any) => {
      return axios.post(`${baseUrl}/${uri}`, body, {});
    },
  });

  return { request, requestAsync, isError, isSuccess, isPending, data, error };
}

// Hook to execute a PUT (update) request
export function usePut(uri: string) {
  const context = useContext(ApiClientContext);
  if (!context) {
    throw new Error("usePut must be used within an ApiClient provider");
  }
  const { baseUrl } = context;

  const {
    mutate: request,
    mutateAsync: requestAsync,
    isError,
    isSuccess,
    isPending,
    data,
    error,
  } = useMutation({
    mutationKey: [uri],
    mutationFn: (body: any) => {
      return axios.put(`${baseUrl}/${uri}`, body, {});
    },
  });

  return { request, requestAsync, isError, isSuccess, isPending, data, error };
}

// Hook to execute a DELETE request
export function useDelete(uri: string) {
  const context = useContext(ApiClientContext);
  if (!context) {
    throw new Error("useDelete must be used within an ApiClient provider");
  }
  const { baseUrl } = context;

  const {
    mutate: request,
    mutateAsync: requestAsync,
    isError,
    isSuccess,
    isPending,
    data,
    error,
  } = useMutation({
    mutationKey: [uri],
    mutationFn: () => {
      return axios.delete(`${baseUrl}/${uri}`);
    },
  });

  return { request, requestAsync, isError, isSuccess, isPending, data, error };
}
