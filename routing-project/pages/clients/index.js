import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "1", name: "Maximilian" },
    { id: "2", name: "Manuel" },
    { id: "3", name: "Carlos" },
  ];

  return (
    <div>
      <h1>Clients Page:</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
      {/* This is another form to setting link Hrefs */}
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
