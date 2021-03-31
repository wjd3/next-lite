import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useUser = () => {
  const { data, error, mutate } = useSWR(
    "/api/auth/getUserApiRouteGoesHere",
    fetcher
  );

  return {
    user: data,
    isUserErr: error,
    isUserLoading: !error && !data,
    mutateUser: mutate,
  };
};

export default useUser;
