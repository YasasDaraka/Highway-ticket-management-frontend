const genderList = ["MALE", "FEMALE"]

export function getCustomer(cusId:string) {

    return [
       [
         [
            {
            id: "cusId",
            title: "Customer ID",
            type: "text",
            placeholder: "Auto generated",
            description: "",
            /*isEdit:true*/
            },
            {
                id: "cusName",
                title: "Customer Name",
                type: "text",
                placeholder: "Name",
                description: "Full name required",
                required: true,
            }
        ],
        [
            {
            id: "cusGender",
            title: "Customer Gender",
            type: "select",
            placeholder: "Gender",
            description: "",
            selectList: genderList,
            },
            {
                id: "cusDob",
                title: "Customer DOB",
                type: "date",
                placeholder: "Date",
                description: "Date of birth",

            }
            ]
       ],
       [
           [
            {
                id: "cusEmail",
                title: "Email",
                type: "email",
                placeholder: "Email",
                description: "Email required",

            },
            {
                id: "cusContactNo",
                title: "Contact number",
                type: "number",
                placeholder: "Contact",
                description: "Mobile number",
                required: true
            }
        ],
        [
            {
                id: "loyaltyDate",
                title: "Loyalty Start Date",
                type: "date",
                placeholder: "Date",
                description: "Date of loyalty Start"
            },
            {
                id: "totalPoints",
                title: "Total Points",
                type: "number",
                placeholder: "",
                description: "",
            },
            {
                id: "lastPurchaseDate",
                title: "Last Purchase Date",
                type: "text",
                placeholder: "",
                description: "",
                isEdit:true
            }
        ]
        ],
        [
        [
            {
                id: "cusBuildNo",
                title: "Building No or Name",
                type: "text",
                placeholder: "Address",
                description: "Building no or name",
            },
            {
                id: "cusLane",
                title: "Lane",
                type: "text",
                placeholder: "Address",
                description: "Lane",
            }
        ],
        [
            {
                id: "cusCity",
                title: "City",
                type: "text",
                placeholder: "Address",
                description: "Main city",
            },
            {
            id: "cusState",
            title: "State",
            type: "text",
            placeholder: "Address",
            description: "Main state",
            },
            {
                id: "cusPostalCode",
                title: "Postal Code",
                type: "number",
                placeholder: "Address",
                description: "Postal code",
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
                    id: "rating"
                },
                {
                    id: "web"
                }
            ]
        ]
    ]

}