import nextConnect from 'next-connect';
import { createRouter } from 'next-connect';
import multer from 'multer';
import Product from '../../../model/biography'
const handler=nextConnect()
// const router = createRouter()
export const config = {
    api: {
        bodyParser: false
    }
}

const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
});

// const handler = createRouter({
//     onError(error, req, res) {
//         res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
//     },
//     onNoMatch(req, res) {
//         res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//     },
// }).use(upload.single('theFiles'))

//     .post(async (req, res) => {
//         try {
//             const session = await session({ req })
//         } catch (error) {
//         }
//         res.status(200).json({ data: 'success' });
//     });

export default handler;

////////////////////////////////////////////////////////////////////////////////////

// ('/upload', upload.single('pImage'),

// const handler = async  (req, resp) => {
//     if (req.method == 'POST') {
//         let data = new Product({
//             slug: req.body.slug,
//             img: req.body.img,
//             name: req.body.name,
//             profession: req.body.profession,
//             born: req.body.born,
//             died: req.body.died,
//             fromdate: req.body.fromdate,
//             todate: req.body.todate,
//             desc: req.body.desc
//         })
//         await data.save()
//         resp.status(200).json({ success: 'success' })
//     } else {
//         resp.status(200).json({ error: "this is not allowed" })
//     }
// }
// export default handler

///////////////////////////////////////////////////////////////////////////////////////


// require('../../../config')
// import multer from 'multer'
// import nc from 'next-connect'
// import Product from '../../../model/biography'

// export const config = {
//     api: {
//         bodyParser: false
//     }
// }
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, path.join(process.cwd(), "public", "uploads"))
//         },
//         filename: function (req, file, cb) {
//             cb(null, `${Date.now()}-${file.originalname}`)
//         }
//     })
// })

// const handler = nc({
//     onError(error, req, res, next) {
//         res.status(500).end('something else');
//     },
//     onNoMatch(req, res, next) {
//         res.status(404).end("");
//     },
// })

// handler.use(upload.single('img'));

// post((req, res) => {
//     res.status(201).json({ body: req.body });
// });

// export default handler

// // const upload = multer({ storage })

// // app.post('/upload', upload.single('pImage'), (req, resp) => {
// //     console.log(req.body)
// //     console.log(req.file)
// //     resp.redirect('/')
// // })





// // const upload = multer({
// //     storage: multer.diskStorage({
// //         destination: function (req, file, cb) {
// //             cb(null, './uploads')
// //         },
// //         filename: function (req, file, cb) {
// //             cb(null, `${Date.now()}-${file.originalname}`)
// //         }
// //     })
// // })