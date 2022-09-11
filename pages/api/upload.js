const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "dmp8igoif",
  api_key: "771571696776752",
  api_secret: "WyFwKe0MF9wHNevXcrIr2hwbMUs",
  secure: true
});

export default async function handler(req, res) {
  console.log(JSON.parse(req.body))
  const { image } = JSON.parse(req.body);
  console.log("image view", image)
  const results = await cloudinary.uploader.upload(image, 
    { ocr: "adv_ocr" },
    
  );
  res.status(200).json(results);
}