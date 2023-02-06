// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

const fruits = [

]

export default function handler(req, res) {
  res.status(200).json(
    fruits
  )
}

// export default async function handler(req, res) {
//   const { method } = req

//   switch ( method ) {
//       case 'POST':
//           //Update or create data in your database  
//           const {color} = req.body  
//           const post = await prisma.post.create({
//               data: {
//                   color,
//               },
//           })
//           res.status(200).json(post)
//           break
//       default:
//           res.setHeader('Allow', ['POST'])
//           res.status(405).end(`Method ${method} Not Allowed`)
      
//   }
// }