import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{`This is Portfolio [${router.query.projectid}] Page`}</h1>
      <p>{`This is the path [${router.pathname}]`}</p>
    </div>
  );
};

export default PortfolioProjectPage;
