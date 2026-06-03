import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { View, Button, Image } from 'react-native';

const CameraScreen = () => {
   const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState('');
const cameraRef = useRef<any>(null);

 const photoLo = async () => {
  if (cameraRef.current) {
    const pic = await cameraRef.current.takePictureAsync();

    if (pic?.uri) {
      setPhoto(pic.uri);
    }
  }
};

  if (!permission?.granted) {
    return <Button title="Camera Permission Do" onPress={requestPermission} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} ref={cameraRef} />
      <Button title="📸 Photo Lo" onPress={photoLo} />
      {photo && <Image source={{ uri: photo }} style={{ width: 100, height: 100 }} />}
    </View>
    )
}

export default CameraScreen