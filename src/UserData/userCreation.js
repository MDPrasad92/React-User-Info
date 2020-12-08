import React from 'react'
import { DatePicker, Button, Icon, Empty, message } from 'antd';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
class UserCreation extends React.Component{
    constructor(props)
    {
        debugger
        super(props);
        this.state ={
            UserList :this.props.location.state.userList,
            UserObj :{SID : 0, UserName : "",MobileNo : "",Email:"", Address:""}
        }
    }

    componentDidMount()
    {
        debugger
        if(this.props.location.state != undefined)
        {

        if(this.props.location.state.userid!=0)
        {
            debugger
            var dt = this.state.UserList.filter(a =>{
                debugger
                return a.SID == this.props.location.state.userid
            })
            if(dt.length > 0)
            {
            this.setState({...this.state,UserObj:dt[0]});
            }
        }
    }
}

    createUser()
    {
        debugger;
        //this.setState({...this.state, UserObj : {...this.state.UserObj,["SID"]:(this.state.UserList.length + 1)}})
        this.state.UserList.push(this.state.UserObj);       

    }

    handleChange = (e, name) => {
        debugger
        this.setState({ ...this.state, UserObj: { ...this.state.UserObj, [name]: e.target.value,SID : this.state.UserList.length + 1 } })
      };

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
                            <Breadcrumb.Item>User Creation</Breadcrumb.Item>
                        </Breadcrumb>
                </div>
                <div className="col m3">
                    <div className="buttonAlignment">
                    <Link 
                    to={{
                        pathname: `/UserList`,
                        state: {
                          userList: this.state.UserList,
                        },
                      }}
                    className="ant-btn ant-btn-primary">
                                Back To List
                                        </Link>
                    </div>

                </div>
            </div>
            <br></br><br></br><br></br>
<div style={{width:'400px', margin:'auto',borderRadius:'4px',boxShadow:'1px 4px 5px #CCC',padding:'20px'}}>
    <div style={{fontSize:'large',textAlign:'center',fontWeight:'bold'}}>User Creation</div>
                <div className="row">
                <div className="col m12">
                    <div className="divFlex">
                        <input type="text" required onChange={(e) => this.handleChange(e, 'UserName')} defaultValue={this.state.UserObj.UserName == undefined ? "" : this.state.UserObj.UserName}/>
                        <label>User Name</label>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col m12">
                    <div className="divFlex">
                        <input type="text" required onChange={(e) => this.handleChange(e, 'Email')} defaultValue={this.state.UserObj.Email==undefined ? "" : this.state.UserObj.Email}/>
                        <label>Email</label>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col m12">
                    <div className="divFlex">
                        <input type="text" required onChange={(e) => this.handleChange(e, 'Address')} defaultValue={this.state.UserObj.Address == undefined ? "" : this.state.UserObj.Address}/>
                        <label>Address</label>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col m12">
                    <div className="divFlex">
                        <input type="number" required onChange={(e) => this.handleChange(e, 'MobileNo')} defaultValue={this.state.UserObj.MobileNo == undefined ? "" : this.state.UserObj.MobileNo}/>
                        <label>Mobile No.</label>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col m12">
                    {
                        this.props.match.params.id == 0 ?
                    <div className="buttonAlignment">
                        <Link
                        to={{
                            pathname: `/UserList`,
                            state: {
                              userList: this.state.UserList,
                            },
                          }}
                        className="ant-btn ant-btn-primary" onClick={()=>this.createUser()}>Create</Link>
                    </div> : null
                    }
                </div>
                </div>
            </div>
            </>
        );
    }

}
export default UserCreation;