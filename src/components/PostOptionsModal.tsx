// src/components/PostOptionsModal.tsx
import { AntDesign, Feather, FontAwesome, FontAwesome5, MaterialIcons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export const PostOptionsModal = ({ isVisible, onClose }: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
    >
      <View style={styles.container}>
        {/* TOP OPTIONS */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.topButton} onPress={() => onClose()}>
            <Feather name="bookmark" size={24} color="black" />
            <Text style={styles.topText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton} onPress={() => onClose()}>
            <AntDesign name="retweet" size={24} color="black" />
            <Text style={styles.topText}>Remix</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton} onPress={() => onClose()}>
            <Octicons name="video" size={24} color="black" />
            <Text style={styles.topText}>Secuencia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
            {/* LINE OPTIONS */}
            <TouchableOpacity style={styles.option} onPress={() => onClose()}>
                <Feather name="star" size={24} color="black" />
                <Text style={styles.optionText}>Agregar a favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => onClose()}>
                <FontAwesome5 name="user-minus" size={24} color="black" />
                <Text style={styles.optionText}>Dejar de seguir</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => onClose()}>
                <FontAwesome name="user-circle-o" size={24} color="black" />
                <Text style={styles.optionText}>Acerca de esta cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => onClose()}>
                <MaterialIcons name="qr-code-scanner" size={24} color="black" />
                <Text style={styles.optionText}>Código QR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => onClose()}>
                <Feather name="info" size={24} color="black" />
                <Text style={styles.optionText}>¿Por qué ves esta publicación?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => onClose()}>
                <Feather name="eye-off" size={24} color="black" />
                <Text style={styles.optionText}>Ocultar</Text>
            </TouchableOpacity>

            {/* REPORT */}
            <TouchableOpacity style={styles.report} onPress={() => onClose()}>
            <FontAwesome name="warning" size={24} color="red" />
            <Text style={styles.reportText}>Reportar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  topButton: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#f2f2f7',
    borderRadius: 8,
    marginHorizontal: 16
  },
  topText: {
    fontWeight: '600',
    fontSize: 14,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: '#f2f2f7',
    borderRadius: 8,
    marginHorizontal: 16
  },
  option: {
    flexDirection: 'row',
    padding: 14,
    borderTopWidth: 0.3,
    borderColor: '#ccc',
  },
  optionText: {
    paddingStart: 8,
    paddingTop: 2,
    fontSize: 15,
  },
  report: {
    flexDirection: 'row',
    padding: 14,
    borderTopWidth: 0.3,
    borderColor: '#ccc',
  },
  reportText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 15,
    paddingStart: 8,
    paddingTop: 2,
  },
});
