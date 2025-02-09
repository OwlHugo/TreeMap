import styled from 'styled-components/native';

export const GoodMorningUser = styled.Text`
  color: #51007c;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  position: relative;
  top: 10px;
  margin-left: 20px;
  font-family: 'Roboto';
  align-self: flex-start;
  justify-content: flex-start;
`;

export const PostContainer = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 12px;
`;

export const UserInfo = styled.View``;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const UserUsername = styled.Text`
  font-size: 14px;
  color: #777;
`;

export const PostContent = styled.Text`
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
`;

export const PostFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ActionIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const ActionText = styled.Text`
  font-size: 14px;
  color: #777;
`;

export const Timestamp = styled.Text`
  font-size: 12px;
  color: #999;
`;