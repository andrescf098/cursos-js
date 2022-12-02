async function runCode(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.statusCode === 404) {
            throw new Error('Something was wrong');
        } else {
            return data
        }
    } catch (error) {
        throw new Error('Something was wrong');
    }
        
}
