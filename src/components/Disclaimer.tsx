
import React from 'react';
import { AlertCircle, Shield } from 'lucide-react';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 bg-cyberpunk-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading flex items-center justify-center gap-3">
          <Shield size={30} className="text-cyberpunk-secondary" />
          <span>Legal <span className="text-cyberpunk-secondary">Disclaimer</span></span>
        </h2>
        
        <div className="max-w-4xl mx-auto glass-panel p-8 border border-white/10">
          <div className="flex items-start gap-4">
            <AlertCircle size={24} className="text-cyberpunk-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-4">Terms of Use</h3>
              <p className="text-gray-300 mb-6">
                Music Melodies and Lessons GPT is an AI-powered educational tool designed to assist users in their musical learning journey. By using this service, you agree to the following terms and conditions.
              </p>
            
              <h4 className="text-lg font-semibold mb-2">Copyright Notice</h4>
              <p className="text-gray-300 mb-4">
                The lyrics, tablature, and other musical content provided through this service are intended for personal, educational use only. Users are responsible for complying with copyright laws in their jurisdiction. We do not claim ownership of any third-party musical content and provide this service solely for educational purposes.
              </p>
            
              <h4 className="text-lg font-semibold mb-2">Limitation of Liability</h4>
              <p className="text-gray-300 mb-4">
                AI WEB TOOLS LLC and its affiliates make no warranties, express or implied, regarding the accuracy, completeness, or reliability of the information provided. We shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this service.
              </p>
            
              <h4 className="text-lg font-semibold mb-2">Educational Purpose</h4>
              <p className="text-gray-300 mb-4">
                This service is designed for educational purposes only. The musical instruction, advice, and feedback provided are not a substitute for professional music education or medical advice related to vocal techniques or instrument usage. Users should exercise caution and consult professionals when necessary.
              </p>
            
              <h4 className="text-lg font-semibold mb-2">Data Usage</h4>
              <p className="text-gray-300 mb-4">
                By uploading audio files or other content to our service, you grant us a limited license to process and analyze this content solely for the purpose of providing feedback and assistance. We respect your privacy and handle all user content in accordance with our Privacy Policy.
              </p>
            
              <h4 className="text-lg font-semibold mb-2">Third-Party Services</h4>
              <p className="text-gray-300 mb-6">
                Our service may reference or link to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites or services and encourage users to review the terms and policies of such third parties.
              </p>
            
              <div className="mt-8 flex gap-4 flex-wrap">
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyberpunk-primary hover:underline"
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyberpunk-primary hover:underline"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
