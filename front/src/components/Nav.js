export class Nav extends React.Component {

    constructor(props) {
      super(props)
      this.state = { isOpen: false }
    }
  
    handleOpen = () => {
      this.setState({ isOpen: true })
    }
  
    handleClose = () => {
       this.setState({ isOpen: false })
    }
  
    render() {
      return (
         <Nav>
          <NavDropdown
            onMouseEnter = { this.handleOpen }
            onMouseLeave = { this.handleClose }
            open={ this.state.isOpen }
            noCaret
            id="language-switcher-container"
          >
            <MenuItem>Only one Item</MenuItem>
          </NavDropdown>
        </Nav>
      )
    }
  }