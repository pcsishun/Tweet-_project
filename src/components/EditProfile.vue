<template>
    <div class="editprofile">
        <span class="back-to-home" @click="backToHome"><b>&#8598;</b></span>
        <div class="upload-container">
            <div class="avatar-container">
                <div class="avatar-img">
                    <div class="image-upload">
                        <label for="file-input">
                             <img  src=".././assets/user.png" alt="" width="250" height="250" />
                        </label>

                        <input id="file-input" type="file" />
                    </div>
                   
                        <!-- <img  src=".././assets/add.png" alt="" width="50" height="50"> -->
                </div>
                <div class="form-update">
                    <div class="update-box">
                        <h5>Username</h5>
                        <div class="width-input">
                            <input class="form-control" v-model="arrayData.username" />
                        </div>
                    </div>
                    <div class="update-box">
                        <h5>Firstname</h5>
                        <div class="width-input">
                            <input class="form-control"   v-model="arrayData.firstname"/>
                        </div>
                    </div>
                    <div class="update-box">
                        <h5>Lastname</h5>
                        <div class="width-input">
                            <input class="form-control"  v-model="arrayData.lastname"/>
                        </div>
                    </div>
                    <div class="update-box">
                        <h5>Email</h5>
                        <div class="width-input">
                            <input class="form-control"  v-model="arrayData.email"/>
                        </div>
                    </div>
                    <div class="update-box">
                        <h5>PhoneNumber</h5>
                        <div class="width-input">
                            <input class="form-control"  v-model="arrayData.phoneNumber"/>
                        </div>
                    </div>
                    <div class="btn-update">
                        <button class="btn btn-primary "><b>Update</b></button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'editprofile',
    components:{

    },
    data(){
        return{
            meData:null,
            arrayData:{
                username: '',
                firstname: '',
                lastname: '',
                email: '',
                phoneNumber: '',
            }
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
        getMeData(){
            fetch('https://camt-twitterapi.pair-co.com/me',{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json", 
                    "Authorization": "Bearer " + this.$root.state.userToken
                }
            }).then(res => res.json().then(data => {
                console.log(data);
                this.meData = data;
                console.log('meData ==> '+this.meData)
            })).catch(err=>{
                console.log(err) 
            })
        }
    },
    mounted(){
        this.getMeData();
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
</style>