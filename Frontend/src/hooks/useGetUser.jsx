import { useQuery } from "@tanstack/react-query";

const useGetUser = () => {
  const {
    data: user,
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("/api/v1/user/me/portfolio");

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      return response.json();
    },
    retry: false,
  });

  return { user, isLoading, error, refetch, isRefetching };
};

export { useGetUser };
