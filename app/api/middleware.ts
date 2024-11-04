import { NextRequest } from "next/server";
import { updateSession } from "./cookies/route";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
