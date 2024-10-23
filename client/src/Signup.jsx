function Signup(){
    return(
    <div className="signup">
        <div className="signup1">
            <div>
                <label>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Enter your Name" /> 
                </label>
                <label>
                    <p>Phone number</p>
                    <input type="tel" name="contact_number" id="contact" placeholder="Enter your Contact number"/>
                </label>
                <label>
                    <p>Email</p>
                    <input type="email" name="email" id="email" placeholder="Enter your Email" />  
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                </label>
                 <label>
                    <p>Confirm password</p>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Enter your Confirm Password " />  
                 </label>
        
        
        
             </div>
            <div>
                <input type="submit" value="signUp"/>
            </div>
        </div>
    </div>
        
    );
}
export default Signup;