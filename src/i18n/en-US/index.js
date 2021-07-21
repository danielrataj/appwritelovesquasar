// This is just an example,
// so you can safely delete all default props below

export default {
  main: {
    title: 'Appwrite ❤ Quasar'
  },
  login: {
    success: 'Successfully loged in.',
    error: {
      failed: 'It is not possible to login with credentials your provided.'
    }
  },
  registration: {
    success: 'Your account has been created.',
    error: {
      failed: 'It is not possible to register a new user account.'
    }
  },
  fileupload: {
    success: 'File has been successfully uploaded.',
    error: {
      missing: 'Please select the file to upload.',
      failed: 'It is not possible to upload a file.'
    }
  },
  filelist: {
    heading: 'Files',
    success: 'File has been successfully removed.',
    error: {
      nofiles: 'Currently there are no files to list.',
      failed: 'It is not possible to upload a file.'
    }
  },
  admin: {
    login: {
      form: {
        email: 'E-mail',
        password: 'Password',
        submit: 'Login'
      },
      error: {
        required: {
          email: 'Please enter your e-mail address.',
          password: 'Please enter your password.'
        },
        failed: 'Please check your credentials.'
      }
    }
  }
}
