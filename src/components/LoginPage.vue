<template>
    <div class="login-page">
        
        <div class="login-container-grid">
            <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" height="1077"/>
        </div>
         <div class="login-container-grid" v-if="$root.state.userToken === null">
            <div class="title-desc">
                <img src=".././assets/logo.png" width="65" height="50">
                <h1>A public platform building the definitive collection of coding questions and answers.</h1>
            </div>
            <div class="wrap-flex">
                <div class="btn-login">
                    <button class="btn btn-primary big-btn" @click="isShowLoginFunc"><b>Login</b></button>
                </div>
                <div class="underline-login">
                    <hr>
                </div>
                <div class="btn-login">
                    <button class="btn btn-primary big-btn" @click="isShowRegisterFunc"><b>Register</b></button>
                </div>
            </div>
        </div>  
        <div class="login-container-grid" v-if="$root.state.userToken !== null">
            <div class="title-desc">
                <img  src=".././assets/logo.png" width="65" height="50">
                <h1>A public platform building the definitive collection of coding questions and answers.</h1>
                <button class="btn btn-primary big-btn" @click="gettingStart"><b>Getting start</b></button>
            </div>
            <div class="wrap-flex-login">
                <h5>Welcome back {{ $root.state.userName }}</h5>
                <div class="img-avatar">
                    <div v-if="$root.state.avatarStatus.status === false">
                        <img  src=".././assets/user.png" alt="" width="150" height="150">
                    </div>
                    <div v-if="$root.state.avatarStatus.status === true">
                        <img class="avatar-border" :src="$root.state.avatarStatus.avatarPath" alt="" width="150" height="150">
                    </div>
                    
                </div>
                <button class="btn btn-primary logined-btn" @click="onUpdate"><b>Edit profile</b></button>
                <button class="btn btn-danger logined-btn" @click="logOut"><b>Logout</b></button>
            </div>
        </div>


    <div id="myModal" class="modal"  :style="{ 'display': isShowLogin ? 'block' : 'none' }"> <!-- show เป็น block ไม่ show เป็น none -->
        <div class="modal-content">
          <span class="close" @click="closePopupLogin">&times;</span>
          <div class="register-title">
              <h4>Login</h4>
          </div>
          <form @submit.prevent="haddleLogin">
              <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                        <input type="text"  class="form-control"   value="email@example.com" v-model="loginData.username">
                    </div>
                </div>
                
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control"  v-model="loginData.password">
                    </div>
                </div>
                <div class="login-btn">
                    <h5 class="error-login" v-if="loginData.statusShow !== null">{{ loginData.statusShow }}</h5>
                    <button class="btn btn-outline-primary" type="submit">Login</button>
                </div>
           </form> 
        </div>
      </div>

    <div id="myModalRegiser" class="modal-regiser"  :style="{ 'display': isShowRegiser ? 'block' : 'none' }"> <!-- show เป็น block ไม่ show เป็น none -->
        <div class="modal-content-regiser">
          <div class="close-regiser" @click="closePopupRegisterFunc">&times;</div>
          <br>
          <br>
          <div class="register-title">
              <h4>Register</h4>
          </div>
            <div class="register-container" v-if="registerData.registerStatus === true">
                <div class="register-flex">
                    <h4>Register Completed</h4>
                </div>
            </div>
            <form @submit.prevent="haddleRegister" v-if="registerData.registerComplete === false">
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Firstname</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputFirstname" v-model="registerData.firstname" required>
                        </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Lastname</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputLastname" v-model="registerData.lastname" required>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputusername" v-model="registerData.username" required>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text"  class="form-control" id="staticEmail" value="email@example.com" v-model="registerData.email" required>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">PhoneNumber</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPhoneNumber" v-model="registerData.phoneNumber" required>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" v-model="registerData.password" required>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Confirm Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputConfirm" v-model="registerData.confirmPassword" required>
                    </div>
                </div>
                <div class="login-btn">
                    <h5 class="error-login" v-if="registerData.registerStatus !== null">{{ registerData.registerStatus }}</h5>
                    <button class="btn btn-outline-primary">Register</button>
                </div>
            </form>
        </div>
    </div>

       

    </div>
</template>

<script>
 

