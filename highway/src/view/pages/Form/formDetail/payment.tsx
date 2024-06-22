export function getPayment() {

    return [
        [
            [
                {
                    id: "paymentId",
                    title: "Payment ID",
                    type: "text",
                    placeholder: "Payment ID",
                    description: "",

                },
                {
                    id: "cusName",
                    title: "Customer Name",
                    type: "text",
                    placeholder: "Name",
                    description: "",
                    required: true,
                }
            ],
            [
                {
                    id: "cusEmail",
                    title: "Email",
                    type: "email",
                    placeholder: "Email",
                    description: "",

                },
                {
                    id: "cusContactNo",
                    title: "Contact number",
                    type: "number",
                    placeholder: "Contact",
                    description: "",
                    required: true
                }
            ]
            ,[
            {

            }
        ],
            [
                {
                    id: "button",
                }
            ]
        ],
        [


        ]

    ]

}