import cloudinary from "../config/cloudinary.config";
import fs from "fs";

export const cloudinaryUpload = (localFilePath: string) => {
  return new Promise((resolve, reject) => {
    try {
      if (!localFilePath) {
        throw new Error("LocalFilePath is empty to upload image on Cloudinary");
      }

      cloudinary.uploader.upload(localFilePath, (error: any, response: any) => {
        if (error) {
          fs.unlinkSync(localFilePath);
          reject(
            new Error(`Failed to upload image on Cloudinary: ${error.message}`)
          );
        } else {
          const result = {
            public_id: response.public_id,
            url: response.secure_url,
          };
          resolve(result);
        }
      });
    } catch (error: any) {
      reject(
        new Error(`Failed to upload image on Cloudinary: ${error.message}`)
      );
    }
  });
};

export const cloudinaryDelete = (public_id: string) => {
  return new Promise((resolve, reject) => {
    try {
      if (!public_id) {
        throw new Error(
          "public_id has not been provided to delete from Cloudinary"
        );
      }
      cloudinary.uploader.destroy(public_id, (error: any, response: any) => {
        if (error) {
          reject(
            new Error(
              `Failed to delete image from Cloudinary: ${error.message}`
            )
          );
        } else {
          const result = {
            public_id: response.public_id,
            url: response.secure_url,
          };
          resolve(result);
        }
      });
    } catch (error: any) {
      reject(
        new Error(`Failed to delete image from Cloudinary: ${error.message}`)
      );
    }
  });
};
