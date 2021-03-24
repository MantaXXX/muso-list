// for real-time
import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDocument = (collection, id) => {

  const document = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let documentRef = projectFirestore.collection(collection).doc(id)

  // set up real-time listener with .onSnapshot() method
  const unsub = documentRef.onSnapshot(doc => {
    let results = []
    if (doc.data()) {
      document.value = { ...doc.data(), id: doc.id }
      error.value = null
    } else {
      error.value = 'That document does not exist'
    }
  }, err => {
    console.log(err.message)
    error.value = 'could not fetch the document'
  })

  // take the onInvalidate function in watchEffect and when the components is unmounted from the DOM, fire unsub() to stop listener
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, document }
}

export default getDocument