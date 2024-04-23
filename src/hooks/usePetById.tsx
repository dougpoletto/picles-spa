import { useQuery } from "@tanstack/react-query";
import { getPetById } from "../services/pets/getPetById";

export function usePetById(id: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["get-pet-by-id", id],
    queryFn: () => getPetById(id)
  });
  return { data, isLoading };
}