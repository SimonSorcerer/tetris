export const authenticate = (token) => {
    return {
        type: 'AUTHENTICATE',
        token
    }
}

export const updateUserDetails = (details) => {
    return {
        type: 'UPDATE_USER_DETAILS',
        details
    }
}

export const updateEvents = (data) => {
    return {
        type: 'UPDATE_EVENTS',
        data
    }
}

export const navigate = (path) => {
    return {
        type: 'NAVIGATE',
        path
    }
}
