import Excel from "../components/excel/Excel.js";
import Header from "../components/header/Header";
import Toolbar from "../components/toolbar/Toolbar";
import Formula from "../components/formula/Formula";
import Table from "../components/table/Table";
import '../styles/global.css'
import '../styles/styles.css'
import '../styles/dashboard.css'

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()