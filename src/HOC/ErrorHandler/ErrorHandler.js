import React , {Component} from "react";
import { Modal } from "antd";
import Aux from "../Auxulliary";
const ErrorHandler = (WrappedCompnent , axios ) => {
    return class extends Component{
        state = {
            error: null,
        }
        componentWillMount() {
            axios.interceptors.request.use(req => {
                this.setState({
                    error : null ,
                })
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState(prevState => {
                    return {
                        error : error ,
                    }
                })
            })
        }
        closeModal = () => {
            this.setState({
                error : null ,
            })
        }
        render() {
            console.log("The axios Sent as Props ", axios);
            return (
                <Aux>
                    <Modal visible = {this.state.error} onCancel = {this.closeModal} onOk = {this.closeModal}>
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <WrappedCompnent {...this.props}/>
                </Aux>
            )
        }
    }
}
export default ErrorHandler; 