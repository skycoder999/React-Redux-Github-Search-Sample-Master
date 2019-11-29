
export const SearchedModel = {
    issues: '',
    name: '',
    stars: '',
    watchers: ''
}

export const SearchSchema = [
    {
        field: {
            name: 'org-name',
            label: 'Org Name',
            type: 'string',
            value: '',
            error: false,
            errorMessage: "This field is required!!!"
        }
    },
    {
        field: {
            name: 'min-stars',
            label: 'Min Stars',
            type: 'number',
            value: '',
            error: false,
            errorMessage: "This field is required!!!"
        }
    },
    {
        field: {
            name: 'min-watchers',
            label: 'Min Watchers',
            type: 'number',
            value: '',
            error: false,
            errorMessage: "This field is required!!!"
        }
    },
    {
        field: {
            name: 'max-issues',
            label: 'Max Issues',
            type: 'number',
            value: '',
            error: false,
            errorMessage: "This field is required!!!"
        }
    },
    {
        field: {
            name: 'user-name',
            label: 'User Name',
            type: 'string',
            value: '',
            error: false,
            errorMessage: "This field is required!!!"
        }
    }
];

export const INITIAL_SEARCH_STATE = {
    searchResult: {
        error: {
            msg: "No Matching Result Found!!",
            isError: false
        },
        data: {
            result: []
        },
        model: SearchedModel,
    }
}


