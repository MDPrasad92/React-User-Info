import React from 'react'
import { DatePicker, Button, Icon, Empty, message } from 'antd';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
class UserList extends React.Component{
    constructor(props)
    {
        debugger
        super(props);
        this.state ={
            // UserList :[{SID : 1, StudentName : "Prasad",MobileNo : "9652480960",Email:"test@gmail.com"}]
            UserList : this.props.location.state == undefined ? [] : this.props.location.state.userList
        }
    }

    render(){
        return(
            <><br></br>
            <div className="row">
                <div className="col m9">
                        <Breadcrumb>
                            <Breadcrumb.Item href="">
                                <HomeOutlined />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <UserOutlined />
                                <span>Users</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>User List</Breadcrumb.Item>
                        </Breadcrumb>
                </div>
                <div className="col m3">
                    <div className="buttonAlignment">
                    <Link 
                    to={{
                        pathname: `/UserCreation/0`,
                        state: {
                          userList: this.state.UserList,
                        },
                      }}
                    className="ant-btn ant-btn-primary"> Create User</Link>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col m12">
                <table className="tableStyle">
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Mobile No.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.UserList.map((item, index)=>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.UserName}</td>
                                <td>{item.Email}</td>
                                <td>{item.Address}</td>
                                <td>{item.MobileNo}</td>
                                <td>
                                       
                                <Link className="ant-btn ant-btn-primary" 
                                //to={`/UserCreation/${item.SID}`}
                                to={{
                                    pathname: `/UserCreation/${index+1}`,
                                    state: {
                                      userList: this.state.UserList,
                                      userid : index+1
                                    },
                                  }}
                                > Edit</Link>
                                       
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div></div></>
        );
    }

}
export default UserList;