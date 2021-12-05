<template>
    <div class="editprofile">
        <span class="back-to-home" @click="backToHome"><b>&#8598;</b></span>
        <div class="upload-container">
            <div class="avatar-container">
                <div class="avatar-img">
                    <div class="image-upload" v-if="$root.state.avatarStatus.status === false">
                        <label for="file-input"  >
                             <img  src=".././assets/user.png" alt="" width="250" height="250" />
                        </label>

                        <input id="file-input" ref="file" type="file" @change="setUploadImg($event)" />
                        <div class="show-btn-up-img" v-if="isImgUpdate === true">
                            <button  class="btn btn-warning" @click="onUploadIimg">upload</button>
                            <button class="btn btn-danger btn-out" @click="haddleBtnBack">X</button>
                        </div>
                        
                    </div>
                    <div class="image-upload" v-if="$root.state.avatarStatus.status === true">
                        <label for="file-input"  >
                             <img  class="avatar-border"  :src="$root.state.avatarStatus.avatarPath" alt="" width="250" height="250" />
                        </label>

                        <input id="file-input" ref="file" type="file" @change="setUploadImg($event)"/>
                        <div class="show-btn-up-img" v-if="isImgUpdate === true">
                            <button class="btn btn-warning" @click="onUploadIimg" >upload</button>
                            <button class="btn btn-danger btn-out" @click="haddleBtnBack">X</button>
                        </div>
                    </div>
                   
                        <!-- <img  src=".././assets/add.png" alt="" width="50" height="50"> -->
                </div>
                <form  >
                    <div class="form-update">
                        <div class="update-box">
                            <h5>Firstname</h5>
                            <div class="width-input">
                                <div class="on-update-input"  v-if="updateMe.firstnameStatus  === false">
                                    <input class="form-control"   :value="meData.firstname" disabled />
                                    <button class="btn btn-warning" @click="haddleUpdateRow('firstname')">edit</button>
                                </div>
                                <div class="on-update-input" v-if="updateMe.firstnameStatus  === true">
                                    <input class="form-control"   v-model="arrayData.firstname"/>
                                    <button class="btn btn-warning" @click="haddleUpdateRow('firstname')">back</button>
                                </div>
                                
                            </div>
                        </div>
                        <div class="update-box">
                            <h5>Lastname</h5>
                            <div class="width-input">
                                <div class="on-update-input"  v-if="updateMe.lastnameStatus   === false">
                                    <input class="form-control"  :value="meData.lastname" disabled/>
                                    <button class="btn btn-warning " @click="haddleUpdateRow('lastname')">edit</button>
                                </div>
                                <div class="on-update-input" v-if="updateMe.lastnameStatus   === true">
                                    <input class="form-control"  v-model="arrayData.lastname"/>
                                    <button class="btn btn-warning" @click="haddleUpdateRow('lastname')">back</button>
                                </div>
                                
                            </div>
                        </div>
                        <div class="update-box">
                            <h5>Email</h5>
                            <div class="width-input">
                                <div class="on-update-input"  v-if="updateMe.emailStatus   === false">
                                    <input class="form-control"  :value="meData.email" disabled/>
                                    <button class="btn btn-warning" @click="haddleUpdateRow('email')">edit</button>
                                </div>
                                <div class="on-update-input" v-if="updateMe.emailStatus   === true">
                                    <input class="form-control"  v-model="arrayData.email"/>
                                    <button class="btn btn-warning" @click="haddleUpdateRow('email')">back</button>
                                </div>
                            </div>
                        </div>
                        <div class="update-box">
                            <h5>PhoneNumber</h5>
                            <div class="width-input">
                                <div class="on-update-input"  v-if="updateMe.phoneNumberStatus  === false">
                                    <input class="form-control" :value="meData.phoneNumber" disabled/>
                                    <button class="btn btn-warning" @click="haddleUpdateRow('phoneNumber')">edit</button>
                                </div>
                                <div class="on-update-input" v-if="updateMe.phoneNumberStatus  === true">
                                    <input class="form-control"  v-model="arrayData.phoneNumber"/>
                                    <button class="btn btn-warning" @click="haddleUpdateRow('phoneNumber')">back</button>
                                </div>
                            </div>
                        </div>
                        <div class="btn-update">
                            <button class="btn btn-primary" type="submit"><b>Update</b></button>
                        </div>
                    </div> 
                </form>

                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name:'editprofile',
    components:{

    },
    data(){
        return{
            meData:null,
            imgData:null,
            file:"",
            isImgUpdate:false,
            arrayData:{
                firstname: '',
                lastname: '',
                email: '',
                phoneNumber: '',
            },
            updateMe:{
                usernameStatus: false,
                firstnameStatus: false,
                lastnameStatus: false,
                emailStatus: false,
                phoneNumberStatus: false,
            },
        }
    },
    methods:{
        checkUser(){
          const isToken = this.$root.state.userToken;
          if(isToken === null){
              this.$router.push('./')
          }else{
              console.log('pass')
          }
        },
        backToHome(){
            this.$router.push('./')
        },
        haddleBtnBack(){
            this.isImgUpdate = false;
        },
        getMeData(){
            fetch('https://camt-twitterapi.pair-co.com/me',{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json", 
                    "Authorization": "Bearer " + this.$root.state.userToken
                }
            }).then(res => res.json().then(data => {
                console.log("getMeData ==>",data);
                this.meData = data;
                console.log('meData ==> '+ JSON.stringify(this.meData))
            })).catch(err=>{
                console.log(err) 
            })
        },
        haddleUpdateRow(param){
            if(param ==="firstname"){
                if(this.updateMe.firstnameStatus === false){
                    this.updateMe.firstnameStatus = true
                }
                else if(this.updateMe.firstnameStatus === true){
                    this.updateMe.firstnameStatus = false
                }
            }
            else if(param ==="lastname"){
                if(this.updateMe.lastnameStatus === false){
                    this.updateMe.lastnameStatus = true
                }
                else if(this.updateMe.lastnameStatus === true){
                    this.updateMe.lastnameStatus = false
                }
            }
            else if(param ==="email"){
                if(this.updateMe.emailStatus === false){
                    this.updateMe.emailStatus = true
                }
                else if(this.updateMe.emailStatus === true){
                    this.updateMe.emailStatus = false
                }
            }
            else if(param ==="phoneNumber"){
                if(this.updateMe.phoneNumberStatus === false){
                    this.updateMe.phoneNumberStatus = true
                }
                else if(this.updateMe.phoneNumberStatus === true){
                    this.updateMe.phoneNumberStatus = false
                }
                
            }
        },
        setUploadImg(){
            this.file = this.$refs.file.files[0];
            console.log("setUploadImg",this.file  );
            this.isImgUpdate = true
        },
        onUploadIimg(){

            let formData = new FormData();
            formData.append('file', this.file)

            console.log("onUploadIimg ==> " ,this.file)
            console.log("onUploadIimg userToken ==>", this.$root.state.userToken)

            axios.put('https://camt-twitterapi.pair-co.com/me/avatar', formData,    {
                headers: {
                    "Content-Type" :"multipart/form-data",
                    "Authorization": "Bearer "+this.$root.state.userToken
                    }
            }).then(res => res.json().then((data) => {
                console.log(data);
                alert("upload");
                this.$router.push('/updateprofile')
            })).catch(err=>{
                console.log(err);
                alert("fail")
            })

            // fetch('https://camt-twitterapi.pair-co.com/me/avatar',{
            //     method:"PUT",
            //     headers:{
            //         "Content-Type":"multipart/form-data",
            //         "Authorization":"Bearer "+this.$root.state.userToken
            //     },
            //     body: formData
            // }).then(res => res.json()).then((data)=>{
            //     console.log(data)
            //     alert("Upload!!")
            //     this.$router.push('/updateprofile')
            // }).catch(err=>{
            //     console.log(err)
            //     alert("Fail", err)
            // })          
        },
        haddleOnUpdate(){
            let setFileUpload = null 
 
            if(this.updateMe.firstnameStatus === true){
                setFileUpload = {
                    firstname: this.arrayData.firstname
                }
            }
            else if(this.updateMe.firstnameStatus === true && this.updateMe.lastnameStatus === true){
                setFileUpload = {
                    firstname: this.arrayData.firstname,
                    lastname: this.arrayData.lastname,
                }
            }
            else if(this.updateMe.firstnameStatus === true && this.updateMe.lastnameStatus === true && this.updateMe.emailStatus === true){
                setFileUpload = {
                    firstname: this.arrayData.firstname,
                    lastname: this.arrayData.lastname,
                    email: this.arrayData.email
                }
            }
            else if(this.updateMe.firstnameStatus === true && this.updateMe.lastnameStatus === true && this.updateMe.emailStatus === true  && this.updateMe.phoneNumberStatus === true){
                setFileUpload = {
                    firstname: this.arrayData.firstname,
                    lastname: this.arrayData.lastname,
                    email: this.arrayData.email,
                    phoneNumber: this.arrayData.phoneNumber
                }
            }

            fetch('https://camt-twitterapi.pair-co.com/me',{
                method:"PUT",
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type":"application/json",
                    "Authorization":"Bearer " + this.$root.state.userToken
                },
                body: setFileUpload
            }).then(res=> res.json()).then((data)=>{
                console.log("update success!", data)
            }).catch(err => {
                console.log(err)
            })

            alert("Now update")
            this.$router.push('./')
        }
    },
    mounted(){
        this.getMeData();
        console.log(this.$root.state.avatarStatus.status)
        console.log(this.$root.state.avatarStatus.avatarPath)
    },
    beforeMount(){
        this.checkUser();
    }
}
</script>

<style scoped>
.editprofile{
    margin: auto;
    margin-top: 1.5%;
    width: 30%;
    height: 1024px;
    border: 10px solid rgb(59, 172, 201);
    border-radius: 30px;
}

.avatar-container{
    text-align: center;
    margin-top: 1.5%; 
}

.form-update{
    margin-top: 80px;
}

.width-input{
    margin: auto;
    width: 70%;
}

.update-box{
    margin: 30px;
}

.btn-update{
    margin-top: 80px;
}

.btn-primary{
    width: 30%;
    border-radius: 30px;
}

.avatar-img{
    position:relative;
    margin: auto;
    width: 50%;
}

.image-upload>input {
  display: none;
}

.back-to-home{
    text-align: center;
    position:absolute;
    background: rgb(173, 173, 173);
    color: black;
    font-size: 32px;
    width: 50px;
    border-radius: 60%;
}
.on-update-input{
    display: flex;
}

.btn-warning{   
    border-radius: 30px;
    margin-left: 10px;
}

.avatar-border{
    border-radius: 50%;
}

.avatar-border:hover{
    opacity: 50;
}

.show-btn-up-img{
    margin-top: 10px;
}
.btn-out{
    border-radius: 50%;
    margin-left: 10px;
}
</style>