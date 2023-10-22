import * as React from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const useGetCode = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const res = useQuery({
    queryKey: ["attendance/code"],
    queryFn: () => axios.get("http://101.101.209.184:33333/attendance/code/3"),
  });

  return res;
};
