<script setup>
const tittle = "MY First Vue.Js Project"
 const add = "Add Post";


 


</script>

<template>
  <button class="buton butons btn ">
    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle img-thumbnail ">
  </button>

  <router-link to="/create" class="buton btn btn-primary-btn-sl"> {{add}} </router-link>

  <div class="container">
    <h1 style="margin-left: 90px;" class=" text-center "> {{tittle}} </h1>
  </div>  
<div class="card1">

  <div v-for="(item, index) in $store.state.posts" :key="index" class="card">
   
 
          
                    <div  class="card-header"> <div>

                       <img src="../assets/images/96021352.jpeg" class="mr-2" style="width: 35px; height: 35px; border-radius: 50%" />
                        <span class="postuserfont"><strong><a href="#"
                                    style="color: black; text-decoration: none; font-size: 15px; margin-right:60px ;">  {{ item.name }}</a></strong></span>
                        <span class="mt-2"><strong><i class="fas fa-ellipsis-h nokta"></i></strong></span>
                    </div>
                       
                    </div>
                    <img width="300" src="https://blog.biletbayi.com/wp-content/uploads/2019/12/rize.jpg" class="card-img-top"
                         />
                    <ul class="list-group list-group-horizontal mt-1" style="list-style-type: none; border: 0;">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="far fa-heart fa-lg"
                                    style="color: black; position: relative; font-size: 23px"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="far fa-comment fa-lg" style="
                      color: black;
                      position: relative;
                      font-size: 23px;
                      margin-left: -11px;
                    "></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="far fa-paper-plane fa-lg" style="
                      color: black;
                      position: relative;
                      font-size: 23px;
                      margin-left: -11px;
                    "></i></a>
                        </li>
                        <span class="">
                            <li class="nav-item ml-4">
                                <a class="nav-link ml-2" href="#"><i class="far fa-bookmark fa-lg offsetmd-3"
                                        style="color: black; position: relative; font-size: 23px"></i></a>
                            </li>
                        </span>
                    </ul>
                    <span class="spanke">
                      
                        <img src="https://picsum.photos/300" class="mb-1 ml-3" style="width: 23px; height: 23px; border-radius: 50px" />
                        
                        <span  class="postuserfont"><strong> Html</strong> ve
                            <strong>42 di??er ki??i</strong> be??endi</span> 
                    </span>
                    <div class="card-body" style="margin-top: -15px">
                        <p  class="card-text postuserfont">
                          <div >
                            <img src="../assets/images/96021352.jpeg" class="mr-2" style="width: 25px; height: 25px; border-radius: 50%; margin-right: 10px;" />
                            <strong style="margin-left: -4px; margin-right: 5px">{{ item.name }}</strong>{{ item.surname }}
                          </div>
                          <!-- eslint-disable-next-line -->
                        </p>
                        
                       

                      <div style="text-align: center ;">
                               <p class="card-text" style="
                  margin-top: -10px;
                  margin-left: -4px;
                  font-size: 12px;
                  color: rgb(139, 133, 133);
                ">
                            10 SAAT ??NCE
                        </p>
                      </div>
                 
                    </div>
                    <div class="card-footer" style="
                color: rgb(139, 133, 133);
             background-color:white;
                font-size: 14px;
              ">
                        <span style="margin-left: -4px; ">Yorum Ekle...</span><span class=""
                            style="color: #0095f6; opacity: 50%"><strong>Payla??</strong></span>
                    </div>
                </div>
              </div>



 
 
   

 
    
  
</template>