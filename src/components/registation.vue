<script setup>

import { reactive } from 'vue';

const data = reactive({
    firstName: '',
    lastName: '',
    email: '',
    pass: ''
});




</script>


<template>
    <section class="login-area">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="login">
                        <h1>Registration </h1>
                        <form>
                            <div class="form-floating mb-3" >
                                <input type="text" class="form-control" id="firstname" placeholder="First Name" v-model="data.firstName">
                                <label for="firstname">First Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="lastname" placeholder="Last Name" v-model="data.lastName">
                                <label for="lastname">Last Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="firstname" placeholder="name@example.com" v-model="data.email">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="data.pass">
                                <label for="floatingPassword">Password</label>
                            </div>

                            <button @click="addUser()" type="submit" class="btn btn-outline-success">Register</button>
                            <p> Already you have an account? <router-link to="/"> Login</router-link>  </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>

</style>