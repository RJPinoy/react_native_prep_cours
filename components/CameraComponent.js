import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button, Image, Alert } from "react-native";
import BtnCameraComponent from "./BtnCameraComponent";

const CameraComponent = () => {
    const [type, setType] = React.useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [image, setImage] = React.useState(null);
    const [flash, setFlash] = React.useState(Camera.Constants.FlashMode.off);
    const cameraRef = React.useRef(null);

    React.useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            requestPermission(cameraStatus === "granted");
        })();
    }, [])

    async function takePicture() {
        if (cameraRef) {
            try {
                console.log(cameraRef);
                const data = await cameraRef.current.takePictureAsync();
                setImage(data.uri);
                console.log(image);
            } catch (e) {
                console.log(e)
            }
        }
    }

    function toggleCameraType() {
        setType(current => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
        console.log(type);
    }

    function toggleFlash() {
        setFlash(current => (
            current === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off
        ));
        console.log(flash);
    }

    async function savePicture() {
        if (image) {
            try {
                await MediaLibrary.createAssetAsync(image);
                Alert.alert('Picture saved!');
                setImage(null);
            } catch (e) {
                console.log(e);
            }
        }
    }

    if (requestPermission === false) {
        return (
            <Text>No access granted to cam.</Text>
        )
    }

    return (
        <View style={styles.container}>
            {!image ?
                <>
                    <Camera type={type} ref={cameraRef}>
                        <View>
                            <TouchableOpacity onPress={toggleCameraType}>
                                <Text>Flip camera</Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                    
                    <View>
                        <BtnCameraComponent title="Flash on" icon={"flash"} onPress={toggleFlash} color={"#000"} />
                        <BtnCameraComponent title="Take a picture" icon={"camera"} onPress={takePicture} color={"#000"} />
                        <BtnCameraComponent title="Change camera" icon={"cycle"} onPress={toggleCameraType} color={"#000"} />
                    </View>
                </>
                :
                <>
                    <Image source={{ uri: image }} />
                    <View>
                        <Button title="Take a picture" icon={"retweet"} onPress={() => setImage(null)} color={"#000"} />
                        <Button title="Save the picture" icon={"check"} onPress={savePicture} color={"#000"} />
                    </View>
                </>
            }
        </View>
    );
}
 
export default CameraComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});