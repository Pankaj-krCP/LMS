import cloudinary from "../config/cloudinary.config";
import fs from "fs";

export const cloudinaryUpload = async (
  localFilePath: string,
  options: object
) => {
  try {
    if (!localFilePath) {
      throw new Error("LocalFilePath is empty to upload image on Cloudinary");
    }
    const response = await cloudinary.uploader.upload(localFilePath, options);
    const result = {
      public_id: response.public_id,
      url: response.secure_url,
    };
    return result;
  } catch (error: any) {
    throw error;
  } finally {
    if (localFilePath) {
      fs.unlinkSync(localFilePath);
    }
  }
};

export const cloudinaryDelete = async (public_id: string) => {
  try {
    if (!public_id) {
      throw new Error(
        "public_id has not been provided to delete from Cloudinary"
      );
    }
    const response = await cloudinary.uploader.destroy(public_id);
    return response;
  } catch (error: any) {
    throw error;
  }
};
