class EasyHTTP {
    // Make HTPP GET Request
    async get(url) {
        const response  = await fetch(url);
        const resData = await response.json();
        return {
            quotes: resData
        }
    }

}

export const http = new EasyHTTP(); 