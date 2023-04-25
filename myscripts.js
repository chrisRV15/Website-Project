    const imgUpload = document.getElementById("img-upload");
      const uploadBtn = document.getElementById("upload-btn");

      uploadBtn.addEventListener("click", () => {

        const file = imgUpload.files[0];

        if(file){
          const reader = new FileReader();

          reader.addEventListener("load",() => {
            const img = document.createElement("img");
            img.src - reader.result;

            const gallery = document.createElement("div");
            gallery.classList.add("image-container");

            const delBtn = document.createElement("button");
            delBtn.innerText = "Delete";
            delBtn.addEventListener("click", () => {
              const parent = gallery.parentNode;
              parent.removeChild(gallery);

              const images =  JSON.parse(localStorage.getItem("images")) || [];
              const index = images.findIndex((image) => image.src === ismg.src);
              if(index != -1){
                images.splice(index, 1);
                localStorage.setItem("images", JSON.stringify(images));
              }
             });
            });
          }
        });