"use client";
import { APP_CONST } from "@/commons";
import { Loader } from "@/components";
import AddProject from "@/components/admin-components/add-project/add-project";
import { useOneProject } from "@/hooks";

const UpdateProject = ({ params: { id } }: { params: { id: string } }) => {
  const { data, isLoading, isError } = useOneProject(
    `${APP_CONST.API_URL.PROJECTS}/${id}`,
  );

  return (
    <div>
      {isError && <p>Not found</p>}
      {isLoading && <Loader />}
      {data && <AddProject project={data} />}
    </div>
  );
};

export default UpdateProject;
