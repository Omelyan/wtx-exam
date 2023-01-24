import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { debounce } from "throttle-debounce";

import api from "~/api";
import { miscellaneous } from "~/constants";
import { queryClient } from "~/services";

export function useWallet() {
  const [filter, setFilter] = useState<string>();
  const { data, isLoading, isFetching } = useQuery(
    ["wallet", { filter }],
    () => api.getCreditCards(filter),
    { keepPreviousData: true }
  );

  const { data: balance } = useQuery(["balance"], api.getBalance); // may be putted to wallet response, may be separated to a new hook, it's debatable

  const { isLoading: isMutating, mutate: removeCreditCard } = useMutation(api.removeCreditCard, {
    onSuccess: () => queryClient.invalidateQueries(["wallet"]),
  });

  const changeFilter = useMemo(
    () => debounce(miscellaneous.inputsThrottling, setFilter),
    //
    []
  );

  return {
    data,
    balance,
    isLoading,
    isFetching,
    isMutating,
    //
    removeCreditCard,
    changeFilter,
  };
}
