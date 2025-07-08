import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const result: GetRoomsAPIResponse = await response.json();
      return result;
    },
  });

  return (
    <div>
      <div>Create Room</div>

      {isLoading && <p>Carregando...</p>}
      {isError && <p>Erro: {(error as Error).message}</p>}

      <div className="flex flex-col gap-1">
        {data?.map((room) => (
          <Link key={room.id} className="underline" to={`/room/${room.id}`}>
            {room.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
