import * as fs from 'fs';

export default async function handler(req, res) {

  let data = await fs.promises.readdir('blog-posts');
  let myFile;
  let allBlogs= [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(`blog-posts/${item}`,'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }

  // console.log('Yo->',allBlogs)

  res.status(200).json(allBlogs)

  // fs.readdir('blog-posts',(err, data) => {
  //   console.log(data)



  // })
}
