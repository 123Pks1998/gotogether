require('../../../config')
import Product from '../../../model/gallery'
const handler = async (req, resp) => {
    if (req.method == 'POST') {
        let data = new Product({
            img: req.body.img,
            img: req.body.img,
            img: req.body.img,
            img: req.body.img,
            img: req.body.img,
            category: req.body.category,

        })
        await data.save()
        resp.status(200).json({ success: 'success' })
    } else {
        resp.status(200).json({ error: "this is not allowed" })

    }
}
export default handler