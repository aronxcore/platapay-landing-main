import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FormSection = 
  | "personal"
  | "business"
  | "location"
  | "packages"
  | "requirements"
  | "assessment"
  | "activation";

const ApplicationForm = () => {
  const [currentSection, setCurrentSection] = useState<FormSection>("personal");
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    
    // Business Experience
    businessName: "",
    yearsOfExperience: "",
    industryType: "",
    currentRole: "",
    
    // Business Location
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    
    // PlataPay Package
    selectedPackage: "",
    
    // Requirements
    businessLicense: false,
    taxId: "",
    bankAccount: "",
    
    // Assessment
    businessPlan: "",
    financialProjections: "",
    
    // System Activation
    preferredActivationDate: "",
    technicalContact: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Your application has been received and is being reviewed.",
    });
  };

  const renderPersonalInfo = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Please provide your personal details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
      </CardContent>
    </Card>
  );

  const renderBusinessExperience = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Business Experience</CardTitle>
        <CardDescription>Tell us about your business background</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="yearsOfExperience">Years of Experience</Label>
          <Input
            id="yearsOfExperience"
            name="yearsOfExperience"
            type="number"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="industryType">Industry Type</Label>
          <Select
            onValueChange={(value) => handleSelectChange("industryType", value)}
            value={formData.industryType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select industry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );

  const renderLocation = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Business Location</CardTitle>
        <CardDescription>Where will your business operate?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="streetAddress">Street Address</Label>
          <Input
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderPackages = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>PlataPay Business Packages</CardTitle>
        <CardDescription>Select your preferred package</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="selectedPackage">Package Type</Label>
          <Select
            onValueChange={(value) => handleSelectChange("selectedPackage", value)}
            value={formData.selectedPackage}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a package" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="starter">Starter Package</SelectItem>
              <SelectItem value="business">Business Package</SelectItem>
              <SelectItem value="enterprise">Enterprise Package</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );

  const renderRequirements = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Requirements & Signature</CardTitle>
        <CardDescription>Please provide required documentation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="taxId">Tax ID Number</Label>
          <Input
            id="taxId"
            name="taxId"
            value={formData.taxId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bankAccount">Bank Account Information</Label>
          <Input
            id="bankAccount"
            name="bankAccount"
            value={formData.bankAccount}
            onChange={handleInputChange}
            required
          />
        </div>
      </CardContent>
    </Card>
  );

  const renderAssessment = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Assessment & Approval</CardTitle>
        <CardDescription>Business plan and projections</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="businessPlan">Business Plan Summary</Label>
          <Textarea
            id="businessPlan"
            name="businessPlan"
            value={formData.businessPlan}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="financialProjections">Financial Projections</Label>
          <Textarea
            id="financialProjections"
            name="financialProjections"
            value={formData.financialProjections}
            onChange={handleInputChange}
            required
          />
        </div>
      </CardContent>
    </Card>
  );

  const renderActivation = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>System Activation</CardTitle>
        <CardDescription>Setup your activation details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="preferredActivationDate">Preferred Activation Date</Label>
          <Input
            id="preferredActivationDate"
            name="preferredActivationDate"
            type="date"
            value={formData.preferredActivationDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="technicalContact">Technical Contact Person</Label>
          <Input
            id="technicalContact"
            name="technicalContact"
            value={formData.technicalContact}
            onChange={handleInputChange}
            required
          />
        </div>
      </CardContent>
    </Card>
  );

  const sections: { id: FormSection; title: string; component: () => JSX.Element }[] = [
    { id: "personal", title: "Personal Information", component: renderPersonalInfo },
    { id: "business", title: "Business Experience", component: renderBusinessExperience },
    { id: "location", title: "Business Location", component: renderLocation },
    { id: "packages", title: "PlataPay Packages", component: renderPackages },
    { id: "requirements", title: "Requirements", component: renderRequirements },
    { id: "assessment", title: "Assessment", component: renderAssessment },
    { id: "activation", title: "Activation", component: renderActivation },
  ];

  const currentSectionIndex = sections.findIndex((section) => section.id === currentSection);

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSection(sections[currentSectionIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSection(sections[currentSectionIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Business Application Form</h1>
          <p className="mt-2 text-gray-600">Please complete all sections of the application</p>
        </div>

        <div className="flex justify-center space-x-4 overflow-x-auto py-4">
          {sections.map((section, index) => (
            <Button
              key={section.id}
              variant={currentSection === section.id ? "default" : "outline"}
              onClick={() => setCurrentSection(section.id)}
              className="whitespace-nowrap"
            >
              {index + 1}. {section.title}
            </Button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {sections.find((section) => section.id === currentSection)?.component()}

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentSectionIndex === 0}
            >
              Previous
            </Button>
            
            {currentSectionIndex === sections.length - 1 ? (
              <Button type="submit">Submit Application</Button>
            ) : (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;