import { Animated, Easing } from 'react-native'

class Notification extends Component {
  constructor(props) {
    super(props)

    this.state = { offset: new Animated.Value(props.offset) } // now we receive the initial offset calculated
  }                                                           // coming from the parent component

  componentDidMount() {                     
    Animated.sequence([
      Animated.delay(this.props.delay), // here we added a delay
      Animated.spring(this.state.offset, {  
        tension: -5,                        
        toValue: 0
      }),
      Animated.timing(this.state.offset, {  
        duration: 1000,                     
        toValue: -100,                      
        easing: Easing.easeInOut            
      })
    ]).start(() => this.props.removeNotification(this.props.id)) // In the start function we pass a callback that will be
  }                                                              // called when the sequence reaches its end
                                                                 // for removing the current notification that has just been shown
  // ...
}

class TopBarNotification extends Component {
  render() {
    return this.props.notifications.map((notification, index) => {
      return (
        <Notification
          key={notification.id}
          offset={-(100 * (index + 1))} // Now each notification has its own offset value
          delay={index === 0 ? 100 : (index + 1) * 2000} // and also a different delay for presenting themselves successively
          removeNotification={id => this.props.removeNotification(id)} // After finishing the animation we should remove the notification
          {...notification}
         />
      )
    })
  }
}

class App extends Component {
  state = { notifications: [] }

  removeNotification(id) {
    this.setState((state) => {
      return {
        notifications: state.notifications.filter(notification => notification.id !== id)
      }
    })
  }

  render () {
    <View>
      <TopBarNotification
        {...this.state}
        removeNotification={id => this.removeNotification(id)}
      />
      
      <Button
        onPress={() => this.setState({ notifications: newNotifications })}
        title="Receive Notifications"
      />
    </View>
  }
}  