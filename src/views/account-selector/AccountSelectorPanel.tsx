import React from "react";
import { Panel, Header } from "@enact/sandstone/Panels";
import Image from "@enact/sandstone/Image";
import BodyText from "@enact/sandstone/BodyText";
import Button from "@enact/sandstone/Button";
import styles from "./styles.module.scss";

type AccountSelectorProps = {
  [key: string]: any;
};

const AccountSelector: React.FC<AccountSelectorProps> = (props) => {
  return (
    <Panel {...props}>
      <Header title="Ai đang xem?" subtitle="Chọn một tài khoản để bắt đầu" />

      <div className={styles.container}>
        <div className={styles.accountList}>
          {/* Profile giả lập 1 */}
          <div className={styles.accountWrapper} tabIndex={0}>
            <div className={styles.avatarCircle}>
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                className={styles.avatarImg}
              />
            </div>
            <BodyText className={styles.accountName}>User 01</BodyText>
          </div>

          {/* Profile giả lập 2 */}
          <div className={styles.accountWrapper} tabIndex={0}>
            <div className={styles.avatarCircle}>
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
                className={styles.avatarImg}
              />
            </div>
            <BodyText className={styles.accountName}>User 02</BodyText>
          </div>

          {/* Nút Thêm tài khoản (+) */}
          <div className={styles.accountWrapper} tabIndex={0}>
            <div className={`${styles.avatarCircle} ${styles.addCircle}`}>
              <span className={styles.plusSign}>+</span>
            </div>
            <BodyText className={styles.accountName}>Thêm tài khoản</BodyText>
          </div>
        </div>

        <div className={styles.footer}>
          <Button size="small">Xem với tư cách khách</Button>
        </div>
      </div>
    </Panel>
  );
};

export default AccountSelector;
