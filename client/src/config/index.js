export const authRoles = [
    {id:"admin", label : "Admin"  },
    {id:"user", label : "User"  },


]


export const signUpFormControls = [
  

    {
        label:'User Name',
        name:'userName',
        type:'text',
        componentType:'input',
        placeholder:'Enter user name',

    },
    {
        label:'User Email',
        name:'userEmail',
        type:'text',
        componentType:'input',
        placeholder:'Enter user email',

    },
    {
        label:'Password',
        name:'password',
        type:'text',
        componentType:'input',
        placeholder:'Enter user password',

    },
    {
        label:'Role',
        name:'role',
        type:'text',
        componentType:'select',
        placeholder:'Enter Role Type',
        options:authRoles


    }
]


export const signInFormControls = [
  

   
    {
        label:'User Email',
        name:'userEmail',
        type:'text',
        componentType:'input',
        placeholder:'Enter user email',

    },
    {
        label:'Password',
        name:'password',
        type:'text',
        componentType:'input',
        placeholder:'Enter user password',

    },
    
]

export const initialSignInFormData = {
    userEmail:'',
    password:'',
}

export const initialSignUpFormData = {
    userName:'',
    userEmail:'',
    password:'',
    role:''
}

export const initailBlogFormControls = [
    {
        label:'Title',
        name:'title',
        type:'text',
        componentType:'input',
        placeholder:'Enter Title',

    },
    {
        label:'Content',
        name:'content',
        type:'text',
        componentType:'textarea',
        placeholder:'Enter Blog Content',

    },

]

export const initialBlogFormData = {
    title:"",
    content:""

}