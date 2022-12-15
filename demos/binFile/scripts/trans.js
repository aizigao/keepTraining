{
  // 1. ArrayBuffer → blob
  const blob = new Blob([new Uint8Array(buffer, byteOffset, length)]);
}





{
  // 1. ArrayBuffer → base64
  // 97 -> a -> base64
  const base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
}


{
  // base64 → blob
  const base64toBlob = (base64Data, contentType, sliceSize) => {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}


{
  // blob → ArrayBuffer

  // -- 1
  blob.arrayBuffer().then(d => console.log(d))


  // -- 2
  function blobToArrayBuffer(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject;
      reader.readAsArrayBuffer(blob);
    });
  }
}


{
  // function blobToBase64(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}


{
  // blob → Object URL

  const objectUrl = URL.createObjectURL(blob);

}