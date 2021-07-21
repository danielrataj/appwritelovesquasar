import { boot } from 'quasar/wrappers'
import { Appwrite } from 'appwrite'
const appwrite = new Appwrite()

appwrite
    .setEndpoint(process.env._APP_API_URL)
    .setProject(process.env._APP_PROJECT_ID)

export default boot(({ app }) => {
  app.config.globalProperties.$appwrite = appwrite
})

export {
  appwrite
}
