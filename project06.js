async function photoFiler() {
    const response = await fetch("https://davidg-123.github.io/Karl/photos.json")
    let fileList = await response.json();
    startIt(fileList);
}
function startIt(each) {
    let length = 0;
    let photoSeq = [];
    
    const orderbyType = (order) => {
        order.forEach(each => {
            switch (Number(String(each.toLowerCase()).lastIndexOf(".jpg"))) {
                case -1: photoSeq.push(String("https://davidg-123.github.io/Karl/january/" + each)); break;
            }
        });
        order.forEach(each => {
            switch (Number(String(each.toLowerCase()).lastIndexOf(".png"))) {
                case -1: photoSeq.push(String("https://davidg-123.github.io/Karl/january/" + each)); break;
            }
        });
    }

    let gallery = document.createElement("div");
    
    const fileSort = (sort) => {
        sort.forEach(each => {
            length += 1;

            gallery.setAttribute("style", String("display: grid; " + "grid-template-columns: 50% 50%; " + "grid-template-rows:" + "fit-content ".repeat(Math.floor(length/2))));
            let frames = document.createElement("div");
            frames.setAttribute("style", "width: 98%; height: fit-content; margin: auto auto; border: dashed #ff00ff 1px;");
            let imgs = document.createElement("img");
            frames.appendChild(imgs);
            imgs.setAttribute("src", String(photoSeq[length-1]));
            imgs.setAttribute("style", "width: 100%; height: auto; display: block;")
            imgs.setAttribute("id", "images" + String(length))
            gallery.appendChild(frames);
        });
        length = 0;

        document.querySelector("body").appendChild(gallery);

        sort.forEach(each => {
            length += 1;
            let heights = document.querySelector("#" + "images" + String(length));
            console.log(heights.height);
        });
    }
    orderbyType(each)
    fileSort(each)
    
    document.querySelector("body").appendChild(gallery)
}