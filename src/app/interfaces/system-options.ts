export interface Category{
    id:     string;
    name:   string;
}
export interface Keyword{
    id:     string;
    name:   string;
}

export interface Date{
    id:     string;
    name:   string;
}
export interface Trending{
    id:     string;
    name:   string;
}

export interface FAQ{
    id:         string;
    question:   any;
    answer:     any;
}
export interface UsuagePolicies{
    id:             string;
    policy:         string;
    description:    string;
}
export interface TermOfConditions{
    id:      string;
    content: string;
}
export interface AppContract{
    id:                 string;
    info:               any;
    google_link_sheet:  string;
}