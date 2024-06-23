import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {getUser} from "./formDetail/user";

import {InputItem} from "../../input/InputItem";
import Button from "@mui/material/Button";
import {getVehicle} from "./formDetail/vehicle";
import {getTicket} from "./formDetail/ticket";
import {getPayment} from "./formDetail/payment";
import {deleteEntity, saveData, searchAllData, searchData, updateData} from "./formDetail/fetchData";
import {TableView} from "./TableView";


interface FormPageProps {
    path:string
}
export function FormPage({path}: FormPageProps) {
    const [entityID, setEntityID] = useState("")
    const {register, handleSubmit, reset, watch, formState: {errors}, setValue} = useForm()
    const [resetForm, setResetForm] = useState(false);
    const [resetWebForm, setResetWebForm] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [rating, setRating] = useState("");
    const [previewData, setPreviewData] = useState([]);

    let form: any[][] = []
    let title = ""
    let url = ""
    let idName = ""
    let remove = ""

    if (path === "user") {
        form = getUser();
        title = "User Form";
        url = "http://localhost:8082/user";
        idName = "nic"
        remove = "userNic"
    }
    if (path === "vehicle") {
        form = getVehicle();
        title = "Vehicle Form";
        url = "http://localhost:8083/vehicle";
        idName = "licensePlate"
        remove = "licensePlate"
    }
    if (path === "ticket") {
        form = getTicket();
        title = "Ticket Form";
        url = "http://localhost:8084/ticket";
        idName = "id"
        remove = "Id"
    }
    if (path === "payment") {
        form = getPayment();
        title = "Payment Form";
        url = "http://localhost:8085/payment";
        idName = "id"
        remove = "Id"
    }

    useEffect(() => {
        setPreviewData([]);
        searchAllData(url).then(data => {
            setPreviewData(data)
        })
    }, [url]);

    const handleActionSubmit = (action: string) => {
        return handleSubmit((data) => onSubmit(data, action));
    };
    const onSubmit = async (data: any,action:string) => {
        if (action === "save"){
            const empty = Object.values(data).every((value:any) => value.trim() !== '');
            if (!empty) {
                alert('Please fill out all fields.');
                return;
            }
            saveData(url,data,()=>{
                setResetForm(true);
                searchAllData(url).then(data => {
                    setPreviewData(data)
                })
            });
        }
        if (action === "update"){
            const empty = Object.values(data).every((value:any) => value.trim() !== '');
            if (!empty) {
                alert('Please fill out all fields.');
                return;
            }
            updateData(url,data,()=>{
                setResetForm(true);
                searchAllData(url).then(data => {
                    setPreviewData(data)
                })
            });
        }
        if (action === "search"){
            const idValue = watch(idName);
            if (idValue) {
                const result = await searchData(url,"/search/",idValue)
                if(result){
                    reset(result);
                    setResetForm(false)
                }
            }

        }
        if (action === "delete"){
            const idValue = watch(idName);
            if (idValue) {
                await deleteEntity(url,{[remove] : idValue},()=>{
                    searchAllData(url).then(data => {
                        setPreviewData(data)
                    })
                    setResetForm(true);
                })
            }

        }
    };

    return (
        <>
            <div className="flex flex-wrap h-full">
            {form.map((formData, index) => (
              <div key={index} className="flex justify-around z-10 w-1/2 flex-wrap">
                {formData.map((section, divIndex) => (
                <div key={index} className={`flex justify-between mb-2 ${(path === "employee" && divIndex === 1)?"z-5":"z-10"} w-[40vw]`}>
                    {section.map((data:any) => (
                        <div key={data.id} className={`z-50 ${(section.length === 1 || section.length === 1) ? 'w-[18vw]' : 'w-[13.2vw]'} ${data.id === 'rating' ? 'w-[20vw]' : ''} ${data.id === 'web' ? 'w-[20vw]' : ''} ${data.id === 'table' ? 'w-full' : ''}`}>
                            <InputItem
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                placeholder={data.placeholder}
                                type={data.type}
                                description={data.description}
                                selectList={data.selectList}
                                register={register}
                                watch={watch}
                                value={data.value}
                                isEdit={data.isEdit}
                                setValue={setValue}
                                onChange={data.onChange}
                                errors={errors}
                                isRequired={data.required}
                                resetForm={resetForm}
                                setResetForm={setResetForm}

                            />

                            {(data.id === 'button') && (
                                <div className="w-[40vw]">
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="primary" size="small" type="button" onClick={handleActionSubmit("save")}>Save</Button>
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="success" size="small" type="button" onClick={handleActionSubmit("update")}>Update</Button>
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="secondary" size="small" type="button" onClick={handleActionSubmit("search")}>Search</Button>
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="error" size="small" type="button" onClick={handleActionSubmit("delete")}>Delete</Button>
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="warning" size="small" type="button" onClick={function () {setResetForm(true);}}>Clear</Button>
                                </div>
                            )}

                            {(data.id === 'table') && (
                                <div>
                                <TableView rows={previewData}/>
                                </div>
                            )}

                        </div>

                    ))}

                </div>
                ))}
              </div>
            ))}
            </div>
        </>
    );
}