//---------------------------------------------------
export interface UserOptions {
  id:          string;
  userName:     string;
  phoneNumber:  string;
  email:        string;
  password:     string;
  dni:          string;
  city:         string;
  district:     string;
  userPhoto:    string;
}
//---------------------------------------------------
export interface JobHunter{
  id:                     string;
  first_name:             string;
  last_name:              string;
  mobile_phone:           string;
  email:                  string;
  password:               string;
  identification_number:  string;
  date_of_birth:          string;
  location:               string;
  photo:                  string;
  reported:               string;
  company_logo:           string;
  company_name:           string;
  creed:                  string;
  presentation_video:     string;
  attention_schedule:     string;
  expertise:              string;
  show_to_applicants:     boolean;
  show_to_forum_contacts: boolean;
  applicant_messages:     any;
  requests:               any;
  liked_by_applicants:    any;
  forum_answers:          any;
  rating_avarage:         string;

}
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
export interface Applicant{
  id:                     string;
  first_name:             string;
  last_name:              string;
  mobile_phone:           string;
  password:               string;
  identification_number:  string;
  location:               string;
  photo:                  string;
  reported:               boolean;
  job_situation:          any;
  labor_availability:     any;
  available_date:         any;
  remote_work:            boolean;
  relocation:             boolean;
  work_experience:        any;
  languages:              any;
  show_to_job_hunters:    boolean;
  people_forum_text_me:   any;
  replies_forum:          any;
  forum_message:          any;
  job_hunters_messages:   any;
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
//---------------------------------------------------
export interface District{
  id:   string;
  city: string;
  name: string;
}

export interface City{
  id:   string;
  name: string;
}
//---------------------------------------------------
export interface Study{
  id:           string;
  profession:   any;
  institution:  string;
  degree:       string;
  start_date:   any;
  end_date:     any;
}

export interface Institution{
  id:   string;
  name: string;
}
export interface Degree{
  id:   string;
  name: string;
}
export interface StudyApplicant{
  id:         string;
  applicant:  string;
  study:      string;
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