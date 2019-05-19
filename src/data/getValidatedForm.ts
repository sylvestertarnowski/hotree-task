/* 
    There is probably slightly more performant version to do this.
    This function ensures that the data output is of correct types.
    Any value which type does not match desired outcome is not passed to finalData.
    This hopefully would prevent database errors, like for example MongoDB
    schema not matching the passed data.
*/

let getValidatedForm = (obj: any) => {
    let keys = Object.keys(obj);

    let finalData: {[key: string]: string | number | boolean} = {};

    for(let key of keys) {
        if(key === 'title') {
            typeof obj[key] === 'string' && (finalData[key] = obj[key]);
            continue;
        }
        if(key === 'description') {
            typeof obj[key] === 'string' && (finalData[key] = obj[key]);
            continue;
        }
        if(key === 'category_id') {
            typeof obj[key] === 'number' && (finalData[key] = obj[key]);
            continue;
        }
        if(key === 'paid_event') {
            typeof obj[key] === 'boolean' && (finalData[key] = obj[key]);
            continue;
        }
        if(key === 'event_fee') {
            typeof obj[key] === 'number' && (finalData[key] = obj[key]);
            continue;
        }
        if(key === 'reward') {
            typeof obj[key] === 'number' && (finalData[key] = obj[key]);
            continue;
        }
        if(key === 'date') {
            typeof obj[key] === 'string' && (finalData[key] = obj[key]);
            continue;
        }
        if(key === 'duration') {
            typeof obj[key] === 'number' && (finalData[key] = obj[key]);
            continue;
        }
        if(key === 'coordinator') {
            typeof obj[key] === 'object' && (finalData[key] = obj[key]);
            continue;
        }
    }
    return finalData;
}

export default getValidatedForm;