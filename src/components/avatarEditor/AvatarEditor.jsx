import avatar from '../../img/avatar.png'
import edit from '../../img/edit.png'

import './avatarEditor.scss'

const AvatarEditor = () => {
  return (
    <div className="avatar__wrapper">
      <img className='avatar-big' src={avatar} alt="avatar" />
      <img className='avatar__icon-edit' src={edit} alt="edit" />
    </div>
  );
}
 
export default AvatarEditor;