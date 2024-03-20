// swagger.ts
import type { OpenAPIV3 } from '@types/swagger';

interface SwaggerSpec extends OpenAPIV3.Document {
    // You can optionally augment the interface with custom properties
}

const swaggerSpec: SwaggerSpec = {
    openapi: '3.0.3',
    info: {
        title: 'bAIdentity',
        version: '1.0.0'
    },
    // ... rest of your specification
    paths: {
        '/users': {
            get: {
                description: 'Gets a list of users',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/users/{id}': {
            get: {
                description: 'Gets a user by ID',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/users/{id}/posts': {
            get: {
                description: 'Gets posts by a user',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/posts': {
            get: {
                description: 'Gets a list of posts',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/posts/{id}': {
            get: {
                description: 'Gets a post by ID',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/posts/{id}/comments': {
            get: {
                description: 'Gets comments by a post',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/comments': {
            get: {
                description: 'Gets a list of comments',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/comments/{id}': {
            get: {
                description: 'Gets a comment by ID',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/comments/{id}/replies': {
            get: {
                description: 'Gets replies by a comment',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/replies': {
            get: {
                description: 'Gets a list of replies',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/replies/{id}': {
            get: {
                description: 'Gets a reply by ID',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/replies/{id}/replies': {
            get: {
                description: 'Gets replies by a reply',
                responses: {
                    '200': {
                        description: 'Success'
                    }
                }
            }
        },
        '/auth/register': {
            post: {
                description: 'Registers',
                responses: {
                    '201': {
                        description: 'Success'
                    }
                }
        }
    },
    '/auth/login': {
        post: {
            description: 'Logs in',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/logout': {
        post: {
            description: 'Logs out',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/totp/setup': {
        post: {
            description: 'Sets up TOTP',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/totp/verify': {
        post: {
            description: 'Verifies TOTP',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/totp/disable': {
        post: {
            description: 'Disables TOTP',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/recovery/setup': {
        post: {
            description: 'Sets up recovery codes',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/recovery/verify': {
        post: {
            description: 'Verifies recovery codes',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/recovery/disable': {
        post: {
            description: 'Disables recovery codes',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/u2f/setup': {
        post: {
            description: 'Sets up U2F',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/u2f/verify': {
        post: {
            description: 'Verifies U2F',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/u2f/disable': {
        post: {
            description: 'Disables U2F',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/u2f/register': {
        post: {
            description: 'Registers U2F',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/u2f/sign': {
        post: {
            description: 'Signs U2F',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/2fa/u2f/deregister': {
        post: {
            description: 'Deregisters U2F',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/session': {
        post: {
            description: 'Creates a session',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/session/{id}': {
        get: {
            description: 'Gets a session by ID',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/session/{id}/refresh': {
        post: {
            description: 'Refreshes a session',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/session/{id}/logout': {
        post: {
            description: 'Logs out'
        }

    },
    '/auth/session/{id}/verify': {
        post: {
            description: 'Verifies a session',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/session/{id}/delete': {
        post: {
            description: 'Deletes a session',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/session/{id}/revoke': {
        post: {
            description: 'Revokes a session',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/session/{id}/revokeAll': {
        post: {
            description: 'Revokes all sessions',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/session/{id}/revokeOthers': {
        post: {
            description: 'Revokes other sessions',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },
    '/auth/session/{id}/revokeAllOthers': {
        post: {
            description: 'Revokes all other sessions',
            responses: {
                '200': {
                    description: 'Success'
                }
            }
        }
    },




















    }
};

export default swaggerSpec;
