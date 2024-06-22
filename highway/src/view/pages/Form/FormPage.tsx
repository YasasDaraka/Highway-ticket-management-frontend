import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {getUser} from "./formDetail/user";

import {InputItem} from "../../input/InputItem";
import Button from "@mui/material/Button";
import {getVehicle} from "./formDetail/vehicle";
import {getTicket} from "./formDetail/ticket";
import {getPayment} from "./formDetail/payment";
import {saveData} from "./formDetail/fetchData";

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

    let form: any[][] = []
    let title = ""
    let url = ""
    let idName = ""

    if (path === "user") {
        form = getUser();
        title = "User Form";
        url = "http://localhost:8082/user";
        idName = "cusId"

    }
    if (path === "vehicle") {
        form = getVehicle();
        title = "User Form";
        url = "http://localhost:8080/app/customer";
        idName = "cusId"

    }
    if (path === "ticket") {
        form = getTicket();
        title = "User Form";
        url = "http://localhost:8080/app/customer";
        idName = "cusId"

    }
    if (path === "payment") {
        form = getPayment();
        title = "User Form";
        url = "http://localhost:8080/app/customer";
        idName = "cusId"

    }

    const onSubmit = async (data: any) => {
        saveData(url,data,()=>{
            setResetForm(true)
        });
    };

    return (
        <>
            <div className="flex flex-wrap h-full">
            {form.map((formData, index) => (
              <div key={index} className="flex justify-around z-10 w-1/2 flex-wrap">
                {formData.map((section, divIndex) => (
                <div key={index} className={`flex justify-between mb-2 ${(path === "employee" && divIndex === 1)?"z-5":"z-10"} w-[40vw]`}>
                    {section.map((data:any) => (
                        <div key={data.id} className={`z-50 ${(section.length === 1 || section.length === 1) ? 'w-[18vw]' : 'w-[13.2vw]'} ${data.id === 'rating' ? 'w-[20vw]' : ''} ${data.id === 'web' ? 'w-[20vw]' : ''}`}>
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
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="primary" size="small" type="button" onClick={handleSubmit(onSubmit)}>Save</Button>
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="success" size="small" type="button" >Update</Button>
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="secondary" size="small" type="button" >Search</Button>
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="error" size="small" type="button" >Delete</Button>
                                    <Button sx={{ marginRight: 1 }} variant="contained" color="warning" size="small" type="button" onClick={function () {setResetForm(true);}}>Clear</Button>
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