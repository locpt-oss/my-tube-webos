import React from "react";
import { Panel, Header } from "@enact/sandstone/Panels";
import Image from "@enact/sandstone/Image";
import BodyText from "@enact/sandstone/BodyText";
import Button from "@enact/sandstone/Button";
import Spottable from "@enact/spotlight/Spottable";
import styles from "./styles.module.scss";

type AccountSelectorProps = {
  [key: string]: any;
};

//Tạo một div có khả năng Focus (Spottable)
const AccountDiv = Spottable("div") as React.ComponentType<any>;

const AccountSelector: React.FC<AccountSelectorProps> = (props) => {
  return (
    <Panel {...props}>
      <Header title="Ai đang xem?" subtitle="Chọn một tài khoản để bắt đầu" />

      <div className={styles.container}>
        <div className={styles.accountList}>
          {/* Profile 1 */}
          <AccountDiv className={styles.accountWrapper}>
            <div className={styles.avatarCircle}>
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                className={styles.avatarImg}
              />
            </div>
            <BodyText className={styles.accountName}>User 01</BodyText>
          </AccountDiv>

          {/* Profile 2 */}
          <AccountDiv className={styles.accountWrapper}>
            <div className={styles.avatarCircle}>
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
                className={styles.avatarImg}
              />
            </div>
            <BodyText className={styles.accountName}>User 02</BodyText>
          </AccountDiv>

          {/* Nút Thêm tài khoản (+) */}
          <AccountDiv className={styles.accountWrapper}>
            <div className={`${styles.avatarCircle} ${styles.addCircle}`}>
              <span className={styles.plusSign}>+</span>
            </div>
            <BodyText className={styles.accountName}>Thêm tài khoản</BodyText>
          </AccountDiv>
        </div>

        <div className={styles.footer}>
          {/* Button của Enact đã có sẵn Spottable nên không cần sửa */}
          <Button size="small">Xem với tư cách khách</Button>
        </div>
      </div>
    </Panel>
  );
};

export default AccountSelector;
