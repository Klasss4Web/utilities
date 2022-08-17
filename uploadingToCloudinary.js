const uploadImageToCloudinary = (yourUploadPreset, cloudName) => {

  //To get your upload preset follow the steps below
  // 1. Log into your cloudinary account: https://cloudinary.com
  // 2. Go to settings page and click the upload tab
  // 3. Under upload preset, you will see a list of presets in your account, you can add more to it
  // 4. Under upload preset, click edit and change it from signed to unsigned

  //To get your cloud name, go to settings, switch to account tab
  //Scroll to the bottom, you will see your cloudinary cloud name
       let imgUrlsFromCloudinary;
      const formData = new FormData();

      formData.append("file", image);
      formData.append("upload_preset", yourUploadPreset);
      console.log("image", image);
      await axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          imgUrlsFromCloudinary = data.secure_url;
        });

        return imgUrlsFromCloudinary
}