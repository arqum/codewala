import React from 'react';
import styles from './styles.scss';


type Props={
  string:string,
};
const Text_Cursor = (props: Props)=>{
  const {string} = props;
    return(
        <span style={{fontSize:'10rem'}}>
            {string}
            <span className={styles["react-rotating-text-cursor"]}>|</span>
        </span>
    )
};

Text_Cursor.defaultProps = {

};
export default Text_Cursor;