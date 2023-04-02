<template>
    <main class="form-signin w-100 m-auto">
    <form>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
            <input class="form-control" placeholder="First name">
            <label>First name</label>
        </div>
        <div class="form-floating">
            <input class="form-control" placeholder="Last name">
            <label>Last name</label>
        </div>
        <div class="form-floating">
            <input type="email" class="form-control" placeholder="name@example.com">
            <label>Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" placeholder="Password">
            <label>Password</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" placeholder="Password Confirmation">
            <label>Password Confirmation</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    </form>
    </main>
</template>

<script>
export default {
    name: "RegisterView"
}
</script>

<style>
</style>