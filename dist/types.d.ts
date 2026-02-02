import { type Transport } from '@modelcontextprotocol/sdk/shared/transport.js';
import { z } from 'zod';
export declare const BaseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    permissionLevel: z.ZodString;
}, z.core.$strip>;
export declare const ListBasesResponseSchema: z.ZodObject<{
    bases: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        permissionLevel: z.ZodString;
    }, z.core.$strip>>;
    offset: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const FieldOptionsSchema: z.ZodObject<{
    isReversed: z.ZodOptional<z.ZodBoolean>;
    inverseLinkFieldId: z.ZodOptional<z.ZodString>;
    linkedTableId: z.ZodOptional<z.ZodString>;
    prefersSingleRecordLink: z.ZodOptional<z.ZodBoolean>;
    color: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export declare const FieldSchema: z.ZodIntersection<z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"autoNumber">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"barcode">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"button">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        color: z.ZodEnum<{
            greenBright: "greenBright";
            tealBright: "tealBright";
            cyanBright: "cyanBright";
            blueBright: "blueBright";
            purpleBright: "purpleBright";
            pinkBright: "pinkBright";
            redBright: "redBright";
            orangeBright: "orangeBright";
            yellowBright: "yellowBright";
            grayBright: "grayBright";
        }>;
        icon: z.ZodEnum<{
            check: "check";
            xCheckbox: "xCheckbox";
            star: "star";
            heart: "heart";
            thumbsUp: "thumbsUp";
            flag: "flag";
            dot: "dot";
        }>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"checkbox">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"createdBy">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        result: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            options: z.ZodObject<{
                dateFormat: z.ZodObject<{
                    format: z.ZodEnum<{
                        l: "l";
                        LL: "LL";
                        "M/D/YYYY": "M/D/YYYY";
                        "D/M/YYYY": "D/M/YYYY";
                        "YYYY-MM-DD": "YYYY-MM-DD";
                    }>;
                    name: z.ZodEnum<{
                        local: "local";
                        friendly: "friendly";
                        us: "us";
                        european: "european";
                        iso: "iso";
                    }>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"date">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                dateFormat: z.ZodObject<{
                    format: z.ZodEnum<{
                        l: "l";
                        LL: "LL";
                        "M/D/YYYY": "M/D/YYYY";
                        "D/M/YYYY": "D/M/YYYY";
                        "YYYY-MM-DD": "YYYY-MM-DD";
                    }>;
                    name: z.ZodEnum<{
                        local: "local";
                        friendly: "friendly";
                        us: "us";
                        european: "european";
                        iso: "iso";
                    }>;
                }, z.core.$strip>;
                timeFormat: z.ZodObject<{
                    format: z.ZodEnum<{
                        "h:mma": "h:mma";
                        "HH:mm": "HH:mm";
                    }>;
                    name: z.ZodEnum<{
                        "12hour": "12hour";
                        "24hour": "24hour";
                    }>;
                }, z.core.$strip>;
                timeZone: z.ZodAny;
            }, z.core.$strip>;
            type: z.ZodLiteral<"dateTime">;
        }, z.core.$strip>]>>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"createdTime">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        isValid: z.ZodBoolean;
        recordLinkFieldId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"count">;
}, z.core.$strip>, z.ZodAny, z.ZodObject<{
    options: z.ZodObject<{
        isValid: z.ZodBoolean;
        referencedFieldIds: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodNull]>;
        result: z.ZodUnion<readonly [z.ZodObject<{
            options: z.ZodObject<{
                dateFormat: z.ZodObject<{
                    format: z.ZodEnum<{
                        l: "l";
                        LL: "LL";
                        "M/D/YYYY": "M/D/YYYY";
                        "D/M/YYYY": "D/M/YYYY";
                        "YYYY-MM-DD": "YYYY-MM-DD";
                    }>;
                    name: z.ZodEnum<{
                        local: "local";
                        friendly: "friendly";
                        us: "us";
                        european: "european";
                        iso: "iso";
                    }>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"date">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                dateFormat: z.ZodObject<{
                    format: z.ZodEnum<{
                        l: "l";
                        LL: "LL";
                        "M/D/YYYY": "M/D/YYYY";
                        "D/M/YYYY": "D/M/YYYY";
                        "YYYY-MM-DD": "YYYY-MM-DD";
                    }>;
                    name: z.ZodEnum<{
                        local: "local";
                        friendly: "friendly";
                        us: "us";
                        european: "european";
                        iso: "iso";
                    }>;
                }, z.core.$strip>;
                timeFormat: z.ZodObject<{
                    format: z.ZodEnum<{
                        "h:mma": "h:mma";
                        "HH:mm": "HH:mm";
                    }>;
                    name: z.ZodEnum<{
                        "12hour": "12hour";
                        "24hour": "24hour";
                    }>;
                }, z.core.$strip>;
                timeZone: z.ZodAny;
            }, z.core.$strip>;
            type: z.ZodLiteral<"dateTime">;
        }, z.core.$strip>, z.ZodNull]>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"lastModifiedTime">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"lastModifiedBy">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        fieldIdInLinkedTable: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        isValid: z.ZodBoolean;
        recordLinkFieldId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        result: z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"lookup">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        precision: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodLiteral<"number">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        precision: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodLiteral<"percent">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        precision: z.ZodNumber;
        symbol: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodLiteral<"currency">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        durationFormat: z.ZodEnum<{
            "h:mm": "h:mm";
            "h:mm:ss": "h:mm:ss";
            "h:mm:ss.S": "h:mm:ss.S";
            "h:mm:ss.SS": "h:mm:ss.SS";
            "h:mm:ss.SSS": "h:mm:ss.SSS";
        }>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"duration">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"multilineText">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"phoneNumber">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        color: z.ZodEnum<{
            greenBright: "greenBright";
            tealBright: "tealBright";
            cyanBright: "cyanBright";
            blueBright: "blueBright";
            purpleBright: "purpleBright";
            pinkBright: "pinkBright";
            redBright: "redBright";
            orangeBright: "orangeBright";
            yellowBright: "yellowBright";
            grayBright: "grayBright";
        }>;
        icon: z.ZodEnum<{
            star: "star";
            heart: "heart";
            thumbsUp: "thumbsUp";
            flag: "flag";
            dot: "dot";
        }>;
        max: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodLiteral<"rating">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"richText">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        fieldIdInLinkedTable: z.ZodOptional<z.ZodString>;
        isValid: z.ZodOptional<z.ZodBoolean>;
        recordLinkFieldId: z.ZodOptional<z.ZodString>;
        referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        result: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"rollup">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"singleLineText">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"email">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"url">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        choices: z.ZodArray<z.ZodObject<{
            color: z.ZodOptional<z.ZodString>;
            id: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"externalSyncSource">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        prompt: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            field: z.ZodObject<{
                fieldId: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>]>>>;
        referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"aiText">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        linkedTableId: z.ZodString;
        viewIdForRecordSelection: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"multipleRecordLinks">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        choices: z.ZodArray<z.ZodObject<{
            color: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"singleSelect">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        choices: z.ZodArray<z.ZodObject<{
            color: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"multipleSelects">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    type: z.ZodLiteral<"singleCollaborator">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    type: z.ZodLiteral<"multipleCollaborators">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        dateFormat: z.ZodObject<{
            format: z.ZodOptional<z.ZodEnum<{
                l: "l";
                LL: "LL";
                "M/D/YYYY": "M/D/YYYY";
                "D/M/YYYY": "D/M/YYYY";
                "YYYY-MM-DD": "YYYY-MM-DD";
            }>>;
            name: z.ZodEnum<{
                local: "local";
                friendly: "friendly";
                us: "us";
                european: "european";
                iso: "iso";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type: z.ZodLiteral<"date">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodObject<{
        dateFormat: z.ZodObject<{
            format: z.ZodOptional<z.ZodEnum<{
                l: "l";
                LL: "LL";
                "M/D/YYYY": "M/D/YYYY";
                "D/M/YYYY": "D/M/YYYY";
                "YYYY-MM-DD": "YYYY-MM-DD";
            }>>;
            name: z.ZodEnum<{
                local: "local";
                friendly: "friendly";
                us: "us";
                european: "european";
                iso: "iso";
            }>;
        }, z.core.$strip>;
        timeFormat: z.ZodObject<{
            format: z.ZodOptional<z.ZodEnum<{
                "h:mma": "h:mma";
                "HH:mm": "HH:mm";
            }>>;
            name: z.ZodEnum<{
                "12hour": "12hour";
                "24hour": "24hour";
            }>;
        }, z.core.$strip>;
        timeZone: z.ZodAny;
    }, z.core.$strip>;
    type: z.ZodLiteral<"dateTime">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodOptional<z.ZodObject<{
        isReversed: z.ZodBoolean;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"multipleAttachments">;
}, z.core.$strip>]>>;
export declare const ViewSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export declare const TableSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    primaryFieldId: z.ZodString;
    fields: z.ZodArray<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"autoNumber">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"barcode">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"button">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            color: z.ZodEnum<{
                greenBright: "greenBright";
                tealBright: "tealBright";
                cyanBright: "cyanBright";
                blueBright: "blueBright";
                purpleBright: "purpleBright";
                pinkBright: "pinkBright";
                redBright: "redBright";
                orangeBright: "orangeBright";
                yellowBright: "yellowBright";
                grayBright: "grayBright";
            }>;
            icon: z.ZodEnum<{
                check: "check";
                xCheckbox: "xCheckbox";
                star: "star";
                heart: "heart";
                thumbsUp: "thumbsUp";
                flag: "flag";
                dot: "dot";
            }>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"checkbox">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"createdBy">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            result: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                options: z.ZodObject<{
                    dateFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            l: "l";
                            LL: "LL";
                            "M/D/YYYY": "M/D/YYYY";
                            "D/M/YYYY": "D/M/YYYY";
                            "YYYY-MM-DD": "YYYY-MM-DD";
                        }>;
                        name: z.ZodEnum<{
                            local: "local";
                            friendly: "friendly";
                            us: "us";
                            european: "european";
                            iso: "iso";
                        }>;
                    }, z.core.$strip>;
                }, z.core.$strip>;
                type: z.ZodLiteral<"date">;
            }, z.core.$strip>, z.ZodObject<{
                options: z.ZodObject<{
                    dateFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            l: "l";
                            LL: "LL";
                            "M/D/YYYY": "M/D/YYYY";
                            "D/M/YYYY": "D/M/YYYY";
                            "YYYY-MM-DD": "YYYY-MM-DD";
                        }>;
                        name: z.ZodEnum<{
                            local: "local";
                            friendly: "friendly";
                            us: "us";
                            european: "european";
                            iso: "iso";
                        }>;
                    }, z.core.$strip>;
                    timeFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            "h:mma": "h:mma";
                            "HH:mm": "HH:mm";
                        }>;
                        name: z.ZodEnum<{
                            "12hour": "12hour";
                            "24hour": "24hour";
                        }>;
                    }, z.core.$strip>;
                    timeZone: z.ZodAny;
                }, z.core.$strip>;
                type: z.ZodLiteral<"dateTime">;
            }, z.core.$strip>]>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"createdTime">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            isValid: z.ZodBoolean;
            recordLinkFieldId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"count">;
    }, z.core.$strip>, z.ZodAny, z.ZodObject<{
        options: z.ZodObject<{
            isValid: z.ZodBoolean;
            referencedFieldIds: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodNull]>;
            result: z.ZodUnion<readonly [z.ZodObject<{
                options: z.ZodObject<{
                    dateFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            l: "l";
                            LL: "LL";
                            "M/D/YYYY": "M/D/YYYY";
                            "D/M/YYYY": "D/M/YYYY";
                            "YYYY-MM-DD": "YYYY-MM-DD";
                        }>;
                        name: z.ZodEnum<{
                            local: "local";
                            friendly: "friendly";
                            us: "us";
                            european: "european";
                            iso: "iso";
                        }>;
                    }, z.core.$strip>;
                }, z.core.$strip>;
                type: z.ZodLiteral<"date">;
            }, z.core.$strip>, z.ZodObject<{
                options: z.ZodObject<{
                    dateFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            l: "l";
                            LL: "LL";
                            "M/D/YYYY": "M/D/YYYY";
                            "D/M/YYYY": "D/M/YYYY";
                            "YYYY-MM-DD": "YYYY-MM-DD";
                        }>;
                        name: z.ZodEnum<{
                            local: "local";
                            friendly: "friendly";
                            us: "us";
                            european: "european";
                            iso: "iso";
                        }>;
                    }, z.core.$strip>;
                    timeFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            "h:mma": "h:mma";
                            "HH:mm": "HH:mm";
                        }>;
                        name: z.ZodEnum<{
                            "12hour": "12hour";
                            "24hour": "24hour";
                        }>;
                    }, z.core.$strip>;
                    timeZone: z.ZodAny;
                }, z.core.$strip>;
                type: z.ZodLiteral<"dateTime">;
            }, z.core.$strip>, z.ZodNull]>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"lastModifiedTime">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"lastModifiedBy">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            fieldIdInLinkedTable: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            isValid: z.ZodBoolean;
            recordLinkFieldId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            result: z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"lookup">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            precision: z.ZodNumber;
        }, z.core.$strip>;
        type: z.ZodLiteral<"number">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            precision: z.ZodNumber;
        }, z.core.$strip>;
        type: z.ZodLiteral<"percent">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            precision: z.ZodNumber;
            symbol: z.ZodString;
        }, z.core.$strip>;
        type: z.ZodLiteral<"currency">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            durationFormat: z.ZodEnum<{
                "h:mm": "h:mm";
                "h:mm:ss": "h:mm:ss";
                "h:mm:ss.S": "h:mm:ss.S";
                "h:mm:ss.SS": "h:mm:ss.SS";
                "h:mm:ss.SSS": "h:mm:ss.SSS";
            }>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"duration">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"multilineText">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"phoneNumber">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            color: z.ZodEnum<{
                greenBright: "greenBright";
                tealBright: "tealBright";
                cyanBright: "cyanBright";
                blueBright: "blueBright";
                purpleBright: "purpleBright";
                pinkBright: "pinkBright";
                redBright: "redBright";
                orangeBright: "orangeBright";
                yellowBright: "yellowBright";
                grayBright: "grayBright";
            }>;
            icon: z.ZodEnum<{
                star: "star";
                heart: "heart";
                thumbsUp: "thumbsUp";
                flag: "flag";
                dot: "dot";
            }>;
            max: z.ZodNumber;
        }, z.core.$strip>;
        type: z.ZodLiteral<"rating">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"richText">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            fieldIdInLinkedTable: z.ZodOptional<z.ZodString>;
            isValid: z.ZodOptional<z.ZodBoolean>;
            recordLinkFieldId: z.ZodOptional<z.ZodString>;
            referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            result: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"rollup">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"singleLineText">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"email">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"url">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            choices: z.ZodArray<z.ZodObject<{
                color: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"externalSyncSource">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            prompt: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                field: z.ZodObject<{
                    fieldId: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>]>>>;
            referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"aiText">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            linkedTableId: z.ZodString;
            viewIdForRecordSelection: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"multipleRecordLinks">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            choices: z.ZodArray<z.ZodObject<{
                color: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"singleSelect">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            choices: z.ZodArray<z.ZodObject<{
                color: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"multipleSelects">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        type: z.ZodLiteral<"singleCollaborator">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        type: z.ZodLiteral<"multipleCollaborators">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            dateFormat: z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<{
                    l: "l";
                    LL: "LL";
                    "M/D/YYYY": "M/D/YYYY";
                    "D/M/YYYY": "D/M/YYYY";
                    "YYYY-MM-DD": "YYYY-MM-DD";
                }>>;
                name: z.ZodEnum<{
                    local: "local";
                    friendly: "friendly";
                    us: "us";
                    european: "european";
                    iso: "iso";
                }>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"date">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            dateFormat: z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<{
                    l: "l";
                    LL: "LL";
                    "M/D/YYYY": "M/D/YYYY";
                    "D/M/YYYY": "D/M/YYYY";
                    "YYYY-MM-DD": "YYYY-MM-DD";
                }>>;
                name: z.ZodEnum<{
                    local: "local";
                    friendly: "friendly";
                    us: "us";
                    european: "european";
                    iso: "iso";
                }>;
            }, z.core.$strip>;
            timeFormat: z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<{
                    "h:mma": "h:mma";
                    "HH:mm": "HH:mm";
                }>>;
                name: z.ZodEnum<{
                    "12hour": "12hour";
                    "24hour": "24hour";
                }>;
            }, z.core.$strip>;
            timeZone: z.ZodAny;
        }, z.core.$strip>;
        type: z.ZodLiteral<"dateTime">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodOptional<z.ZodObject<{
            isReversed: z.ZodBoolean;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"multipleAttachments">;
    }, z.core.$strip>]>>, z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>>>;
    views: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const BaseSchemaResponseSchema: z.ZodObject<{
    tables: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        primaryFieldId: z.ZodString;
        fields: z.ZodArray<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<"autoNumber">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"barcode">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"button">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                color: z.ZodEnum<{
                    greenBright: "greenBright";
                    tealBright: "tealBright";
                    cyanBright: "cyanBright";
                    blueBright: "blueBright";
                    purpleBright: "purpleBright";
                    pinkBright: "pinkBright";
                    redBright: "redBright";
                    orangeBright: "orangeBright";
                    yellowBright: "yellowBright";
                    grayBright: "grayBright";
                }>;
                icon: z.ZodEnum<{
                    check: "check";
                    xCheckbox: "xCheckbox";
                    star: "star";
                    heart: "heart";
                    thumbsUp: "thumbsUp";
                    flag: "flag";
                    dot: "dot";
                }>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"checkbox">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"createdBy">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                result: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    options: z.ZodObject<{
                        dateFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                l: "l";
                                LL: "LL";
                                "M/D/YYYY": "M/D/YYYY";
                                "D/M/YYYY": "D/M/YYYY";
                                "YYYY-MM-DD": "YYYY-MM-DD";
                            }>;
                            name: z.ZodEnum<{
                                local: "local";
                                friendly: "friendly";
                                us: "us";
                                european: "european";
                                iso: "iso";
                            }>;
                        }, z.core.$strip>;
                    }, z.core.$strip>;
                    type: z.ZodLiteral<"date">;
                }, z.core.$strip>, z.ZodObject<{
                    options: z.ZodObject<{
                        dateFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                l: "l";
                                LL: "LL";
                                "M/D/YYYY": "M/D/YYYY";
                                "D/M/YYYY": "D/M/YYYY";
                                "YYYY-MM-DD": "YYYY-MM-DD";
                            }>;
                            name: z.ZodEnum<{
                                local: "local";
                                friendly: "friendly";
                                us: "us";
                                european: "european";
                                iso: "iso";
                            }>;
                        }, z.core.$strip>;
                        timeFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                "h:mma": "h:mma";
                                "HH:mm": "HH:mm";
                            }>;
                            name: z.ZodEnum<{
                                "12hour": "12hour";
                                "24hour": "24hour";
                            }>;
                        }, z.core.$strip>;
                        timeZone: z.ZodAny;
                    }, z.core.$strip>;
                    type: z.ZodLiteral<"dateTime">;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"createdTime">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                isValid: z.ZodBoolean;
                recordLinkFieldId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"count">;
        }, z.core.$strip>, z.ZodAny, z.ZodObject<{
            options: z.ZodObject<{
                isValid: z.ZodBoolean;
                referencedFieldIds: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodNull]>;
                result: z.ZodUnion<readonly [z.ZodObject<{
                    options: z.ZodObject<{
                        dateFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                l: "l";
                                LL: "LL";
                                "M/D/YYYY": "M/D/YYYY";
                                "D/M/YYYY": "D/M/YYYY";
                                "YYYY-MM-DD": "YYYY-MM-DD";
                            }>;
                            name: z.ZodEnum<{
                                local: "local";
                                friendly: "friendly";
                                us: "us";
                                european: "european";
                                iso: "iso";
                            }>;
                        }, z.core.$strip>;
                    }, z.core.$strip>;
                    type: z.ZodLiteral<"date">;
                }, z.core.$strip>, z.ZodObject<{
                    options: z.ZodObject<{
                        dateFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                l: "l";
                                LL: "LL";
                                "M/D/YYYY": "M/D/YYYY";
                                "D/M/YYYY": "D/M/YYYY";
                                "YYYY-MM-DD": "YYYY-MM-DD";
                            }>;
                            name: z.ZodEnum<{
                                local: "local";
                                friendly: "friendly";
                                us: "us";
                                european: "european";
                                iso: "iso";
                            }>;
                        }, z.core.$strip>;
                        timeFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                "h:mma": "h:mma";
                                "HH:mm": "HH:mm";
                            }>;
                            name: z.ZodEnum<{
                                "12hour": "12hour";
                                "24hour": "24hour";
                            }>;
                        }, z.core.$strip>;
                        timeZone: z.ZodAny;
                    }, z.core.$strip>;
                    type: z.ZodLiteral<"dateTime">;
                }, z.core.$strip>, z.ZodNull]>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"lastModifiedTime">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"lastModifiedBy">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                fieldIdInLinkedTable: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                isValid: z.ZodBoolean;
                recordLinkFieldId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                result: z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"lookup">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                precision: z.ZodNumber;
            }, z.core.$strip>;
            type: z.ZodLiteral<"number">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                precision: z.ZodNumber;
            }, z.core.$strip>;
            type: z.ZodLiteral<"percent">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                precision: z.ZodNumber;
                symbol: z.ZodString;
            }, z.core.$strip>;
            type: z.ZodLiteral<"currency">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                durationFormat: z.ZodEnum<{
                    "h:mm": "h:mm";
                    "h:mm:ss": "h:mm:ss";
                    "h:mm:ss.S": "h:mm:ss.S";
                    "h:mm:ss.SS": "h:mm:ss.SS";
                    "h:mm:ss.SSS": "h:mm:ss.SSS";
                }>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"duration">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"multilineText">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"phoneNumber">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                color: z.ZodEnum<{
                    greenBright: "greenBright";
                    tealBright: "tealBright";
                    cyanBright: "cyanBright";
                    blueBright: "blueBright";
                    purpleBright: "purpleBright";
                    pinkBright: "pinkBright";
                    redBright: "redBright";
                    orangeBright: "orangeBright";
                    yellowBright: "yellowBright";
                    grayBright: "grayBright";
                }>;
                icon: z.ZodEnum<{
                    star: "star";
                    heart: "heart";
                    thumbsUp: "thumbsUp";
                    flag: "flag";
                    dot: "dot";
                }>;
                max: z.ZodNumber;
            }, z.core.$strip>;
            type: z.ZodLiteral<"rating">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"richText">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                fieldIdInLinkedTable: z.ZodOptional<z.ZodString>;
                isValid: z.ZodOptional<z.ZodBoolean>;
                recordLinkFieldId: z.ZodOptional<z.ZodString>;
                referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
                result: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"rollup">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"singleLineText">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"email">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"url">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                choices: z.ZodArray<z.ZodObject<{
                    color: z.ZodOptional<z.ZodString>;
                    id: z.ZodString;
                    name: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"externalSyncSource">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                prompt: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                    field: z.ZodObject<{
                        fieldId: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>]>>>;
                referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"aiText">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                linkedTableId: z.ZodString;
                viewIdForRecordSelection: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"multipleRecordLinks">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                choices: z.ZodArray<z.ZodObject<{
                    color: z.ZodOptional<z.ZodString>;
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"singleSelect">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                choices: z.ZodArray<z.ZodObject<{
                    color: z.ZodOptional<z.ZodString>;
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"multipleSelects">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            type: z.ZodLiteral<"singleCollaborator">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            type: z.ZodLiteral<"multipleCollaborators">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                dateFormat: z.ZodObject<{
                    format: z.ZodOptional<z.ZodEnum<{
                        l: "l";
                        LL: "LL";
                        "M/D/YYYY": "M/D/YYYY";
                        "D/M/YYYY": "D/M/YYYY";
                        "YYYY-MM-DD": "YYYY-MM-DD";
                    }>>;
                    name: z.ZodEnum<{
                        local: "local";
                        friendly: "friendly";
                        us: "us";
                        european: "european";
                        iso: "iso";
                    }>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"date">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                dateFormat: z.ZodObject<{
                    format: z.ZodOptional<z.ZodEnum<{
                        l: "l";
                        LL: "LL";
                        "M/D/YYYY": "M/D/YYYY";
                        "D/M/YYYY": "D/M/YYYY";
                        "YYYY-MM-DD": "YYYY-MM-DD";
                    }>>;
                    name: z.ZodEnum<{
                        local: "local";
                        friendly: "friendly";
                        us: "us";
                        european: "european";
                        iso: "iso";
                    }>;
                }, z.core.$strip>;
                timeFormat: z.ZodObject<{
                    format: z.ZodOptional<z.ZodEnum<{
                        "h:mma": "h:mma";
                        "HH:mm": "HH:mm";
                    }>>;
                    name: z.ZodEnum<{
                        "12hour": "12hour";
                        "24hour": "24hour";
                    }>;
                }, z.core.$strip>;
                timeZone: z.ZodAny;
            }, z.core.$strip>;
            type: z.ZodLiteral<"dateTime">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodOptional<z.ZodObject<{
                isReversed: z.ZodBoolean;
            }, z.core.$strip>>;
            type: z.ZodLiteral<"multipleAttachments">;
        }, z.core.$strip>]>>, z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        views: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            type: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const ListRecordsArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    view: z.ZodOptional<z.ZodString>;
    maxRecords: z.ZodOptional<z.ZodNumber>;
    filterByFormula: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        direction: z.ZodOptional<z.ZodEnum<{
            asc: "asc";
            desc: "desc";
        }>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const SearchRecordsArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    view: z.ZodOptional<z.ZodString>;
    searchTerm: z.ZodString;
    fieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    maxRecords: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const TableDetailLevelSchema: z.ZodEnum<{
    tableIdentifiersOnly: "tableIdentifiersOnly";
    identifiersOnly: "identifiersOnly";
    full: "full";
}>;
export declare const DescribeTableArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    detailLevel: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        tableIdentifiersOnly: "tableIdentifiersOnly";
        identifiersOnly: "identifiersOnly";
        full: "full";
    }>>>;
}, z.core.$strip>;
export declare const ListTablesArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    detailLevel: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        tableIdentifiersOnly: "tableIdentifiersOnly";
        identifiersOnly: "identifiersOnly";
        full: "full";
    }>>>;
}, z.core.$strip>;
export declare const GetRecordArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    recordId: z.ZodString;
}, z.core.$strip>;
export declare const CreateRecordArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodAny>;
}, z.core.$strip>;
export declare const UpdateRecordsArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    records: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        fields: z.ZodRecord<z.ZodString, z.ZodAny>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const DeleteRecordsArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    recordIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const CreateTableArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    fields: z.ZodArray<z.ZodIntersection<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"autoNumber">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"barcode">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"button">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            color: z.ZodEnum<{
                greenBright: "greenBright";
                tealBright: "tealBright";
                cyanBright: "cyanBright";
                blueBright: "blueBright";
                purpleBright: "purpleBright";
                pinkBright: "pinkBright";
                redBright: "redBright";
                orangeBright: "orangeBright";
                yellowBright: "yellowBright";
                grayBright: "grayBright";
            }>;
            icon: z.ZodEnum<{
                check: "check";
                xCheckbox: "xCheckbox";
                star: "star";
                heart: "heart";
                thumbsUp: "thumbsUp";
                flag: "flag";
                dot: "dot";
            }>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"checkbox">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"createdBy">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            result: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                options: z.ZodObject<{
                    dateFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            l: "l";
                            LL: "LL";
                            "M/D/YYYY": "M/D/YYYY";
                            "D/M/YYYY": "D/M/YYYY";
                            "YYYY-MM-DD": "YYYY-MM-DD";
                        }>;
                        name: z.ZodEnum<{
                            local: "local";
                            friendly: "friendly";
                            us: "us";
                            european: "european";
                            iso: "iso";
                        }>;
                    }, z.core.$strip>;
                }, z.core.$strip>;
                type: z.ZodLiteral<"date">;
            }, z.core.$strip>, z.ZodObject<{
                options: z.ZodObject<{
                    dateFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            l: "l";
                            LL: "LL";
                            "M/D/YYYY": "M/D/YYYY";
                            "D/M/YYYY": "D/M/YYYY";
                            "YYYY-MM-DD": "YYYY-MM-DD";
                        }>;
                        name: z.ZodEnum<{
                            local: "local";
                            friendly: "friendly";
                            us: "us";
                            european: "european";
                            iso: "iso";
                        }>;
                    }, z.core.$strip>;
                    timeFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            "h:mma": "h:mma";
                            "HH:mm": "HH:mm";
                        }>;
                        name: z.ZodEnum<{
                            "12hour": "12hour";
                            "24hour": "24hour";
                        }>;
                    }, z.core.$strip>;
                    timeZone: z.ZodAny;
                }, z.core.$strip>;
                type: z.ZodLiteral<"dateTime">;
            }, z.core.$strip>]>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"createdTime">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            isValid: z.ZodBoolean;
            recordLinkFieldId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"count">;
    }, z.core.$strip>, z.ZodAny, z.ZodObject<{
        options: z.ZodObject<{
            isValid: z.ZodBoolean;
            referencedFieldIds: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodNull]>;
            result: z.ZodUnion<readonly [z.ZodObject<{
                options: z.ZodObject<{
                    dateFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            l: "l";
                            LL: "LL";
                            "M/D/YYYY": "M/D/YYYY";
                            "D/M/YYYY": "D/M/YYYY";
                            "YYYY-MM-DD": "YYYY-MM-DD";
                        }>;
                        name: z.ZodEnum<{
                            local: "local";
                            friendly: "friendly";
                            us: "us";
                            european: "european";
                            iso: "iso";
                        }>;
                    }, z.core.$strip>;
                }, z.core.$strip>;
                type: z.ZodLiteral<"date">;
            }, z.core.$strip>, z.ZodObject<{
                options: z.ZodObject<{
                    dateFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            l: "l";
                            LL: "LL";
                            "M/D/YYYY": "M/D/YYYY";
                            "D/M/YYYY": "D/M/YYYY";
                            "YYYY-MM-DD": "YYYY-MM-DD";
                        }>;
                        name: z.ZodEnum<{
                            local: "local";
                            friendly: "friendly";
                            us: "us";
                            european: "european";
                            iso: "iso";
                        }>;
                    }, z.core.$strip>;
                    timeFormat: z.ZodObject<{
                        format: z.ZodEnum<{
                            "h:mma": "h:mma";
                            "HH:mm": "HH:mm";
                        }>;
                        name: z.ZodEnum<{
                            "12hour": "12hour";
                            "24hour": "24hour";
                        }>;
                    }, z.core.$strip>;
                    timeZone: z.ZodAny;
                }, z.core.$strip>;
                type: z.ZodLiteral<"dateTime">;
            }, z.core.$strip>, z.ZodNull]>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"lastModifiedTime">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"lastModifiedBy">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            fieldIdInLinkedTable: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            isValid: z.ZodBoolean;
            recordLinkFieldId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            result: z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"lookup">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            precision: z.ZodNumber;
        }, z.core.$strip>;
        type: z.ZodLiteral<"number">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            precision: z.ZodNumber;
        }, z.core.$strip>;
        type: z.ZodLiteral<"percent">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            precision: z.ZodNumber;
            symbol: z.ZodString;
        }, z.core.$strip>;
        type: z.ZodLiteral<"currency">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            durationFormat: z.ZodEnum<{
                "h:mm": "h:mm";
                "h:mm:ss": "h:mm:ss";
                "h:mm:ss.S": "h:mm:ss.S";
                "h:mm:ss.SS": "h:mm:ss.SS";
                "h:mm:ss.SSS": "h:mm:ss.SSS";
            }>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"duration">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"multilineText">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"phoneNumber">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            color: z.ZodEnum<{
                greenBright: "greenBright";
                tealBright: "tealBright";
                cyanBright: "cyanBright";
                blueBright: "blueBright";
                purpleBright: "purpleBright";
                pinkBright: "pinkBright";
                redBright: "redBright";
                orangeBright: "orangeBright";
                yellowBright: "yellowBright";
                grayBright: "grayBright";
            }>;
            icon: z.ZodEnum<{
                star: "star";
                heart: "heart";
                thumbsUp: "thumbsUp";
                flag: "flag";
                dot: "dot";
            }>;
            max: z.ZodNumber;
        }, z.core.$strip>;
        type: z.ZodLiteral<"rating">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"richText">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            fieldIdInLinkedTable: z.ZodOptional<z.ZodString>;
            isValid: z.ZodOptional<z.ZodBoolean>;
            recordLinkFieldId: z.ZodOptional<z.ZodString>;
            referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            result: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"rollup">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"singleLineText">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"email">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"url">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            choices: z.ZodArray<z.ZodObject<{
                color: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"externalSyncSource">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            prompt: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                field: z.ZodObject<{
                    fieldId: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>]>>>;
            referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"aiText">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            linkedTableId: z.ZodString;
            viewIdForRecordSelection: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"multipleRecordLinks">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            choices: z.ZodArray<z.ZodObject<{
                color: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"singleSelect">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            choices: z.ZodArray<z.ZodObject<{
                color: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"multipleSelects">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        type: z.ZodLiteral<"singleCollaborator">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        type: z.ZodLiteral<"multipleCollaborators">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            dateFormat: z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<{
                    l: "l";
                    LL: "LL";
                    "M/D/YYYY": "M/D/YYYY";
                    "D/M/YYYY": "D/M/YYYY";
                    "YYYY-MM-DD": "YYYY-MM-DD";
                }>>;
                name: z.ZodEnum<{
                    local: "local";
                    friendly: "friendly";
                    us: "us";
                    european: "european";
                    iso: "iso";
                }>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        type: z.ZodLiteral<"date">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodObject<{
            dateFormat: z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<{
                    l: "l";
                    LL: "LL";
                    "M/D/YYYY": "M/D/YYYY";
                    "D/M/YYYY": "D/M/YYYY";
                    "YYYY-MM-DD": "YYYY-MM-DD";
                }>>;
                name: z.ZodEnum<{
                    local: "local";
                    friendly: "friendly";
                    us: "us";
                    european: "european";
                    iso: "iso";
                }>;
            }, z.core.$strip>;
            timeFormat: z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<{
                    "h:mma": "h:mma";
                    "HH:mm": "HH:mm";
                }>>;
                name: z.ZodEnum<{
                    "12hour": "12hour";
                    "24hour": "24hour";
                }>;
            }, z.core.$strip>;
            timeZone: z.ZodAny;
        }, z.core.$strip>;
        type: z.ZodLiteral<"dateTime">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodOptional<z.ZodObject<{
            isReversed: z.ZodBoolean;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"multipleAttachments">;
    }, z.core.$strip>]>>>;
}, z.core.$strip>;
export declare const UpdateTableArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CreateFieldArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    nested: z.ZodObject<{
        field: z.ZodIntersection<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<"autoNumber">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"barcode">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"button">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                color: z.ZodEnum<{
                    greenBright: "greenBright";
                    tealBright: "tealBright";
                    cyanBright: "cyanBright";
                    blueBright: "blueBright";
                    purpleBright: "purpleBright";
                    pinkBright: "pinkBright";
                    redBright: "redBright";
                    orangeBright: "orangeBright";
                    yellowBright: "yellowBright";
                    grayBright: "grayBright";
                }>;
                icon: z.ZodEnum<{
                    check: "check";
                    xCheckbox: "xCheckbox";
                    star: "star";
                    heart: "heart";
                    thumbsUp: "thumbsUp";
                    flag: "flag";
                    dot: "dot";
                }>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"checkbox">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"createdBy">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                result: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    options: z.ZodObject<{
                        dateFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                l: "l";
                                LL: "LL";
                                "M/D/YYYY": "M/D/YYYY";
                                "D/M/YYYY": "D/M/YYYY";
                                "YYYY-MM-DD": "YYYY-MM-DD";
                            }>;
                            name: z.ZodEnum<{
                                local: "local";
                                friendly: "friendly";
                                us: "us";
                                european: "european";
                                iso: "iso";
                            }>;
                        }, z.core.$strip>;
                    }, z.core.$strip>;
                    type: z.ZodLiteral<"date">;
                }, z.core.$strip>, z.ZodObject<{
                    options: z.ZodObject<{
                        dateFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                l: "l";
                                LL: "LL";
                                "M/D/YYYY": "M/D/YYYY";
                                "D/M/YYYY": "D/M/YYYY";
                                "YYYY-MM-DD": "YYYY-MM-DD";
                            }>;
                            name: z.ZodEnum<{
                                local: "local";
                                friendly: "friendly";
                                us: "us";
                                european: "european";
                                iso: "iso";
                            }>;
                        }, z.core.$strip>;
                        timeFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                "h:mma": "h:mma";
                                "HH:mm": "HH:mm";
                            }>;
                            name: z.ZodEnum<{
                                "12hour": "12hour";
                                "24hour": "24hour";
                            }>;
                        }, z.core.$strip>;
                        timeZone: z.ZodAny;
                    }, z.core.$strip>;
                    type: z.ZodLiteral<"dateTime">;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"createdTime">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                isValid: z.ZodBoolean;
                recordLinkFieldId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"count">;
        }, z.core.$strip>, z.ZodAny, z.ZodObject<{
            options: z.ZodObject<{
                isValid: z.ZodBoolean;
                referencedFieldIds: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodNull]>;
                result: z.ZodUnion<readonly [z.ZodObject<{
                    options: z.ZodObject<{
                        dateFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                l: "l";
                                LL: "LL";
                                "M/D/YYYY": "M/D/YYYY";
                                "D/M/YYYY": "D/M/YYYY";
                                "YYYY-MM-DD": "YYYY-MM-DD";
                            }>;
                            name: z.ZodEnum<{
                                local: "local";
                                friendly: "friendly";
                                us: "us";
                                european: "european";
                                iso: "iso";
                            }>;
                        }, z.core.$strip>;
                    }, z.core.$strip>;
                    type: z.ZodLiteral<"date">;
                }, z.core.$strip>, z.ZodObject<{
                    options: z.ZodObject<{
                        dateFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                l: "l";
                                LL: "LL";
                                "M/D/YYYY": "M/D/YYYY";
                                "D/M/YYYY": "D/M/YYYY";
                                "YYYY-MM-DD": "YYYY-MM-DD";
                            }>;
                            name: z.ZodEnum<{
                                local: "local";
                                friendly: "friendly";
                                us: "us";
                                european: "european";
                                iso: "iso";
                            }>;
                        }, z.core.$strip>;
                        timeFormat: z.ZodObject<{
                            format: z.ZodEnum<{
                                "h:mma": "h:mma";
                                "HH:mm": "HH:mm";
                            }>;
                            name: z.ZodEnum<{
                                "12hour": "12hour";
                                "24hour": "24hour";
                            }>;
                        }, z.core.$strip>;
                        timeZone: z.ZodAny;
                    }, z.core.$strip>;
                    type: z.ZodLiteral<"dateTime">;
                }, z.core.$strip>, z.ZodNull]>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"lastModifiedTime">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"lastModifiedBy">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                fieldIdInLinkedTable: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                isValid: z.ZodBoolean;
                recordLinkFieldId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                result: z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"lookup">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                precision: z.ZodNumber;
            }, z.core.$strip>;
            type: z.ZodLiteral<"number">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                precision: z.ZodNumber;
            }, z.core.$strip>;
            type: z.ZodLiteral<"percent">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                precision: z.ZodNumber;
                symbol: z.ZodString;
            }, z.core.$strip>;
            type: z.ZodLiteral<"currency">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                durationFormat: z.ZodEnum<{
                    "h:mm": "h:mm";
                    "h:mm:ss": "h:mm:ss";
                    "h:mm:ss.S": "h:mm:ss.S";
                    "h:mm:ss.SS": "h:mm:ss.SS";
                    "h:mm:ss.SSS": "h:mm:ss.SSS";
                }>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"duration">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"multilineText">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"phoneNumber">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                color: z.ZodEnum<{
                    greenBright: "greenBright";
                    tealBright: "tealBright";
                    cyanBright: "cyanBright";
                    blueBright: "blueBright";
                    purpleBright: "purpleBright";
                    pinkBright: "pinkBright";
                    redBright: "redBright";
                    orangeBright: "orangeBright";
                    yellowBright: "yellowBright";
                    grayBright: "grayBright";
                }>;
                icon: z.ZodEnum<{
                    star: "star";
                    heart: "heart";
                    thumbsUp: "thumbsUp";
                    flag: "flag";
                    dot: "dot";
                }>;
                max: z.ZodNumber;
            }, z.core.$strip>;
            type: z.ZodLiteral<"rating">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"richText">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                fieldIdInLinkedTable: z.ZodOptional<z.ZodString>;
                isValid: z.ZodOptional<z.ZodBoolean>;
                recordLinkFieldId: z.ZodOptional<z.ZodString>;
                referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
                result: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"rollup">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"singleLineText">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"email">;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"url">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                choices: z.ZodArray<z.ZodObject<{
                    color: z.ZodOptional<z.ZodString>;
                    id: z.ZodString;
                    name: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"externalSyncSource">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                prompt: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                    field: z.ZodObject<{
                        fieldId: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>]>>>;
                referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"aiText">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                linkedTableId: z.ZodString;
                viewIdForRecordSelection: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"multipleRecordLinks">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                choices: z.ZodArray<z.ZodObject<{
                    color: z.ZodOptional<z.ZodString>;
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"singleSelect">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                choices: z.ZodArray<z.ZodObject<{
                    color: z.ZodOptional<z.ZodString>;
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"multipleSelects">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            type: z.ZodLiteral<"singleCollaborator">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            type: z.ZodLiteral<"multipleCollaborators">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                dateFormat: z.ZodObject<{
                    format: z.ZodOptional<z.ZodEnum<{
                        l: "l";
                        LL: "LL";
                        "M/D/YYYY": "M/D/YYYY";
                        "D/M/YYYY": "D/M/YYYY";
                        "YYYY-MM-DD": "YYYY-MM-DD";
                    }>>;
                    name: z.ZodEnum<{
                        local: "local";
                        friendly: "friendly";
                        us: "us";
                        european: "european";
                        iso: "iso";
                    }>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            type: z.ZodLiteral<"date">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodObject<{
                dateFormat: z.ZodObject<{
                    format: z.ZodOptional<z.ZodEnum<{
                        l: "l";
                        LL: "LL";
                        "M/D/YYYY": "M/D/YYYY";
                        "D/M/YYYY": "D/M/YYYY";
                        "YYYY-MM-DD": "YYYY-MM-DD";
                    }>>;
                    name: z.ZodEnum<{
                        local: "local";
                        friendly: "friendly";
                        us: "us";
                        european: "european";
                        iso: "iso";
                    }>;
                }, z.core.$strip>;
                timeFormat: z.ZodObject<{
                    format: z.ZodOptional<z.ZodEnum<{
                        "h:mma": "h:mma";
                        "HH:mm": "HH:mm";
                    }>>;
                    name: z.ZodEnum<{
                        "12hour": "12hour";
                        "24hour": "24hour";
                    }>;
                }, z.core.$strip>;
                timeZone: z.ZodAny;
            }, z.core.$strip>;
            type: z.ZodLiteral<"dateTime">;
        }, z.core.$strip>, z.ZodObject<{
            options: z.ZodOptional<z.ZodObject<{
                isReversed: z.ZodBoolean;
            }, z.core.$strip>>;
            type: z.ZodLiteral<"multipleAttachments">;
        }, z.core.$strip>]>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const UpdateFieldArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    fieldId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CommentAuthorSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CommentReactionSchema: z.ZodObject<{
    emoji: z.ZodObject<{
        unicodeCharacter: z.ZodString;
    }, z.core.$strip>;
    reactingUser: z.ZodObject<{
        userId: z.ZodString;
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const CommentSchema: z.ZodObject<{
    id: z.ZodString;
    createdTime: z.ZodString;
    lastUpdatedTime: z.ZodNullable<z.ZodString>;
    text: z.ZodString;
    author: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    parentCommentId: z.ZodOptional<z.ZodString>;
    mentioned: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        emoji: z.ZodObject<{
            unicodeCharacter: z.ZodString;
        }, z.core.$strip>;
        reactingUser: z.ZodObject<{
            userId: z.ZodString;
            email: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const ListCommentsResponseSchema: z.ZodObject<{
    comments: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdTime: z.ZodString;
        lastUpdatedTime: z.ZodNullable<z.ZodString>;
        text: z.ZodString;
        author: z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        parentCommentId: z.ZodOptional<z.ZodString>;
        mentioned: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        reactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            emoji: z.ZodObject<{
                unicodeCharacter: z.ZodString;
            }, z.core.$strip>;
            reactingUser: z.ZodObject<{
                userId: z.ZodString;
                email: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    offset: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const CreateCommentArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    recordId: z.ZodString;
    text: z.ZodString;
    parentCommentId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListCommentsArgsSchema: z.ZodObject<{
    baseId: z.ZodString;
    tableId: z.ZodString;
    recordId: z.ZodString;
    pageSize: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListBasesResponse = z.infer<typeof ListBasesResponseSchema>;
export type BaseSchemaResponse = z.infer<typeof BaseSchemaResponseSchema>;
export type Base = z.infer<typeof BaseSchema>;
export type Table = z.infer<typeof TableSchema>;
export type Field = z.infer<typeof FieldSchema>;
export type Comment = z.infer<typeof CommentSchema>;
export type ListCommentsResponse = z.infer<typeof ListCommentsResponseSchema>;
export type FieldSet = Record<string, any>;
export type AirtableRecord = {
    id: string;
    fields: FieldSet;
};
export type ListRecordsOptions = {
    view?: z.infer<typeof ListRecordsArgsSchema.shape.view>;
    maxRecords?: z.infer<typeof ListRecordsArgsSchema.shape.maxRecords>;
    filterByFormula?: z.infer<typeof ListRecordsArgsSchema.shape.filterByFormula>;
    sort?: z.infer<typeof ListRecordsArgsSchema.shape.sort>;
};
export type IAirtableService = {
    listBases(): Promise<ListBasesResponse>;
    getBaseSchema(baseId: string): Promise<BaseSchemaResponse>;
    listRecords(baseId: string, tableId: string, options?: ListRecordsOptions): Promise<AirtableRecord[]>;
    getRecord(baseId: string, tableId: string, recordId: string): Promise<AirtableRecord>;
    createRecord(baseId: string, tableId: string, fields: FieldSet): Promise<AirtableRecord>;
    updateRecords(baseId: string, tableId: string, records: {
        id: string;
        fields: FieldSet;
    }[]): Promise<AirtableRecord[]>;
    deleteRecords(baseId: string, tableId: string, recordIds: string[]): Promise<{
        id: string;
    }[]>;
    createTable(baseId: string, name: string, fields: Field[], description?: string): Promise<Table>;
    updateTable(baseId: string, tableId: string, updates: {
        name?: string | undefined;
        description?: string | undefined;
    }): Promise<Table>;
    createField(baseId: string, tableId: string, field: Field): Promise<Field & {
        id: string;
    }>;
    updateField(baseId: string, tableId: string, fieldId: string, updates: {
        name?: string | undefined;
        description?: string | undefined;
    }): Promise<Field & {
        id: string;
    }>;
    searchRecords(baseId: string, tableId: string, searchTerm: string, fieldIds?: string[], maxRecords?: number, view?: string): Promise<AirtableRecord[]>;
    createComment(baseId: string, tableId: string, recordId: string, text: string, parentCommentId?: string): Promise<Comment>;
    listComments(baseId: string, tableId: string, recordId: string, pageSize?: number, offset?: string): Promise<ListCommentsResponse>;
};
export type IAirtableMCPServer = {
    connect(transport: Transport): Promise<void>;
};
