import { useRouter } from "next/router";

const ClientsProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "2" },
    });
  };

  return (
    <div>
      <h1>{`The projects for client with the id: ${router.query.id}`}</h1>
      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  );
};

export default ClientsProjectsPage;
