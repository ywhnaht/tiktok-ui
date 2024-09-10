import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/66ca498ea95116e2bc8263944f5d6abc.jpeg?lk3s=a5d48078&nonce=72928&refresh_token=9c51efd4900c8db52ea9e528552a0945&x-expires=1726156800&x-signature=RfwcykNvgzogLsGaYXzZJQsddCM%3D&shp=a5d48078&shcp=81f88b70"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le anh tuan</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ywhnaht</span>
            </div>
        </div>
    );
}

export default AccountItem;
