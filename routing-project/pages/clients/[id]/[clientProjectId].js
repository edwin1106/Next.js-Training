import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{`The project with id: ${router.query.clientProjectId} from the client with name: ${router.query.id} `}</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
