
//--------------------Applicant-------------------------------
export interface Applicant{
  pk:                     string;
  user:                   User;
  mobile_phone:           string;
  identification_number:  string;
  location:               string;
  job_situation:          any;
  labor_availability:     any;
  available_date:         any;
  remote_work:            boolean;
  relocation:             boolean;
  show_to_job_hunters:    boolean;
  people_forum_text_me:   any;
  replies_forum:          any;
  forum_message:          any;
  job_hunters_messages:   any;
}
//------------- CATEGORY----------
export interface Category{
  pk:   string;
  name: string;
}
//------------- CITY--------------------------------------
export interface City{
  pk?:   string;
  name: string;
}
//------------- DISTRICT---------------------------------
export interface District{
  pk?:      string;
  city:     City;
  name:     string;
  city_id?: string
}
//------------- EXPERIENCEXAPPLICANT---------------------
export interface ExperienceXApplicant{
  id:              string;
  applicant:       string;
  work_experience: string;
}
//------------- INDUSTRY---------------------------------
export interface ExperienceXApplicant{
  pk?:  string;
  name: string;
}
//------------- JOBHUNTER-------------------------------
export interface JobHunter{
  pk?:                    string;
  user:                   User;
  company_logo:           string;
  creed:                  string;
  company_phone:          string;
  attention_schedule:     string;
  business_contact_name:  string;
  business_contact_phone: string;
  business_contact_position: string;
  business_name:          string;
  ruc:                    string;
  legal_representative_identification: string;
  legal_representative_name: string;
  tax_residence:          string;
  office_location:        string;
  pdf_presentation:       string;
  video_presentation:     string;
  annual_billing:         string;
  people_advised_total:   string;
  people_advised_2019:    string;
  people_advised_2018:    string;
  reported:               boolean;
  show_to_applicants:     boolean
  show_to_forum_contacts: boolean;
  applicant_messages:     any;
  requests:               any;
  liked_by_applicants:    boolean;
  forum_answers:          any;
  rating_avarage:         string;
}
//------------- STUDYXAPPLICATION---------------
export interface StudyApplicant{
  pk:         string;
  applicant:  Applicant;
  study:      Study;
}
//------------- POSITION------------------------
export interface Position{
  pk:     string;
  name:   string
}
//------------- TRENDING----------------------
export interface Trending{
  pk?:  string;
  name: string;
}

//------------- USER--------------------------
export interface User {
  pk?:          string;
  first_name:    string;
  username:     string;
  password:     string;
}
//---------------STUDY------------------------
export interface Study{
  id:           string;
  profession:   any;
  institution:  string;
  degree:       string;
  start_date:   any;
  end_date:     any;
}
//////////////===================//////////////
export interface JobHunterReview{
  id:         string;
  job_hunter: string;
  comment:    string;
  ranking:    string;
  appicant:   string;
}

export interface BlockedUser{
  id:         string;
  job_hunter: string;
  applicant:  string;
  timestamp:  any;

}

export interface Request{
  id:         string;
  job_hunter: string;
  applicant:  string;
  blocked:    any;
  date:       any;
}

export interface LastSeen{
  id:         string;
  job_hunter: string;
  applicant:  string;
  timestamp:  any;
}

export interface Favorite{
  id:         string;
  applicant:  string;
  job_hunter: string;
}

//---------------------------------------------------
export interface JobSituation{
  id:   string;
  name: string;
}
export interface LaborAvailablility{
  id:   string;
  name: string;
}
export interface Languages{
  id:           string;
  language:     string;
  certificate:  any;
}
export interface Language{
  id:     string;
  name:   string;
}





export interface Institution{
  id:   string;
  name: string;
}
export interface Degree{
  id:   string;
  name: string;
}

//---------------------------------------------------
export interface Proposal{
  id:                     string;
  user:                   string;
  applicant:              string;
  initial_payment_amount: any;
  final_payment_amount:   any;
  contract:               Contract;
}
export interface Contract{
  id:                       string;
  descriptions:             string;
  read_terms_conditions:    string;
  accept_terms_conditions:  string;
}
export interface Payment{
  id:       string;
  amount:   any;
  auth_id:  any;
  source:   any;
  timestamp:any;
}

export interface PaymentProposal{
  id:                 string;
  proposal:           Proposal;
  payment:            Payment;
  is_initial_payment: any;
  is_final_payment:   any;
}
//---------------------------------------------------
export interface WorkExperience {
  id:                             string;
  job_title:                       string;
  job_start_date:                 string;
  job_end_date:                   string;
  last_job:                       boolean;
  postion:                        boolean;
  industry:                       any;
  job_center_name:                string;
  job_center_business:            string;
  employees_quantity:             string;
  employees_in_charge_quantity:   string;
  expertise:                      string;
  reference:                      any;
  min_value:                      string;
  max_value:                      string;
  real_value:                     string; 
  bonus_value:                    string;
}
export interface Reference{
  id:                              string;
  work_reference_name:             string;
  work_reference_company_position: string;
  work_reference_last_boss:        string;
}



