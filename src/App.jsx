import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Header from './components/Header/Header'
import './App.css'

function App() {
 

  return (
   <div>
     <Header/>
      <main className="main_container">
      <ContactHeader/>
      <ContactForm/>
      </main>
   </div>
  )
}

export default App
