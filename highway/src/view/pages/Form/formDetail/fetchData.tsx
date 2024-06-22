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