import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page:</h1>
      <ul>
        {/* Do not use <a> </a> becouse this tag clear the steat and refresh the page */}
        <li>
          <a href="portfolio">Portfolio</a>
        </li>
        {/* use link from next, it's a good practice*/}
        <li>
          <Link href="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
