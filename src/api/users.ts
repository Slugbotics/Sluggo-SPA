import { AxiosInstance } from "axios";
import { DateTime } from "luxon";
// import { TeamRecord } from "@/api/teams";
import { PaginatedList } from "./base";

export interface UserRecord {
  id: number;
  email: string;
  first_name?: string;
  last_name?: string;
  username: string;
}

// possibly need to add pronouns? ask later

export interface MemberRecord {
  id: string;
  owner: UserRecord;
  team_id: number;
  object_uuid: string;
  role: string;
  bio?: string;
  created: DateTime;
  activated: DateTime;
  deactivated: DateTime;
}

export async function listMembers(
  axios: AxiosInstance,
  teamId: number,
  page: number
): Promise<PaginatedList<MemberRecord>> {
  const response = await axios.get(
    `/api/teams/${teamId}/members/?page=${page}`
  );
  console.log(response.data.results);
  return response.data as PaginatedList<MemberRecord>;
}