// 1) Buat project di Firebase Console -> tambahkan web app -> ambil config di bawah ini
// 2) Aktifkan Authentication -> Sign-in method -> Email/Password dan Google (jika perlu)
// 3) Isi firebaseConfig dibawah dengan nilai project Anda

// Contoh kompat (compat) SDK yang di-include di login.html
if (window.firebase === undefined){
  console.warn('Firebase SDK tidak terdeteksi — pastikan include script firebase-app-compat.js dan firebase-auth-compat.js')
}

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... sisanya
}

if (window.firebase && !firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

function signInWithEmail(email, password){
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

function signInWithGoogle(){
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider)
    .then(result=>{
      console.log('Signed in:', result.user)
      window.location.href = 'index.html'
    })
    .catch(err=>{
      console.error(err)
      alert('Gagal masuk: ' + err.message)
    })
}

function signOut(){
  firebase.auth().signOut()
}

// optionally listen to auth state
if (window.firebase){
  firebase.auth().onAuthStateChanged(user=>{
    if (user) console.log('User aktif:', user.email)
  })
}
