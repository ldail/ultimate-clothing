import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { hideDropdownAndSidebar } from '../redux/navigation/navigation-actions';


const CloseSidebarAndDropdownLink = ({to, onClick = ()=>{}, children, hideDropdownAndSidebar}) => {
  return (
    <Link to={to} onClick={() => {
      hideDropdownAndSidebar();
      onClick();
    }
    }>
    {children}
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  hideDropdownAndSidebar: () => dispatch(hideDropdownAndSidebar())
})

export default connect(null,mapDispatchToProps)(CloseSidebarAndDropdownLink);