"use client";
import { APP_CONST } from "@/commons";
import { Loader } from "@/components";
import { AddNews } from "@/components/admin-components/add-news/add-news";
import { useOneNew } from "@/hooks";

const UpdateNew = ({ params: { id } }: { params: { id: string } }) => {
  const { data, isLoading, isError } = useOneNew(
    `${APP_CONST.API_URL.NEWS}/${id}`,
  );

  return (
    <div>
      {isError && <p>Not found</p>}
      {isLoading && <Loader />}
      {data && <AddNews news={data} />}
    </div>
  );
};

export default UpdateNew;
