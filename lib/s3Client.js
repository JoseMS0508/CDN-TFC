// Step 1: Import the S3Client object and all necessary SDK commands.
import { S3Client } from '@aws-sdk/client-s3';
import 'dotenv/config'

const accessKeyId = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_KEY
const region = process.env.AWS_REGION

export const s3Client = new S3Client({
    endpoint: process.env.R2_ENDPOINT,
    forcePathStyle: false, 
    region: region,
    credentials: {
      accessKeyId:accessKeyId,
      secretAccessKey:secretAccessKey 
    }
});

