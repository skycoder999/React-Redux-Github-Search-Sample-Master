import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

export const FormFields = ({ classes, SearchModel, handleChange }) => {
    return (
        <Fragment>
            {
                SearchModel.map((obj, idx) => {
                    return <TextField key={obj.field.name}
                        id={obj.field.name}
                        label={obj.field.label}
                        value={obj.field.value}
                        type={obj.field.type}
                        onChange={handleChange}
                        className={classNames(classes.textField)}
                        margin="dense"
                    />
                })
            }
        </Fragment>
    )
}

export const SearchedResults = ({rows, showContributers }) => {
    return (

        
        <Fragment>
                    {rows.map(row => (
                         <div key={row.name} class="media border p-3 bg-white">
                         <img src={`/assest/images/${row.language === 'C#' ||row.language=== '' ?'C':row.language}.png`} className="ml-3 mt-3 round-circle"/>
                            <div class="media-body">
                            <h3>{row.description}</h3>
                              <h4>{row.name.toUpperCase()} </h4>
                              <div>
                              <span><i class="far fa-star"></i>  {row.stars}</span>&nbsp;&nbsp;&nbsp;
                              <span><i class="fas fa-user-secret"></i> {row.watchers}</span>&nbsp;&nbsp;&nbsp;
                              <span><i class="fas fa-exclamation-triangle"></i> {row.issues}</span>
                              <br/><br/>
                              <p><a className="btn btn-info" href="#" onClick={showContributers(row.name)}>Show Contributers</a></p>
                              </div>
                            </div>
                           
                          </div>
                        
                    ))}
        </Fragment>
        
    )
}


const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
}))(MuiDialogContent);

export const DialogList = ({ userlist, open, handleClose, classes }) => {
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            className="dialog"
        >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Contributers List
          </DialogTitle>
            <DialogContent>
                <List>
                    {userlist.map(user => (
                        <ListItem button key={user.id}>
                            <ListItemAvatar>
                                <Avatar className={user.avatar_url}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={user.login} />
                        </ListItem>
                    ))} 
                </List>

            </DialogContent>
        </Dialog>
    )
}