export default {
    name:"login-page",
    components:{
 
    },
    data(){
        return{
            isShowLogin:false,
            isShowRegiser: false,
            loginData:{
                username:'',
                password:'',
                statusShow: '',
            },
            registerData:{
                firstname:'',
                lastname:'',
                username:'',
                email:'',
                phoneNumber:'',
                password:'',
                confirmPassword:'',
                registerStatus:'',
                registerComplete: false
            }
        }
    },
    methods:{
        debugCheck(){
            console.log(this.$root.state.userToken)
        },
        isShowLoginFunc(){
            this.isShowLogin = true
        },
        closePopupLogin(){
            this.isShowLogin = false
            this.loginData.statusShow = null;
        },
        isShowRegisterFunc(){
            this.isShowRegiser = true
        },
        closePopupRegisterFunc(){
            this.isShowRegiser = false;
            this.registerData.registerStatus = null;
            this.registerData.firstname = '';
            this.registerData.lastname = '';
            this.registerData.email = '';
            this.registerData.username = '';
             this.registerData.password = '';
            this.registerData.confirmPassword = '';
            this.registerData.phoneNumber = '';
        },
        gettingStart(){
            this.$router.push('./tweetboard')  
        },
        onUpdate(){
          this.$router.push('./updateprofile')  
        },
        haddleLogin(){
            

            console.log(this.loginData.username, this.loginData.password)
            if(this.loginData.username === '' || this.loginData.password === '' || this.loginData.username === null || this.loginData.password === null){
                this.loginData.statusShow = "username and password must not empty."
            }else{
                
                const userAuth = {
                    username: this.loginData.username,
                    password: this.loginData.password
                }

                fetch('https://camt-twitterapi.pair-co.com/login',{
                    method:"POST",
                    headers:{
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",  
                    },
                    body: JSON.stringify(userAuth),
                }).then(res=> res.json().then((data)=>{
                    this.$root.state.userToken = data.token
                    this.$root.state.userName = this.loginData.username
                    console.log(data.token);
                    console.log(this.$root.state.userToken);
                    this.loginData.username = '';
                    this.loginData.password = '';
                    this.isShowLogin = false;
                    this.loginData.statusShow = null;
                    this.$router.push('./tweetboard');
                    
                })).catch(err=>{
                    console.log(err.message)
                    this.$root.state.userName = null
                    this.loginData.password = '';
                    this.loginData.statusShow = "invaild username or password"  
                })


                
            }
        },
        logOut(){
            this.$root.state.userToken = null;
            this.$root.state.userName = null;
            this.$root.state.avatarStatus.status = false;
            this.$root.state.avatarStatus.avatarPath = null;


        },
        haddleRegister(){
            this.registerData.registerComplete = false
            this.registerData.registerStatus = null

            const dataSetRegister = {
                firstname: this.registerData.firstname,
                lastname: this.registerData.lastname,
                email: this.registerData.email,
                username: this.registerData.username,
                password: this.registerData.password,
                phoneNumber: this.registerData.phoneNumber,
            }
            console.log(dataSetRegister)

            if(this.registerData.password !== this.registerData.confirmPassword){
                this.registerData.registerStatus = "password not match!"
            }
            else{
                fetch('https://camt-twitterapi.pair-co.com/register',{
                        method:"POST",
                        headers:{
                            "Access-Control-Allow-Origin": "*",
                            "Content-Type": "application/json",  
                        },
                        body: JSON.stringify(dataSetRegister)
                    }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                        this.registerData.registerComplete = true
                    })
                alert('register succuss!')
                this.isShowRegiser = false;
                this.registerData.firstname = '';
                this.registerData.lastname = '';
                this.registerData.email = '';
                this.registerData.username = '';
                this.registerData.password = '';
                this.registerData.confirmPassword = '';
                this.registerData.phoneNumber = '';
            } 
        }
    },
    mounted(){
        console.log("mounted ==> ",this.$root.state.userToken )
        if(this.$root.state.userToken !== null){
            fetch('https://camt-twitterapi.pair-co.com/me',{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.$root.state.userToken
                }
            }).then(res => res.json()).then( (data) => {
                this.$root.state.avatarStatus.status = true
                this.$root.state.avatarStatus.avatarPath = data.avatar
                console.log(this.$root.state.avatarStatus.status)
                console.log(this.$root.state.avatarStatus.avatarPath)
            }).catch(err => {
                console.log(err)
            })
        }
    }
    
}
</script>

<style scoped>
 

.login-page{
  display: flex;
}
 
.login-container-grid{
    width: 100%;
}

.title-desc{
    text-align: center;
    padding-left: 25px;
    padding-bottom: 25px;
    margin-top: 300px;
}

.wrap-flex{
    height: 250px;
}

.wrap-flex-login{
    text-align: center;
}
.img-avatar{
    margin-top: 25px;
    margin-bottom: 30px;
}

.btn-login{
    display: flex;
    justify-content: center;
    align-items: center;
}
.underline-login{
    text-align: center;
    margin: auto;
    width: 50%;
}
.big-btn{
    width: 350px;
    height: 100px;
    border-radius: 70px;
    font-size: 30px;
}

.logined-btn{
    width: 150px;
    border-radius: 70px;
    margin-left:10px;
}
 

/* ============ The Modal (background) ============*/
.modal {
  display: none; /* Hidden by default   none block*/
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  
}

/* Modal Content/Box */
.modal-content {
  background-color: #383838;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid rgb(214, 214, 214);
  width: 35%; /* Could be more or less, depending on screen size */
  border-radius: 35px;  
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.login-btn{
    text-align: center;
}

.btn-outline-primary{
    width: 200px;
    border-radius: 35px;
}
/*============END============*/


/* The Modal register (background) */
.modal-regiser {
  display: none; /* Hidden by default   none block*/
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  
}

/* Modal Content/Box */
.modal-content-regiser {
  background-color: #383838;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid rgb(214, 214, 214);
  width: 35%; /* Could be more or less, depending on screen size */
  border-radius: 35px;  
}

.register-title{
    text-align: center;
    margin-bottom: 50px;
}

/* The Close Button */
.close-regiser {
  color: #aaa;
  float: left;
  font-size: 28px;
  font-weight: bold;
}

.close-regiser:hover,
.close-regiser:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
/* The Modal register (background)  end */

.error-login{
    color: red;
}

.register-container{
    text-align: center;
    color: rgb(10, 80, 10);
}

.avatar-border{
    border-radius: 50%;
}
</style>