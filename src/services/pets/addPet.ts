import { AddPetRequest, IPet } from "../../interfaces/pet";
import httpClient from "../api/httpClient";

export async function addPet(params: AddPetRequest): Promise<IPet> {
  try {
    console.log(params);
    const response = await httpClient.post("/pet", params);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar o pet", error);
    throw error;
  }
}