import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";
import Introduction from "../pages/Introduction";
import StudyAbroad from "../pages/StudyAbroad";
import Ielts from "../pages/Ielts";
import Pte from "../pages/Pte";
import Sat from "../pages/Sat";
import TestPreparation from "../pages/TestPreparation";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import Events from "../pages/Events";
import Blog_Events from "../pages/Blog_Events";
import UserDashboard from "../Userdashboard/UserDashboard";
import UserProfile from "../Userdashboard/UserProfile";
import SignUp from "../auth/SignUp";
import Landing from "../Userdashboard/Landing";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../admin/AdminDashboard";
import AddBlogs from "../admin/AddBlogs";
import AddEvents from "../admin/AddEvents";
import BlogForm from "../admin/BlogForm";
import AppointmentDetails from "../admin/AppointmentDetails";
import EventForm from "../admin/EventForm";
import InquiryDetails from "../admin/InquiryDetails";
import Login from "../auth/Login";
import AddUserForm from "../admin/AddUserForm";
import Permissions from "../admin/Permissions";
import Roles from "../admin/Roles";
import OurServices from "../pages/OurServices";
import CountryDetails from "../pages/CountryDetails";
import SpecificCountry from "../components/SpecificCountry";
import HomePageMgmt from "../admin/HomePageMgmt";
import BannerForm from "../forms/BannerForm";
import HomeFaqForm from "../forms/HomeFaqForm";
import WelcomeSectionForm from "../forms/WelcomeSectionForm";
import SummaryForm from "../forms/SummaryForm";
import AboutPage from "../admin/AboutPage";
import TeamEditForm from "../admin/TeamEditForm";
import TestimonialForm from "../forms/TestimonialForm";
import OurServicesForm from "../forms/OurServicesForm";
import ServicesPage from "../admin/ServicesPage";
import Destination_Page from "../admin/Destination_Page";
import CountryInfoForm from "../admin/CountryInfoForm";
import University_Form from "../forms/University_Form";
import BestProgramsForm from "../forms/BestProgramsForm";
import ScholarshipsForm from "../forms/ScholarshipsForm";
import AboutUsIntro from "../forms/AboutUsIntro";
import OurGoalsForm from "../forms/OurGoalsForm";
import WhyChooseUs from "../forms/WhyChooseUs";
import KeyFactsForm from "../forms/KeyFactsForm";
import RequirementsForm from "../forms/RequirementsForm";
import AdminContact from "../admin/AdminContact";
import StudyAbroadPage from "../admin/StudyAbroadPage";
import AbroadChooseUs from "../forms/AbroadChooseUs";
import WhyAbroadForm from "../forms/WhyAbroadForm";
import SuccessStoriesForm from "../forms/SuccessStoriesForm";
import TestPrepPage from "../admin/TestPrepPage";
import TestViewForm from "../forms/TestViewForm";
import HowtoRegister from "../forms/HowtoRegister";
import TestFaqForm from "../forms/TestFaqForm";
import TestFormatForm from "../forms/TestFormatForm";
import GreatService from "../forms/GreatService";
import OfferServiceForm from "../forms/OfferServiceForm";
import Notification from "../admin/Notification";
import TestScoreForm from "../forms/TestScoreForm";
import TestScoresForm from "../forms/TestScoreForm";

export const MainRouter=createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<UserLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="introduction" element={<Introduction/>}/>
            <Route path="abroad" element={<StudyAbroad/>}/>
            <Route path="countryinfo" element={<CountryDetails/>}>
            <Route index element={<SpecificCountry/>}/>
            </Route>
            <Route path="test" element={<TestPreparation/>}>
                <Route path="ielts" element={<Ielts/>}/>
                <Route  path="pte" element={<Pte/>}/>
                <Route  path="sat" element={<Sat/>}/>
            </Route>
            <Route path="services" element={<OurServices/>}/>

            <Route element={<Blog_Events/>}>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="events" element={<Events/>}/>
            </Route>
            <Route path="contactus" element={<ContactUs/>}/>
            <Route path="userdashboard" element={<UserDashboard/>}>
            <Route index element={<Landing/>}/>
            <Route path="userprofile" element={<UserProfile/>}/>
            </Route>
            </Route>
            <Route path="admin" element={<AdminLayout/>}>
            <Route index element={<AdminDashboard />} />
            <Route path="addblogs" element={<AddBlogs />} />
            <Route path="notifications" element={<Notification/>} />
            <Route path="blogform" element={<BlogForm />} />
            <Route path="inquirydetails" element={<InquiryDetails />} />
            <Route path="addevents" element={<AddEvents />} />
            <Route path="eventform" element={<EventForm />} />
            <Route path="appointment" element={<AppointmentDetails />} />
            <Route path="createuser" element={<AddUserForm />} />       
            <Route path="permissions" element={<Permissions />} />       
            <Route path="roles" element={<Roles />} />       
            <Route path="home-page" element={<HomePageMgmt />}>
            <Route index element={<BannerForm/>}/>
            <Route path="banner_form" element={<BannerForm/>}/>
            <Route path="welcome_form" element={<WelcomeSectionForm/>}/>
            <Route path="home_faq" element={<HomeFaqForm/>}/>
            <Route path="summary_form" element={<SummaryForm/>}/>
            </Route>
            <Route path="about-page" element={<AboutPage/>}>
            <Route index element={<AboutUsIntro/>}/>
            <Route path="our_goal" element={<OurGoalsForm/>}/>
            <Route path="choose_us" element={<WhyChooseUs/>}/>
            <Route path="team_form" element={<TeamEditForm/>}/>
            <Route path="testimonial_form" element={<TestimonialForm/>}/>

            </Route>  
            <Route path="abroad_page" element={<StudyAbroadPage/>}>
            <Route index element={<AbroadChooseUs/>}/>
            <Route path="whyabroad_form" element={<WhyAbroadForm/>}/>
            <Route path="success_form" element={<SuccessStoriesForm/>}/>
            </Route>
            <Route path="testprep_page" element={<TestPrepPage/>}>
              <Route index element={<TestViewForm/>}/> 
              <Route path="test_register" element={<HowtoRegister/>}/> 
              <Route path="test_scores" element={<TestScoresForm/>} /> 
              <Route path="test_faq" element={<TestFaqForm/>} /> 
              <Route path="test_format" element={<TestFormatForm/>} /> 
            </Route>
            <Route path="service_page" element={<ServicesPage/>}>
                <Route index element={<OurServicesForm/>}/>
                <Route path="great_service" element={<GreatService/>}/>
                <Route path="service_offer" element={<OfferServiceForm/>}/>
            </Route>     
            <Route path="destination_page" element={<Destination_Page/>}>
                <Route index element={<CountryInfoForm/>}/>
                <Route path="key_facts" element={<KeyFactsForm/>}/>
                <Route path="university_form" element={<University_Form/>}/>
                <Route path="programs_form" element={<BestProgramsForm/>}/>
                <Route path="scholarship_form" element={<ScholarshipsForm/>}/>
                <Route path="country_faq" element={<RequirementsForm/>}/>
            </Route>
            <Route path="admin-contact" element={<AdminContact/>}/>     
            </Route>
        </Route>
    )
)