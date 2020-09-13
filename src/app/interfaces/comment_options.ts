export interface Comment{
    id:             string;
    job_hunter:     any;
    applicant:      any;
    reply:          any;
    response_of:    any;
}
export interface Likes{
    id:         string;
    applicant:  string;
    job_hunter: string;
    comment:    any;
}
export interface Report{
    id:             string;
    job_hunter:     string;
    applicant:      string;
    descriptions:   string;

}

export interface ForumPost{
    id:         string;
    title:      string;
    industry:   string;
    date:       any;
    comment:    any;
    report:     any;
}