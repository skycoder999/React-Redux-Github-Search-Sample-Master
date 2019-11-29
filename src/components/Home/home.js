import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormFields } from '../../Hoc';
import { SearchSchema } from '../../schema';
import { SearchedResults } from '../../Hoc';
import axios from 'axios';
import blue from '@material-ui/core/colors/blue';

import { DialogList } from '../../Hoc'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

class Home extends React.Component {

    state = {
        SearchModel: Object.assign([], SearchSchema),
        timeout: 0,
        alreadySearched: '',
        open: false,
        userlist: [],
    }

    handleChange = event => {
        let SearchModel = this.state.SearchModel;
        const findIndex = this.state.SearchModel.findIndex((item) => item.field.name === event.target.id);
        let stateObject = this.state.SearchModel[findIndex];
        stateObject.field.value = event.target.value;
        SearchModel[findIndex] = stateObject;
        this.setState({ SearchModel });
        this.typingComplete();
    }

    showContributers = repo => event => {
        const $this = this;
        event.preventDefault();
        const org = this.state.SearchModel[0].field.value;
        axios.get('https://api.github.com/repos/' + org + '/' + repo + '/contributors')
            .then(function (response) {
                $this.handleClickOpen(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    typingComplete() {
        let $this = this;
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            clearTimeout($this);
            $this.props.searchedModel($this.state.SearchModel);
            if ($this.state.alreadySearched !== $this.state.SearchModel[0].field.value) {
                $this.props.requestSearch($this.state.SearchModel[0].field.value);
                $this.setState({ alreadySearched: $this.state.SearchModel[0].field.value });
            }

        }, 800);
    }

    handleClickOpen = (userlist) => {
        console.log(userlist, " Testing")
        this.setState({
            open: true,
            userlist
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, result } = this.props;
        const { SearchModel, open, userlist } = this.state;

        return (
            <div className={classes.root}>
                <DialogList open={open}
                    handleClose={this.handleClose}
                    userlist={userlist} 
                    classes={classes}/>
                <Grid container spacing={24} justify="center">
                    <Grid item xs={11} sm={4}>
                        <FormFields classes={classes}
                            SearchModel={SearchModel}
                            handleChange={this.handleChange} />
                    </Grid>
                </Grid>

                <Grid container spacing={24} justify="center">
                    <Grid item xs={11} sm={8}>
                        <SearchedResults classes={classes}
                            rows={result}
                            showContributers={this.showContributers}
                            userlist={userlist} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
