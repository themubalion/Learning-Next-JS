// valid slug http://localhost:3000/api/getblogs?slug=Learn-Javascipt

import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blog-posts\\${req.query.slug}.json`,'utf-8', (err, data) => {
    if (err){
        res.status(500).json({error:"No such blog found"})
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}