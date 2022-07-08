import './App.css'
export const userColumns =  [
           {field:"id",headerName:"ID",width:50},
           {field:"user",headerName:"User",width:230,renderCell:(params)=>{
            return(
                <div className="cellWithTable">
                    <img className="cellImg" src={params.row.img} alt="" />&nbsp;
                     {params.row.username}
                </div>
            )
           }},
           {field:"email",headerName:"email",width:200},
           {field:"age",headerName:"age",width:60},
           {field:"status",headerName:"status",width:100,renderCell:(params)=>{
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
           }},
        ]
export const userRows = [
            {   id:1,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU",
                username: 'Sajnamol',
                email:'sajna@gmail.com',
                office: 'Edinburgh',
                age: '61',
                status:"unblock",
                date: '2011/04/25',
            },
            {
                id:2,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU",
                username: 'Sajna       ',
                email:'sajna@gmail.com',
                office: 'Tokyo',
                age: '63',
                status:"unblock",
                date: '2011/07/25',
            },
            {
                id:3,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU",
                username: 'Sajna',
                email:'sajna@gmail.com',
                office: 'San Francisco',
                age: '66',
                status:"block",

                date: '2009/01/12',
            },
            {   id:4,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU",
                username: 'Sajnamol',
                email:'sajna@gmail.com',
                office: 'Edinburgh',
                age: '22',
                status:"block",
                date: '2012/03/29',
            }
        ]