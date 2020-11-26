import React, { Component } from 'react';
import BackToTop from "react-back-to-top-button";

import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../ReactComponents/Footer'

import Herofaq from '../ReactComponents/Herofaq';
import Faqhowtouse from '../ReactComponents/Faqhowtouse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { symbol } from 'prop-types';

export default class Faq extends Component {
    state = {
        activeSidebar: false,
        activeForgotPassword: false
    };

    handleActiveSidebar = (activeSidebar) => this.state.activeSidebar ? this.setState({activeSidebar: false}) : this.setState({activeSidebar: true})

    handleActiveForgotPassword = (activeForgotPassword) => this.setState({activeForgotPassword: true})
    handleDeactiveForgotPassword = (activeForgotPassword) => this.setState({activeForgotPassword: false})

    render() {
        const style = {
            button: css`
                color: #020205;

                &:hover {
                    color: #b3d146;
                    text-decoration: none;
                }
            `,
            hr: css`
                border: 3px solid #b3d146;
                margin: 0;
                padding: 0;
            `,
            div: css`
                padding-bottom: 1em;
                max-width:100%;
                min-width:150px;
                float:  left;
                clear: left;
            `,
            divForgot: css`
                max-width: 100%;
                min-width: 250px;
                width: 260px;
            `,
            col: css`
                max-width: 100%;
                min-width: 250px;
            `,
            row: css`
                height: 40vh;
            `,
        }

        return (
            <>
            <BackToTop
                showOnScrollUp={false}
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
                style={{zIndex: "999", borderRadius: "50%", cursor: "default"}}
            >
                <button className="btn btn-transparent p-0 m-0 rounded-circle" style={{borderRadius: "50%", cursor: "default"}}>
                    <FontAwesomeIcon icon={faAngleUp} style={{width: "1.5em",  height: "1.5em",fontSize: "2em", color: "#b3d146", backgroundColor: "#020205", borderRadius: "50%", cursor: "pointer"}} />
                </button>
            </BackToTop>
            <Header headerLanding handleActiveSidebar={this.handleActiveSidebar} activeSidebar={this.state.activeSidebar} />
            <Sidebar activeSidebar={this.state.activeSidebar} currentPath="/faq" />
            <div className="container-fluid p-0 m-0">
                <Herofaq />
                <div className="row p-5 m-0 d-flex">
                    <div className="col-5">
                        <div css={style.div}>
                                <button css={style.button} className="btn btn-link m-0 p-0" onClick={this.handleDeactiveForgotPassword}>
                                    <h2 className="font-weight-bold m-0 p-0">
                                    Using Todoapp</h2>
                                </button>

                                {this.state.activeForgotPassword ? <></> : <hr css={style.hr} /> }
                        </div>
                        <div css={style.div}>
                            <button css={style.button} className="btn btn-link m-0 p-0" onClick={this.handleActiveForgotPassword}>
                                <h2 className="font-weight-bold m-0 p-0">Managing your Account</h2>
                            </button>

                            {this.state.activeForgotPassword ? <hr css={style.hr} /> : <></> }
                        </div>
                        
                    </div>
                    <div className="col">
                        {this.state.activeForgotPassword ? 
                        <div css={style.row}>
                            <h3 className="font-weight-bold">If you forget your password, you can email and send your registered email address to us
                            </h3>
                            <hr className="pt-0 mt-0" />
                            <h4 className="font-weight-bold">Here is our email address :</h4>
                            <h5>kelompok10uib2020@gmail.com</h5>
                        </div>
                        :
                        <div css={style.col}>
                            <h4 className="font-weight-bold">Everything you need to know, so you can use Todoapp like a pro</h4>
                            <hr className="pt-0 mt-0" />
                            <Faqhowtouse 
                                heading="
                                    Input Todo
                                "
                                img="../../../static/frontend/images/inputtodo.png"
                                paragraph="Click this Input bar to start typing"
                            />
                            <Faqhowtouse 
                                heading="
                                    Submit Todo & Check If it has been inputted 
                                "
                                img="../../../static/frontend/images/submittodo.png"
                                paragraph="Click the Submit button and look at the bottom right to know that Todo is inputted successfully"
                            />
                            <Faqhowtouse 
                                heading="
                                    Edit Todo
                                "
                                img="../../../static/frontend/images/edittodo.png"
                                paragraph="Click the Edit button and change the Todo title in the same place as Input bar"
                            />
                            <Faqhowtouse 
                                heading="
                                    Cancel Edit Todo
                                "
                                img="../../../static/frontend/images/canceledit.png"
                                paragraph="To cancel edit, click on the Cancel Edit button"
                            />
                            <Faqhowtouse 
                                heading="
                                    Submit Edited Todo
                                "
                                img="../../../static/frontend/images/submitedittodo.png"
                                paragraph="Click on the Submit button to finish edit Todo and look at the bottom right to check if Todo is edited successfully"
                            />
                            <Faqhowtouse 
                                heading="
                                    Complete Todo
                                "
                                img="../../../static/frontend/images/completetodo.png"
                                paragraph="Click on the Task title to mark done the Task"
                            />
                            <Faqhowtouse 
                                heading="
                                    Mark Completed Todo as not Finished
                                "
                                img="../../../static/frontend/images/uncompletetodo.png"
                                paragraph="Click on the Completed Task title to mark have not done"
                            />  
                            <Faqhowtouse 
                                heading="
                                    Delete Todo
                                "
                                img="../../../static/frontend/images/deletetodo.png"
                                paragraph="Click Delete button on the Todo title that you want to delete"
                            />
                            <Faqhowtouse 
                                heading="
                                    Confirm to Delete Todo
                                "
                                img="../../../static/frontend/images/deletetodoconfim.png"
                                paragraph="After clicking on the Delete button, you will get confirmation to delete your Todo, and you can see the Todo title there.
                                Click No button to cancel delete and Click Yes to confirm delete"
                            />
                            <Faqhowtouse 
                                heading="
                                    Check If it has been Deleted Successfully
                                "
                                img="../../../static/frontend/images/checkdelete.png"
                                paragraph="You can check that your Todo is successful delete or not at the bottom right"
                            />
                            <Faqhowtouse 
                                heading="
                                    Delete all Todo Tasks
                                "
                                img="../../../static/frontend/images/deletealltodo.png"
                                paragraph="You can delete all the Todo Task with one button, that is Delete all button"
                            />
                            <Faqhowtouse 
                                heading="
                                    Confirm to Delete All Todo Tasks
                                "
                                img="../../../static/frontend/images/deletealltodoconfirm.png"
                                paragraph="After clicking on the Delete all button, you will get confirmation to delete all of your Todo Tasks.
                                Click No button to cancel delete and Check the agree box then click Yes to confirm delete"
                            />
                        </div>
                    }
                    </div>
                </div>
                <Footer />
            </div>
            

            </>
        )
    }
}
