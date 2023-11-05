import {useState, useEffect, useRef} from 'react'
import * as Device from "expo-device"
import * as Notifications from "expo-notifications"
import { Constants } from 'expo-constants'
import { Platform } from 'react-native'

export interface PushNotificationState{
    expoPushToken ?: Notifications.ExpoPushToken
    notification ?: Notifications.Notification
}

export const usePushNotifications = (): PushNotificationState =>{ 
    Notifications.setNotificationHandler({
        handleNotification : async () => ({
        shouldPlaySound: false,
        shouldShowAlert: true,
        shouldSetBadge: false,
    }),
})

const [expoPushToken, setExpoPushToken] = useState<
Notifications.ExpoPushToken | undefined
>()

const [notification, SetNotification]  = useState<
    Notifications.Notification | undefined
>()

const notificationListener = useRef<Notifications.Subscription>()
const responseListener = useRef<Notifications.Subscription>()

async function registerForPushNotificationAsync() {
    let token;
    if(Device.isDevice){
        const {status: existingStatus} = await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus

        if(existingStatus !== "granted"){
            const {status} = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }

        if(finalStatus !== "granted"){
            alert("failed to get push token for push notification")
            return
        }

        token = await Notifications.getExpoPushTokenAsync({
            projectId: Constants.expoConfig?.extra?.eas.projectId,
        })
    }   
    else{
        alert("Must be using a Physical device")
    }

    if(Platform.OS === "android"){
        Notifications.setNotificationChannelAsync("default",{
            name:"default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0,250, 250, 250],
            lightColor: "#FF231F7C",
        })
    }
    return token
  }

  useEffect(() =>{
    registerForPushNotificationAsync().then((token) =>{
        setExpoPushToken(token)
    })

    notificationListener.current =  Notifications.addNotificationReceivedListener((notification) => {
        SetNotification(notification)
    })

    responseListener.current = 
    Notifications.addNotificationReceivedListener((response) =>{
        console.log(response)
    })

    return() => {

        Notifications.removeNotificationSubscription(notificationListener.current!)
    
        Notifications.removeNotificationSubscription(responseListener.current!)
    }

  }, [])

return{
    expoPushToken,
    notification
}

}