import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import allGames from './data';
import { sales } from './data';
import Layout from './components/Layout/Layout';
import AuthRequired from './components/hoc/AuthRequired';
import { lazy } from 'react';
import useAuth from './components/hook/useAuth';
import OrderHistoryPage from './components/page/OrderHistoryPage/OrderHistoryPage';
import Cabinet from './components/page/Cabinet/Cabinet';
import Offers from './components/page/Offers/Offers';


const Home = lazy(() => import('./components/page/Home/Home'));
const Games = lazy(() => import('./components/page/Games/Games'));
const Sales = lazy(() => import('./components/page/Sales/Sales'));
const Contacts = lazy(() => import('./components/page/Contacts/Contacts'));
const GameInfoPage = lazy(() => import('./components/page/GameInfoPage/GameInfoPage'));
const Favorite = lazy(() => import('./components/page/Favorite/Favorite'));
const Register = lazy(() => import('./components/page/Register/Register'));
const Login = lazy(() => import('./components/page/Login/Login'));
const Order = lazy(() => import('./components/page/Order/Order'));

function App() {

  const localUsers = JSON.parse(localStorage.getItem('GGusers'));
  const localHistory = JSON.parse(localStorage.getItem('orderHistory'));
  const localFavorite = JSON.parse(localStorage.getItem('GGfavorite'));
  const { login } = useAuth();

  const [favoriteItems, setFavoriteItems] = useState(localFavorite || []);
  const [cartItems, setCartItems] = useState([]);
  const [allSales, setAllSales] = useState(sales)
  const [games, setGames] = useState(allGames);
  const [filter, setFilter] = useState('');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isHomeModalOpen, setIsHomeModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [isLoged, setIsLoged] = useState(false);
  const [users, setUsers] = useState(localUsers || []);
  const [usersHistory, setUsersHistory] = useState(localHistory || [])
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [currenUser, setCurrentUser] = useState(null);
  const [existedUser, serExistedUser] = useState(false);
  const [imageValue, setImageValue] = useState('');
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [isNotificationFavShown, setIsNotificationFavShown] = useState(false);


  const showNotification = () => {
  setIsNotificationShown(true)
  }
  useEffect(() => {
    setTimeout(() => {
       setIsNotificationShown(false)
    }, 2000)
   
  }, [isNotificationShown])
  
  const showFavNotification = () => {
    if (currenUser) {
      setIsNotificationFavShown(true)
    }
  }

    useEffect(() => {
      if(isWarningModalOpen)
      setIsNotificationFavShown(false)
    },[isWarningModalOpen])
  useEffect(() => {
    setTimeout(() => {
       setIsNotificationFavShown(false)
    }, 2000)
   
  },[isNotificationFavShown])

  const changeUserData = (data) => {
    const user = users.find(userToFind => userToFind.log === currenUser)

    const newUserData = {};
    if (user.name === data.name || data.name === "") {
      console.log('name')
      newUserData.name = user.name
    } else if (user.name !== data.name){
      newUserData.name = data.name
    }
     if (user.email === data.email || data.email === "") {
      newUserData.email = user.email
    } else {
      newUserData.email = data.email
     }
     if (user.log === data.log || data.log === "") {
      newUserData.log = user.log
    } else {
      newUserData.log = data.log
     }
     if (user.password === data.password || data.password === "") {
      newUserData.password = user.password
    } else {
      newUserData.password = data.password
     }
    if (user.image=== data.image.result || data.image === "") {
      newUserData.image = user.image
    } else {
      newUserData.image = data.image.result
     }
  
    const filteredUsers = users.filter(user => user.log !== currenUser);
    filteredUsers.push(newUserData)

    setUsers(filteredUsers)
    setCurrentUser(newUserData.log)
    login(newUserData.log, () => { console.log("usere changed") })
//     const filteredFavorite = favoriteItems.find(favor => favor.user === user.log);
// console.log(filteredFavorite)
//     if (filteredFavorite.user) {
//       filteredFavorite.user = newUserData.log;
//       console.log("ooo")
//     }
  //  console.log(newUserData)
  //   console.log(filteredFavorite)
    filteredUsers.push(newUserData)
    favoriteItems.forEach(item => { if (item.user === user.log) { item.user = newUserData.log } }
    )
    usersHistory.forEach(item => { if (item.user === user.log) { item.user = newUserData.log } }
    )

}

 const handleSetUserImageValue = (img) => {
    return setImageValue(img)
  }

  const onAddToUserHistory = (orderHistory) => {
    setUsersHistory(prevHistory => {
  return [...prevHistory, orderHistory]
    })
  }

  useEffect(() => {
        localStorage.setItem('orderHistory', JSON.stringify(usersHistory))
  },[usersHistory])

  const handleCurrentUser = (user) => {
    setCurrentUser(user);
  }

 const  handleLogOutCurrentUser = () => {
        setCurrentUser(null);
  }


  const onOrderBtnClick = () => {
    setCartItems([])
  }

  const handleOrderModalClose = () => {
    setIsOrderModalOpen(false)
    // if (cartItems.length) {
    //   setCartItems([])
    // }
 } 


  const handleCloseWarningModal = () => {
    setIsWarningModalOpen(false)
  }

  const handleCloseHomeModal = () => {
    setIsHomeModalOpen(false)
  }


  const handleEscCloseCart = (evt) => {
    if (evt.code === "Escape") {
      setIsCartVisible(false)
      document.removeEventListener('keydown', handleEscCloseCart)
  }
  }
  
  const handleCloseCart = () => {
    setIsCartVisible(false)
    document.removeEventListener('keydown', handleEscCloseCart)
  }

  const cartVisibility = () => {
    setIsCartVisible(!isCartVisible);
    if (!isCartVisible) {
      document.addEventListener('keydown', handleEscCloseCart)
    } 
  }

  const showWarningModal = () => {

     setIsWarningModalOpen(true)
  }

  const closeWarningModal = () => {
     setIsWarningModalOpen(false)
  }

  const handleRegFormSubmit = (evt,setCanNavigate, setErrName, setErrEmail, setErrLogin, setErrPass) => {
        
        evt.preventDefault();
        const form = evt.currentTarget;
        let name = form.elements.name.value;
        const email = form.elements.email.value;
        const log = form.elements.login.value;
    const password = form.elements.password.value;

        // const arr = Array.from(form.elements).filter(element => element.value === "")
       
        if (Array.from(form.elements).filter(element => element.value === "").length > 3) {
          Array.from(form.elements).filter(element => element.value === "").forEach(element => {
            if (element.name === "name") {
            setErrName(true)
            } 
               if (element.name === "email") {
            setErrEmail(true)
               }
               if (element.name === "login") {
            setErrLogin(true)
               }
               if (element.name === "password") {
            setErrPass(true)
          }
          })
  return
        }

        const userExists = users.find(user => user.log === log)
    if (userExists) {       
      showWarningModal()
      serExistedUser(true)

          return
    } else {
 
      closeWarningModal()
      setCanNavigate(true)
    }

        setUsers(prevUsers => {
          return [...prevUsers, {name,email,log,password,image: imageValue.result}]
        })
   
            //  setExistedUser(false)
        login(log,()=>{console.log(log)})
        handleCurrentUser(log)
 
      }
  
  useEffect(() => {
    localStorage.setItem('GGusers', JSON.stringify(users))
  },[users])

  const { user } = useAuth();

  const onAddToFavorite = (game) => {
    if (!user) {
      setIsLoged(true)
      return
    }
    if (favoriteItems.filter(item => item.user === currenUser).some(item => item.id === game.id)) {
      setIsWarningModalOpen(true)
  
      return 
    }
    setFavoriteItems(prevState => [...prevState, game])
  }

  useEffect(() => {
    localStorage.setItem('GGfavorite',JSON.stringify(favoriteItems))
  },[favoriteItems])

  const onRemoveFromFavorite = (game) => {
    const filteredItems = favoriteItems.filter(item => item.user === currenUser).filter(item => item.id !== game.id)
    setFavoriteItems(prevState => {
      return [...prevState.filter(item => item.user !== currenUser), ...filteredItems]
    })
  }

  // useEffect(() => {
  //       console.log(favoriteItems)
  // }, [favoriteItems])

  const onEscCloseWarningModal = (evt) => {
    if (evt.code === "Escape") {
    onCloseWarningModal()
  }
}

  const onCloseWarningModal = () => {
    if (isLoged === true) {
      setIsLoged(false)
    }
    setIsWarningModalOpen(false)
    setIsOrderModalOpen(false)
    setIsHomeModalOpen(false)
  }

  const onBackdropCloseWarnModal = (evt) => {
    if (evt.target === evt.currentTarget) {
      onCloseWarningModal()
    }
  }

  const handleClearCart = () => {
    setCartItems([]);
  }

  const handleFilterGames = (query) => {
    setFilter(query)
  }

  const filteredItems = (query, array) => {
    if (query === "") return array
    const serializedFilter = query.toLowerCase();
    const res = array.filter(({ title }) => title.toLowerCase().includes(serializedFilter))
    
    return res;
  }

  useEffect(() => {
const filtered = filteredItems(filter,allGames);
    setGames(filtered)
  }, [filter])
  
    useEffect(() => {
const filtered = filteredItems(filter,sales);
    setAllSales(filtered)
  },[filter])

  const onAddtoCart = (game) => {
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(item => item.id === game.id)
      if (!isItemInCart) {
        return [...prevItems, {...game, quantity: 1, totalPrice: game.newPrice ? parseFloat(game.newPrice) : parseFloat(game.price)}]
      } else {
        return prevItems.map(item => item.id === game.id
          ? { ...item, quantity: item.quantity + 1, totalPrice: item.newPrice ? (item.quantity+1) * parseFloat(item.newPrice) : (item.quantity+1) * parseFloat(item.price)}
          : item)
      }  
    })
  }

  const onDecrBtnClick = (id) => {
    setCartItems(prevItems => prevItems.reduce((acc, item) => {
      
      if (item.id === id) {
        
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1,totalPrice: item.newPrice ? (item.quantity-1) * parseFloat(item.newPrice) : (item.quantity-1) * parseFloat(item.price)})
        }
      }
        else {
         acc.push(item)
        }
        return acc
      
    },[]))
  }

  const onIncrBtnClick = (id) => {
    setCartItems(prevItems => prevItems.reduce((acc, item) => {
      
      if (item.id === id) {
     
        if (item.quantity >= 1) {
     
          acc.push({ ...item, quantity: item.quantity + 1,totalPrice: item.newPrice ? (item.quantity+1) * parseFloat(item.newPrice) : (item.quantity+1) * parseFloat(item.price) })
        }
      }
        else {
         acc.push(item)
        }
        return acc
      
    },[]))
  }

  const onRemoveFromCart = (game) => {
    // setCartItems(prevItems => prevItems.reduce((acc, item) => { 
    //   if (item.id === game.id) {
    //     if (item.quantity > 1) {
    //       acc.push({ ...item, quantity: item.quantity - 1 })
    //     }
    //   }
    //     else {
    //      acc.push(item)
    //     }
    //     return acc
      
    // },[]))

    setCartItems(prevItems => prevItems.filter(item => item.id !== game.id))
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout
            isLoged={isLoged}
            isNotificationFavShown={isNotificationFavShown}
            isNotificationShown={isNotificationShown}
            currentUser={currenUser}
            handleLogOutCurrentUser={handleLogOutCurrentUser}
            handleOrderModalClose={handleOrderModalClose}
            handleCloseWarningModal={handleCloseWarningModal}
             handleCloseHomeModal={handleCloseHomeModal}
             handleCloseCart={handleCloseCart}
            isCartVisible={isCartVisible}
            cartVisibility={cartVisibility}
            onDecrBtnClick={onDecrBtnClick}
            onIncrBtnClick={onIncrBtnClick}
            handleClearCart={handleClearCart}
            cartItems={cartItems}
            onRemoveFromCart={onRemoveFromCart} />}>
            <Route index element={<Home
              currenUser={currenUser}
              cartVisibility={cartVisibility}
              onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal}
              isHomeModalOpen={   isHomeModalOpen}
              setIsHomeModalOpen={setIsHomeModalOpen}
              isWarningModalOpen={setIsWarningModalOpen}
              setIsWarningModalOpen={setIsWarningModalOpen}
            />} />
            <Route path='/:id' element={<GameInfoPage
                
              showNotification ={showNotification }
              isLoged={isLoged}
              onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal}
              isWarningModalOpen={isWarningModalOpen}
              onAddToCart={onAddtoCart}
              onAddToFavorite={onAddToFavorite}
            />} />
            <Route path="games" element={<Games
              showFavNotification={showFavNotification}
              currenUser={currenUser}
              showNotification={showNotification}
              isLoged={isLoged}
              onRemoveFromFavorite={onRemoveFromFavorite}
              onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal}
              isWarningModalOpen={isWarningModalOpen}
              handleFilterGames={handleFilterGames}
              games={games} onAddToCart={onAddtoCart}
              onAddToFavorite={onAddToFavorite} />} />
            <Route path='games/:id' element={<GameInfoPage
             showFavNotification={showFavNotification}
                showNotification ={showNotification }
                 currenUser={currenUser}
              isLoged={isLoged} onBackdropCloseWarnModal={onBackdropCloseWarnModal} onEscCloseWarningModal={onEscCloseWarningModal} onCloseWarningModal={onCloseWarningModal} isWarningModalOpen={isWarningModalOpen} onAddToCart={onAddtoCart} onAddToFavorite={onAddToFavorite} />} />
            <Route path='sales'
              element={<Sales
                showFavNotification={showFavNotification}
                showNotification ={showNotification }
              currenUser={currenUser}
              isLoged={isLoged}
              onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal}
              isWarningModalOpen={isWarningModalOpen}
              handleFilterGames={handleFilterGames}
              games={allSales}
              onAddToCart={onAddtoCart}
              onAddToFavorite={onAddToFavorite} />} />
            <Route path='sales/:id' element={<GameInfoPage
              showFavNotification={showFavNotification}
              showNotification={showNotification}
              currenUser={currenUser}
              isLoged={isLoged}
              onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal}
              isWarningModalOpen={isWarningModalOpen}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddtoCart} />} />
            <Route path='favorite' element={<AuthRequired>
              <Favorite showFavNotification={showFavNotification} showNotification={showNotification} currenUser={currenUser} onRemoveFromFavorite={onRemoveFromFavorite} favoriteItems={favoriteItems} onAddToCart={onAddtoCart} />
            </AuthRequired>} />
            <Route path='favorite/:id' element={<GameInfoPage
             showFavNotification={showFavNotification}
              showNotification={showNotification}
              currenUser={currenUser}
              isLoged={isLoged}
              onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal}
              isWarningModalOpen={isWarningModalOpen}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddtoCart} />} />
            <Route path='register' element={<Register
              handleSetUserImageValue={handleSetUserImageValue}
              currenUser={currenUser}
              isWarningModalOpen={isWarningModalOpen}
              onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal}
              existedUser={existedUser}
              handleCurrentUser={handleCurrentUser}
              handleRegFormSubmit={handleRegFormSubmit} />} />
            <Route path='login' element={<Login
              handleCurrentUser={handleCurrentUser}
              setIsLoged={setIsLoged} onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal} isLoged={isLoged} users={users} />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='order' element={
              <AuthRequired>
                <Order
              usersHistory={usersHistory}    
              onAddToUserHistory={onAddToUserHistory}
              currenUser={currenUser}
              users={users}
              onOrderBtnClick={onOrderBtnClick }
              handleOrderModalClose ={handleOrderModalClose }
              handleClearCart={handleClearCart}
              setIsOrderModalOpen={setIsOrderModalOpen}
              onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal}
                isOrderModalOpen={isOrderModalOpen} onRemoveFromCart={onRemoveFromCart} cartItems={cartItems} onIncrBtnClick={onIncrBtnClick} onDecrBtnClick={onDecrBtnClick} />
            </AuthRequired>
            } >
              <Route path='history' element={<OrderHistoryPage onAddToCart={onAddtoCart} showNotification ={showNotification } onAddtoCart={onAddtoCart} usersHistory={usersHistory} currentUser={currenUser} />} />
            </Route>
            <Route path='cabinet' element={
              <AuthRequired>
                <Cabinet
                  changeUserData ={changeUserData }
                  users={users}
                  currenUser={currenUser}
                />
              </AuthRequired>}>
                <Route path='history' element={<OrderHistoryPage onAddToCart={onAddtoCart}  showNotification ={showNotification } onAddtoCart={onAddtoCart} usersHistory={usersHistory} currentUser={currenUser} />} />
            </Route>
                  <Route path='offers' element={ 
            <AuthRequired>
              <Offers/>
            </AuthRequired>
          } />
          </Route>
          </Routes>
      
      </div>
      </Router>
  );
}

export default App;


