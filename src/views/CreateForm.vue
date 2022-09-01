<script>
  export default {
    data: () => ({
      name: '',
      surname: ''
    }),

     methods:{
      sendData() {

        console.log({ name: this.name, surname: this.surname});
        this.$store.dispatch('addPost', { id: crypto.randomUUID(), name: this.name, surname: this.surname})
      }
      
    },
    
  }
</script>

<template>
 <div class="form-check ">
    <div class="row  mt-5">
      <div class="col-4 offset-4">
        <div class="borderz">
            <div class="imagee">
              <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle img-thumbnail ">
            </div>
                            
            <h3 class="text-center">FORM</h3>

            <input v-model="name"  type="text" class="form-control" placeholder="Başlık giriniz..."   />

            <br />

            <input
              v-model="surname"
              type="text"
              class="form-control"
              placeholder="Açıklama Giriniz..."
          
            />
          
            <br />

            <br />

            <button @click="sendData()" class="btn btn-primary btn-sl"> OLUŞTUR</button>
          </div>
      </div>
    </div>
</div>
  
</template>