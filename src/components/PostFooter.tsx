// src/components/PostBottom.tsx
import { Post } from '@/src/types/Post';
import { Feather, FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostBottomProps {
  post: Post;
  liked: boolean;
  saved: boolean;
  likesCount: number;
  toggleLike: () => void;
  toggleSave: () => void;
}

export const PostBottom = ({
  post,
  liked,
  saved,
  likesCount,
  toggleLike,
  toggleSave,
}: PostBottomProps) => {

  const formatCount = (num: number): string => {
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(num % 1_000_000 < 100_000 ? 2 : 0)} M`;
    } else if (num >= 1_000) {
      return `${(num / 1_000).toFixed(num % 1_000 < 100 ? 2 : 0)} k`;
    } else {
      return `${num}`;
    }
  };

  return (
    <View>
      {/* Pre-footer */}
      <View style={styles.preFooter}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={toggleLike} style={styles.iconButton}>
            <FontAwesome
              name={liked ? 'heart' : 'heart-o'}
              size={24}
              color={liked ? 'red' : 'white'}
            />
            <Text style={styles.iconText}>{formatCount(likesCount)}</Text>
          </TouchableOpacity>

          <View style={styles.iconButton}>
            <FontAwesome name="comment-o" size={24} color="white" />
            <Text style={styles.iconText}>{formatCount(post.comments)}</Text>
          </View>

          <TouchableOpacity onPress={() => console.log('Share')} style={styles.iconButton}>
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={toggleSave} style={styles.iconButton}>
          {saved ? (
            <FontAwesome name="bookmark" size={24} color="white" />
          ) : (
            <FontAwesome name="bookmark-o" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>
          <Text style={styles.name}>{post.name} </Text>
          <Text style={styles.descriptionText}>{post.description} </Text>
        </Text>
        <Text style={styles.date}>{moment(post.createdAt).fromNow()}</Text>
      </View>

      {/* Add Comment */}
      <View style={styles.commentInputContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // Cambiar por avatar real si tienes Auth
          style={styles.avatarComment}
        />
        <Text style={styles.placeholderText}>Agrega un comentario...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  preFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    marginLeft: 4,
    fontSize: 13,
    color: '#FFF',
  },
  footer: {
    paddingHorizontal: 12,
    paddingBottom: 6,
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#FFF',
  },
  date: {
    color: '#CCC',
    fontSize: 12,
    marginTop: 4,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 10,
    marginTop: 4,
  },
  avatarComment: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  placeholderText: {
    color: '#AAA',
    marginLeft: 8,
  },
  text: {
    color: '#FFF',
  },
});
