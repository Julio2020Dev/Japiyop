export interface JobOptions {
    id:                             string;
    jobTitle:                       string;
    job_start_date:                 string;
    job_end_date:                   string;
    last_job:                       boolean;
    postiong:                       boolean;
    industry:                       string;
    job_center_name:                string;
    job_center_business:            string;
    employees_quantity:             string;
    employees_in_charge_quantity:   string;
    expertise:                      string;
    reference:                      Reference;
}

export interface Reference{
    id:                              string;
    work_reference_name:             string;
    work_reference_company_position: string;
    work_reference_last_boss:        string;
}
export interface Position{
    id:     string;
    name:   string
}

export interface ExperienceApplicant{
    id:              string;
    applicant:       string;
    work_experience: string;
}

  