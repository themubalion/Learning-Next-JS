import * as fs from 'fs';

export default function handler(req, res) {
  let fName = `${req.body.name},`;
  if (req.method === 'POST') {

    fs.appendFile(`contactData/${fName}.json`,
      JSON.stringify(req.body),
      () => { console.log(req.body) }
    )

    res.status(200).json("Got the post request")
  } else {
    res.status(200).json("allBlogs")
  }
}