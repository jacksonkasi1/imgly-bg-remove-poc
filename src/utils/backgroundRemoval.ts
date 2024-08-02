import {Config, removeBackground as imglyRemoveBackground} from '@imgly/background-removal';


export async function removeBackground(imageFile: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const result = reader.result as string;
          const config: Config = {
            device: 'gpu', // Use GPU if available
            model: 'isnet_quint8', // Use the best available model for quality
            output: {
              format: 'image/png', // Ensure the output is in PNG for lossless quality
              quality: 1.0, // Set the highest quality
            }
          };
          const blob = await imglyRemoveBackground(result, config);
          resolve(blob);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => {
        reader.abort();
        reject(new Error("Failed to read the file."));
      };
      reader.readAsDataURL(imageFile);
    });
  }