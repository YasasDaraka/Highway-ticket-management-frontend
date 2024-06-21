const genderList = ["MALE", "FEMALE"]
const statusList = ["MARRIED", "UNMARRIED"]
const accessRoleList = ["ADMIN", "USER"]
export function getEmployee(empId:string) {

    return [
        [
            [
                {
                    id: "empId",
                    title: "Employee ID",
                    type: "text",
                    placeholder: "Auto generated",
                    description: "",
                    /*isEdit:true*/
                },
                {
                    id: "empName",
                    title: "Employee Name",
                    type: "text",
                    placeholder: "Name",
                    description: "Full name required",
                    required: true,
                }
            ],
            [
                {
                    id: "empGender",
                    title: "Employee Gender",
                    type: "select",
                    placeholder: "Gender",
                    description: "",
                    selectList: genderList,
                },
                {
                    id: "empStatus",
                    title: "Status",
                    type: "select",
                    placeholder: "Status",
                    description: "",
                    selectList: statusList,
                },
                {
                    id: "designation",
                    title: "Designation",
                    type: "text",
                    placeholder: "Designation",
                    description: "Designation",
                },
            ]
        ],
        [
            [
                {
                    id: "empDob",
                    title: "Employee DOB",
                    type: "date",
                    placeholder: "Date",
                    description: "Date of birth",

                },
                {
                    id: "joinDate",
                    title: "Date of Join",
                    type: "date",
                    placeholder: "Date",
                    description: "Date of Join",

                }
            ],
            [

                {
                    id: "empRole",
                    title: "Access Role",
                    type: "select",
                    placeholder: "Role",
                    description: "",
                    selectList: accessRoleList,
                },
                {
                    id: "empEmail",
                    title: "Email",
                    type: "email",
                    placeholder: "Email",
                    description: "Email required",

                },
                {
                    id: "empContactNo",
                    title: "Contact number",
                    type: "number",
                    placeholder: "Contact",
                    description: "Mobile number",
                    required: true
                }
            ]
        ],
        [
            [
                {
                    id: "empBranch",
                    title: "Branch",
                    type: "text",
                    placeholder: "Branch",
                    description: "Branch",
                },
                {
                    id: "empBuildNo",
                    title: "Building No or Name",
                    type: "text",
                    placeholder: "Address",
                    description: "Building no or name",
                },
                {
                    id: "empLane",
                    title: "Lane",
                    type: "text",
                    placeholder: "Address",
                    description: "Lane",
                }
            ],
            [
                {
                    id: "empCity",
                    title: "City",
                    type: "text",
                    placeholder: "Address",
                    description: "Main city",
                },
                {
                    id: "empState",
                    title: "State",
                    type: "text",
                    placeholder: "Address",
                    description: "Main state",
                },
                {
                    id: "empPostalCode",
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
                    id: "guardianName",
                    title: "Name of Guardian",
                    type: "text",
                    placeholder: "Guardian Name",
                    description: "Name required",

                },
                {
                    id: "web"
                }
            ],
            [
                {
                    id: "emergencyContact",
                    title: "Contact number",
                    type: "number",
                    placeholder: "Emergency Contact",
                    description: "Mobile number",

                }
            ]
        ]
    ]

}