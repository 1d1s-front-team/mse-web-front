<template>
    <v-container>
        <v-form v-model="valid">
            <v-container>
                    <v-text-field
                            v-model="id"
                            :rules="idRules"
                            :counter="8"
                            label="ID"
                            required
                    ></v-text-field>
                    <v-text-field
                                v-model="username"
                                :rules="nameRules"
                                label="Username"
                                required
                    ></v-text-field>
                    <v-text-field
                                v-model="password"
                                :rules="passwordRules"
                                :type="'password'"
                                label="Password"
                                required
                    ></v-text-field>
                    <v-text-field
                                v-model="passwordConfirm"
                                :rules=rules
                                :type="'password'"
                                label="Confirm Password"
                                required
                    ></v-text-field>
                <v-btn @click="submit">Submit</v-btn>
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "signin",
        data: () => ({
            valid: true,
            show: false,
            id: '',
            username: '',
            idRules: [
                v => !!v || 'ID is required',
                v => v.length === 8 || 'ID must be 8 integers'
            ],
            nameRules: [
                v => !!v || 'Username is required',
                v => v.length < 30 || 'Username must be less than 30 characters'
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length > 7 || 'Password must be at least 8 characters'
                // v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordConfirm: '',
        }),
        computed: {
            rules () {
                const rules = []
                // const min = 30
                //
                // if (min) {
                //     const rule = v => v.length > 7 || 'Password must be at least 8 characters'
                //     rules.push(rule)
                // }
                if (this.password) {
                    const rule = v => (!!v && v) === this.password || 'Values do not match'
                    rules.push(rule)
                }
                return rules
            }
        },
        methods: {
            async submit () {
                this.$axios.$post(`/api/auth/register`, {
                    id: this.id,
                    username: this.username,
                    password: this.password
                }).then((res) => {
                    this.$router.push({ name: 'signin-success', param: { res } });
                }).catch((err) => {
                    console.log(err)
                })
                console.log("POST request submitted")
            },
        }
    }
</script>

<style scoped>

</style>