import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ImageModalProps {
  isVisible: boolean;
  photoUri: string | null;
  onClose: () => void;
}

export const ImageModal = ({ isVisible, photoUri, onClose }: ImageModalProps) => {
  if (!photoUri) return null;

  const images = [{ url: photoUri }];

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      swipeDirection={['right', 'left']}
      onSwipeComplete={onClose}
    >
      <ImageViewer
        imageUrls={images}
        enableSwipeDown
        onSwipeDown={onClose}
        onCancel={onClose}
        renderIndicator={() => <></>} // Oculta el contador 1/1
        backgroundColor="black"
        saveToLocalByLongPress={false}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
});
