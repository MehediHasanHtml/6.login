<script setup>

</script>


<template>
    <section class="login-area">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="login">
                        <h1>Login</h1>
                        <form>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="firstname" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Password</label>
                            </div>

                            <button type="submit" class="btn btn-outline-success">Login</button>

                            <p>You don't have an account? <router-link to="/register"> Register</router-link>  </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>

</style>