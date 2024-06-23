import axios from "axios";
export const saveData = async (url: string, data: any,setData: () => void) => {

        try {
            const response = await axios.post(url, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status === 200) {
                alert(`Saved Successfully!`)
                setData();
            }
        } catch (error:any) {
            if (error.response) {
                alert(error.response.data.message);
            }
        }
}
export const updateData = async (url: string, data: any,setData: () => void) => {

    try {
        const response = await axios.put(url, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 204) {
            alert(`Update Successfully!`)
            setData();
        }
    } catch (error:any) {
        if (error.response) {
            alert(error.response.data.message);
        }
    }
}

export const searchData = async (url: string, mapping: string, id: string) => {

    try {
        const response = await axios.get(url+mapping+id, {
        });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error:any) {
        if (error.response) {
            alert(error.response.data.message);
        }
    }

};

export const searchAllData = async (url: string) => {
    let list = []
    try {
        const response = await axios.get(url+"/getAll", {
        });
        if (response.status === 200) {
            list = response.data;
        }
    } catch (error:any) {
        if (error.response) {
            console.log(error.response.data.message);
        }
    }
    return list;
};

export const deleteEntity = async (url:any,params:any,setData: () => void) => {

    try {
        const response = await axios.delete(url, {
            params: params
        });
        if (response.status === 204) {
            alert(`delete Successfully!`)
            setData();
        }
    } catch (error:any) {
        if (error.response) {
            alert(error.response.data.message);
        }
    }

}
