import React from 'react';
import styles from './styles.scss';


type Props={
  string:string,
};
const Text_Cursor = (props: Props)=>{
  const {string} = props;
    return(
        <span>
            {string}
            <span className={styles.cursorColor}>|</span>
        </span>
    )
};

Text_Cursor.defaultProps = {

};
export default Text_Cursor;