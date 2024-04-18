import mongoose from "mongoose";

export const validateMongodbId = async (id: any) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};
