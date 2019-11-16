import React, {Component} from "react"
import './Footer.css'
class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <footer className="footer-area" >
                <div className="footer-widget" style={{padding:20}}>
                        <div className="row">
                            <div className="col-6">
                                {/* <div  className="single-widget-home">
                                    <h3 className="mb-4">Subcribe to us</h3>
                                </div> */}
                                <div style={{color: "white", verticalAlign: "middle"}}>
                                <i className="fab fa-twitter-square twitter"></i>
                                <i className="fab fa-facebook-square facebook"></i>
                                <i className="fab fa-skype skype"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="single-widget-home mb-5 mb-lg-0">
                                    <form action="#" style={{verticalAlign: "middle"}}>
                                        <input type="email" 
                                            placeholder="Your email here" 
                                            onFocus="this.placeholder = ''" 
                                            onBlur="this.placeholder = 'Your email here'" 
                                            required
                                        />
                                        <button type="submit" className="template-btn">send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        )
    }
}

export default Footer