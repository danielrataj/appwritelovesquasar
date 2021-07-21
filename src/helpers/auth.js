import { ref, computed } from 'vue'
import { appwrite } from 'src/boot/appwrite'

const email = ref('')
const password = ref('')
const account = ref(undefined)
const isLogged = computed(() => {
  return typeof account.value !== 'undefined' && Object.keys(account.value).length > 0
})

const getAccount = async function () {
  account.value = await appwrite.account.get()
}

const login = async function () {
  try {
    account.value = await appwrite.account.createSession(email.value, password.value)
  } catch (err) {
    console.error(err)
    account.value = undefined

    throw err
  }
}

const logout = async function () {
  await appwrite.account.deleteSession('current')
  account.value = undefined
}

const register = async function () {
  await appwrite.account.create(email.value, password.value, email.value)
  await login()
}

export { getAccount, logout, login, register, isLogged, account, email, password }
