// import { getSession } from "next-auth/react";
// import { NextResponse } from "next/server";

// export default async function middleware(request) {
//   const session = await getSession({ req: request });

//   if (session && session.user) {
//     return NextResponse.next();
//   }
//   return NextResponse.redirect(new URL("/", request.url));
// }


export { default } from "next-auth/middleware"
export const config = { matcher: ["/sp3", "/expansion"] };