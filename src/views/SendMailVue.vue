<template>
    <div>
        <form @submit.prevent="sendMail()">
            <h2>
                Send mail
            </h2>
            <input type="text" name="name" id="name" v-model="user_name">
            <input type="mail" name="mail" id="mail" v-model="user_mail">
            <textarea name="content" id="content" cols="30" rows="10" v-model="mail_content"></textarea>
            <button type="submit"> INVIA </button>

        </form>
    </div>
</template>

<script setup>
import { useGeneralStore } from '@/stores/generalStore';
import axios from 'axios';
import { ref, onMounted } from 'vue';


let store = useGeneralStore();
let user_name = ref('')
let user_mail = ref('')
let mail_content = ref('')

const sendMail = function () {
    console.log('function')
    const data = {
        name: user_name.value,
        address: user_mail.value,
        content: mail_content.value
    }
    axios.post('http://127.0.0.1:8000/api/contacts', data).then((res) => {
        console.log(res.data)
        if (res.data.success) {
            console.log('mail sent')
            user_name.value = ''
            user_mail.value = ''
            mail_content.value = ''
        }
    }).catch((err) => {
        console.log(err)
        window.alert('error sending your email')
    })
}
</script>

<style scoped>
form {
    border: 1px solid black;
    width: 30%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 1.2em;
}

input,
textarea {
    border: 1px solid black;
}
</style>