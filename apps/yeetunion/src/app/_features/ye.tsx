"use client";
import {LatestPostQuery} from "@/data-access/me-query";


export const YeComp = () => {
  const { data } = LatestPostQuery.useQuery();

  console.log("data: ", data)

  return (
    <div>
      <h1>Ye</h1>
      <p>{data?.name}</p>
    </div>
  )
}