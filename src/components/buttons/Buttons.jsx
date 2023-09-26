import React from 'react';
import './Buttons.css';

const NavigationButton = ({ text }) => {
    return (
        <div className='generic-button button'>
            <p>{text}</p>
        </div>
    )
}

const LanguageButton = () => {
    return (
        <div className='language-button button'>
            <p>FR</p>
        </div>
    )
}

const LightModeButton = () => {
    return (
        <div className='light-mode-button button'>
            <div className='light-mode-button__sun light-mode-button'>

                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g className='sun-rays'>
                        <path d="M24 13.5C23.7028 13.4961 23.4189 13.3763 23.2087 13.1662C22.9986 12.9561 22.8789 12.6722 22.875 12.375V10.125C22.875 9.82664 22.9935 9.54048 23.2045 9.32951C23.4154 9.11853 23.7017 9 24 9C24.2983 9 24.5846 9.11853 24.7955 9.32951C25.0065 9.54048 25.125 9.82664 25.125 10.125V12.375C25.1211 12.6722 25.0014 12.9561 24.7913 13.1662C24.5811 13.3763 24.2972 13.4961 24 13.5Z" fill="#7AA3EB" />
                        <path d="M24 39C23.7028 38.9961 23.4189 38.8764 23.2087 38.6663C22.9986 38.4561 22.8789 38.1721 22.875 37.875V35.625C22.875 35.3267 22.9935 35.0404 23.2045 34.8295C23.4154 34.6185 23.7017 34.5 24 34.5C24.2983 34.5 24.5846 34.6185 24.7955 34.8295C25.0065 35.0404 25.125 35.3267 25.125 35.625V37.875C25.1211 38.1721 25.0014 38.4561 24.7913 38.6663C24.5811 38.8764 24.2972 38.9961 24 39Z" fill="#7AA3EB" />
                        <path d="M37.875 25.125H35.625C35.3267 25.125 35.0405 25.0065 34.8296 24.7955C34.6185 24.5846 34.5 24.2983 34.5 24C34.5 23.7017 34.6185 23.4154 34.8296 23.2045C35.0405 22.9935 35.3267 22.875 35.625 22.875H37.875C38.1734 22.875 38.4596 22.9935 38.6705 23.2045C38.8815 23.4154 39 23.7017 39 24C39 24.2983 38.8815 24.5846 38.6705 24.7955C38.4596 25.0065 38.1734 25.125 37.875 25.125Z" fill="#7AA3EB" />
                        <path d="M12.375 25.125H10.125C9.82662 25.125 9.54046 25.0065 9.32949 24.7955C9.11851 24.5846 8.99998 24.2983 8.99998 24C8.99998 23.7017 9.11851 23.4154 9.32949 23.2045C9.54046 22.9935 9.82662 22.875 10.125 22.875H12.375C12.6733 22.875 12.9595 22.9935 13.1705 23.2045C13.3815 23.4154 13.5 23.7017 13.5 24C13.5 24.2983 13.3815 24.5846 13.1705 24.7955C12.9595 25.0065 12.6733 25.125 12.375 25.125Z" fill="#7AA3EB" />
                        <path d="M15.75 16.8749C15.4606 16.8527 15.1913 16.7181 15 16.4999L13.365 14.9999C13.2576 14.8925 13.1725 14.7651 13.1144 14.6248C13.0563 14.4845 13.0264 14.3342 13.0264 14.1824C13.0264 14.0305 13.0563 13.8802 13.1144 13.7399C13.1725 13.5997 13.2576 13.4722 13.365 13.3649C13.4723 13.2575 13.5998 13.1724 13.7401 13.1143C13.8803 13.0562 14.0307 13.0262 14.1825 13.0262C14.3343 13.0262 14.4847 13.0562 14.6249 13.1143C14.7652 13.1724 14.8926 13.2575 15 13.3649L16.5 14.9999C16.6845 15.2061 16.7865 15.4732 16.7865 15.7499C16.7865 16.0266 16.6845 16.2936 16.5 16.4999C16.3086 16.7181 16.0394 16.8527 15.75 16.8749Z" fill="#7AA3EB" />
                        <path d="M33.84 34.965C33.6923 34.9656 33.5457 34.9368 33.4092 34.8801C33.2727 34.8236 33.149 34.7402 33.045 34.635L31.5 33C31.3998 32.79 31.3671 32.5542 31.4064 32.3249C31.4457 32.0957 31.5552 31.8842 31.7198 31.7196C31.8842 31.5552 32.0957 31.4457 32.325 31.4064C32.5542 31.367 32.7902 31.3997 33 31.5L34.635 33C34.8458 33.2109 34.9641 33.4968 34.9641 33.795C34.9641 34.0931 34.8458 34.3791 34.635 34.59C34.535 34.7033 34.4129 34.7951 34.2762 34.8596C34.1396 34.9241 33.9911 34.9599 33.84 34.965Z" fill="#7AA3EB" />
                        <path d="M32.25 16.8749C31.9607 16.8527 31.6914 16.7181 31.5 16.4999C31.3155 16.2936 31.2135 16.0266 31.2135 15.7499C31.2135 15.4732 31.3155 15.2061 31.5 14.9999L33 13.3649C33.2168 13.1481 33.5109 13.0262 33.8175 13.0262C34.1241 13.0262 34.4183 13.1481 34.635 13.3649C34.8518 13.5817 34.9737 13.8758 34.9737 14.1824C34.9737 14.489 34.8518 14.7831 34.635 14.9999L33 16.4999C32.8086 16.7181 32.5394 16.8527 32.25 16.8749Z" fill="#7AA3EB" />
                        <path d="M14.16 34.965C14.0122 34.9656 13.8657 34.9368 13.7292 34.8801C13.5927 34.8236 13.4689 34.7402 13.365 34.635C13.1543 34.4241 13.036 34.1381 13.036 33.84C13.036 33.5418 13.1543 33.2559 13.365 33.045L15 31.5C15.21 31.3997 15.4458 31.367 15.6751 31.4064C15.9044 31.4457 16.1158 31.5552 16.2804 31.7196C16.4449 31.8842 16.5543 32.0957 16.5937 32.3249C16.633 32.5542 16.6003 32.79 16.5 33L15 34.635C14.8909 34.7457 14.7598 34.8324 14.6151 34.8893C14.4704 34.9461 14.3153 34.9719 14.16 34.965Z" fill="#7AA3EB" />
                    </g>
                    <g className='sun-center'>
                        <path d="M24 32.625C22.2942 32.625 20.6266 32.1192 19.2082 31.1715C17.7899 30.2237 16.6844 28.8767 16.0316 27.3006C15.3788 25.7247 15.2079 23.9904 15.5408 22.3173C15.8735 20.6443 16.695 19.1074 17.9012 17.9012C19.1075 16.695 20.6443 15.8735 22.3173 15.5407C23.9904 15.2079 25.7247 15.3787 27.3006 16.0316C28.8767 16.6844 30.2237 17.7898 31.1715 19.2082C32.1192 20.6266 32.625 22.2942 32.625 24C32.6211 26.2863 31.7111 28.4778 30.0944 30.0944C28.4778 31.7111 26.2863 32.6211 24 32.625ZM24 17.625C22.7391 17.625 21.5066 17.9989 20.4583 18.6994C19.4099 19.3999 18.5928 20.3955 18.1103 21.5604C17.6278 22.7253 17.5015 24.0071 17.7475 25.2437C17.9935 26.4804 18.6007 27.6162 19.4922 28.5078C20.3838 29.3994 21.5196 30.0066 22.7564 30.2525C23.993 30.4985 25.2747 30.3723 26.4396 29.8898C27.6045 29.4072 28.6002 28.5902 29.3006 27.5418C30.0011 26.4935 30.375 25.2609 30.375 24C30.3711 22.3104 29.6981 20.6913 28.5035 19.4966C27.3087 18.3019 25.6896 17.629 24 17.625Z" fill="#7AA3EB" />
                    </g>
                </svg>

            </div>
        </div>
    )
}

export { NavigationButton, LanguageButton, LightModeButton }