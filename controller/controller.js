import fs from "node:fs";
import { s3Client } from "../lib/s3Client.js";
import { v4 as uuid } from "uuid";
import formidable from "formidable";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import "dotenv/config.js";

export class Controller {
  async holaMundo(req, res) {
    console.log(req.body.file);
    return res.status(200).send({
      success: "true",
      message: "Hola Mundo!",
    });
  }
  async creteObject(req, res) {
    console.log(req.body)
    console.log("Linea 18")
    const buffer = Buffer.from(req.body.data, "base64");
    const extension = req.body.filename.split(".").pop();
    const bucketParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${uuid()}.${extension}`, 
      Body:buffer,
     // ACL: "public-read", 
    };
    console.log(bucketParams)
    await s3Client.send(new PutObjectCommand(bucketParams));
    return res.status(200).json({
      success: "true",
      message: `${process.env.PUBLIC_R2_URL}/${bucketParams.Key}`,
    });
  }
}
