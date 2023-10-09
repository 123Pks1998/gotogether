require('../../../config')
import Product from '../../../model/home'
const handler = async (req, resp) => {
    if (req.method == 'POST') {
        let data = new Product({
            slug: req.body.slug,
            img: req.body.img,
            name: req.body.name,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            pincode: req.body.pincode,
            category: req.body.category,
            desc: req.body.desc
        })
        await data.save()
        resp.status(200).json({ success: 'success' })
    } else {
        resp.status(200).json({ error: "this is not allowed" })

    }
}
export default handler