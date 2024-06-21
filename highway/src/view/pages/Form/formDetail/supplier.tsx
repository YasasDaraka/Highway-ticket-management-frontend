const categoryList = ["INTERNATIONAL", "LOCAL"]
export function getSupplier(supId:string) {

    return [
        [
            [
                {
                    id: "supId",
                    title: "Supplier ID",
                    type: "text",
                    placeholder: "Auto generated",
                    description: "",
                    /*isEdit:true*/
                },
                {
                    id: "supName",
                    title: "Supplier Name",
                    type: "text",
                    placeholder: "Name",
                    description: "Full name required",
                    required: true,
                }
            ],
            [
                {
                    id: "supCategory",
                    title: "Category",
                    type: "select",
                    placeholder: "Category",
                    description: "",
                    selectList: categoryList,
                },
                {
                    id: "supBuildNo",
                    title: "Building No or Name",
                    type: "text",
                    placeholder: "Address",
                    description: "Building no or name"
                }
            ]
        ],
        [
            [
                {
                    id: "supEmail",
                    title: "Email",
                    type: "email",
                    placeholder: "Email",
                    description: "Email required",

                },

            ],
            [
                {
                    id: "supMobileNo",
                    title: "Mobile No",
                    type: "number",
                    placeholder: "Mobile No",
                    description: "Mobile number",
                    required: true
                },
                {
                    id: "supLandNo",
                    title: "Landline No",
                    type: "number",
                    placeholder: "Landline No",
                    description: "Landline number",
                    required: true
                }

            ]
        ],
        [
            [
                {
                    id: "supLane",
                    title: "Lane",
                    type: "text",
                    placeholder: "Address",
                    description: "Lane",
                },
                {
                    id: "supCity",
                    title: "City",
                    type: "text",
                    placeholder: "Address",
                    description: "Main city",
                }
            ],
            [

                {
                    id: "supState",
                    title: "State",
                    type: "text",
                    placeholder: "Address",
                    description: "Main state",
                },
                {
                    id: "supPostalCode",
                    title: "Postal Code",
                    type: "number",
                    placeholder: "Address",
                    description: "Postal code",
                },
                {
                    id: "supCountry",
                    title: "Origin Country",
                    type: "text",
                    placeholder: "Address",
                    description: "Origin Country",
                }
            ],
            [
                {
                    id: "button",
                }
            ]
        ],
        [
            [
                {
                    id: "supImg"
                },
                {
                    /*id: "web"*/
                }
            ]
        ]
    ]

}