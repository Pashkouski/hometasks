import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {
        id: number
    }
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" alt=""
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        ewqweq
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        sadsdsa
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                21
                {/**/}
            </div>
        </div>
    )
}

export default Message
