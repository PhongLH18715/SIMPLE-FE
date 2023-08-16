import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import styles from './register.module.css'
var classNames = require('classnames/bind');
var cx = classNames.bind(styles);


const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    beforeUpload(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    ctx.fillStyle = 'red';
                    ctx.textBaseline = 'middle';
                    ctx.font = '33px Arial';
                    ctx.fillText('Ant Design', 20, 20);
                    canvas.toBlob((result) => resolve(result));
                };
            };
        });
    },
};

export default function RegisterFour() {
    // const [login, setLogin] = useState({
    //     username: '',
    //     password: ''
    // })
    // const dispatch = useDispatch()
    // const history = useHistory()
    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setLogin({ ...login, [name]: value })
    // }

    return (
        <div className={cx('login_content')}>
            <div className={cx('img_login')}>
                <img src="../loginPhong.png" alt="logo" />
            </div>
            <div className={cx('img_login_form')}>
                <h2 style={{
                    fontSize: '100px',
                    fontFamily: 'cursive',
                    color: 'cyan'
                }}>Nextshop</h2>
                <h5>Avatar</h5>

                {/* <form >
                    <div className="form-group">
                        <label htmlFor="username" className="sr-only">Email</label>
                        <input type="text" name="username" id="username" className="form-control" placeholder="Username"  />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <button   style={{color: 'white', fontSize: 18}}>Submit</button>
                    </div>
                </form> */}
                <Upload {...props}>
                    <Button style={{ padding: '0 20px', border: 0, width: '100%' }} icon={<UploadOutlined />}>Upload</Button>
                </Upload>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <button  style={{ color: 'white', fontSize: 18, backgroundColor: '#169BD5', padding: 10, borderRadius: 5, width: '100%', border: '#797979'}}>Submit</button>
                </div>
            </div>

            <div>
            </div>
        </div>
    )
}
