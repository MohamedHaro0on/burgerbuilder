import React, { PureComponent } from 'react';
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder"
class App extends PureComponent {
  render() {
        return (
      <div>
        <Layout >
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}
export default App;