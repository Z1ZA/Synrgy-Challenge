import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dythozpr5", // TODO: Ganti dengan cloudname-mu
  api_key: "495959755561676", // TODO: Ganti dengan API Key-mu
  api_secret: "eYHsNy10PGM5SHhlqJDeP7wmNgg", // TODO: Ganti dengan API Secret-mu
  secure: true,
});

export default cloudinary;
