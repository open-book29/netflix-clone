// Import necessary modules from Next.js
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

// const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method !== 'GET') {
//       return res.status(405).end();
//     }

//   try {
//     const { currentUser } = await serverAuth(req);

//     return res.status(200).json(currentUser);
//   } catch (error) {
//     console.error(error);
//     return res.status(400).end();
//   }
// };

// export {handler} ;

export async function GET(req: Request){
  try {
    const { currentUser } = await serverAuth(req)
    return NextResponse.json(currentUser)
  } catch (error) {
    console.log(error)
    return new NextResponse("something went worng", { status: 400 });
  }
}




