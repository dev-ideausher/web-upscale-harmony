export const allFiles= async (payload) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    const response = await fetch("/api/get-files", requestOptions)
    const res = await response.json()
    return res;
}

export const readFile = async (fileName) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    const response = await fetch("/api/read-file?fileName="+fileName, requestOptions)
    const res = await response.json()
    return res;
}

export const updateFile = async (file, content) => {
    var raw = JSON.stringify({
        "fileName": file,
        "content": content
    });
      
    var requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
    };
    

    const response = await fetch("/api/update-file", requestOptions)
    const res = await response.json()
    return res;
}