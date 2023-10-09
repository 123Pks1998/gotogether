require('../../../config')
import Product from '../../../model/history'
const handler = async (req, resp) => {
    if (req.method == 'POST') {
        let data = new Product({
            slug: req.body.slug,
            img: req.body.img,
            name: req.body.name,
            details: req.body.profession,
            between: req.body.between,
            and: req.body.and,
            from: req.body.from,
            to: req.body.to,
            desc: req.body.desc
        })
        await data.save()
        resp.status(200).json({ success: 'success' })
    } else {
        resp.status(200).json({ error: "this is not allowed" })

    }
}
export default handler