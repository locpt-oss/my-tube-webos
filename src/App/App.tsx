import kind from "@enact/core/kind";
import Panels from "@enact/sandstone/Panels";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";

// import MainPanel from "../views/MainPanel";
import AccountSelector from "../views/account-selector/AccountSelectorPanel";

// import styles from "./App.module.scss";

const App = kind({
  name: "App",

  render: (props) => (
    <div {...props}>
      <Panels>
        <AccountSelector />
      </Panels>
    </div>
  ),
});

export default ThemeDecorator(App);
