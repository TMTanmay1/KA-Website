import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const TC = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // For responsive design

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Image section */}
      <Box 
        component="img" 
        src="https://i.postimg.cc/VNHzT1gC/Terms-and-Conditions-text-in-the-center-with-a-blue-shade-theme.jpg" // Using the correct image link
        alt="Terms and Conditions" 
        sx={{
          width: '100%', 
          maxHeight: '300px', 
          objectFit: 'cover',
          mb: 4
        }} 
      />

      {/* Content section */}
      <Paper sx={{ p: isMobile ? 2 : 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms & Conditions
        </Typography>

        <Typography variant="body1" paragraph>
          This document is an electronic record in terms of Information Technology Act, 2000 and rules 
          thereunder as applicable and the amended provisions pertaining to electronic records in various 
          statutes as amended by the Information Technology Act, 2000. This electronic record is generated 
          by a computer system and does not require any physical or digital signatures.
        </Typography>

        <Typography variant="body1" paragraph>
          This document is published in accordance with the provisions of Rule 3 (1) of the Information 
          Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and 
          regulations, privacy policy, and Terms of Use for access or usage of domain name https://www.
          krishnaacademybrp.in ('Website'), including the related mobile site and mobile application 
          (hereinafter referred to as 'Platform').
        </Typography>

        <Typography variant="body1" paragraph>
          The Platform is owned by KRISHNA ACADEMY, a company incorporated under the Companies 
          Act, 1956 with its registered office at Baruipur, SOUTH 24 PARGANAS, WEST BENGAL, 
          Kolkatta, India (hereinafter referred to as ‘Platform Owner’, 'we', 'us', 'our').
        </Typography>

        <Typography variant="body1" paragraph>
          Your use of the Platform and services and tools are governed by the following terms and 
          conditions (“Terms of Use”) as applicable to the Platform including the applicable policies which 
          are incorporated herein by way of reference. If You transact on the Platform, You shall be subject 
          to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, 
          You shall be contracting with the Platform Owner and these terms and conditions including the 
          policies constitute Your binding obligations, with Platform Owner. These Terms of Use relate to 
          your use of our website, goods (as applicable), or services (as applicable) (collectively, 'Services').
          Any terms and conditions proposed by You which are in addition to or which conflict with these 
          Any terms and conditions proposed by You which are in addition to or which conflict with these 
            Terms of Use are expressly rejected by the Platform Owner and shall be of no force or effect. 
            These Terms of Use can be modified at any time without assigning any reason. It is your 
            responsibility to periodically review these Terms of Use to stay informed of updates.
        </Typography>

        <Typography variant="body1" paragraph>
          For the purpose of these Terms of Use, wherever the context so requires ‘you’, 'your' or ‘user’ shall 
          mean any natural or legal person who has agreed to become a user/buyer on the Platform.
        </Typography>

        <Typography variant="body1" paragraph>
          ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR 
          AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, 
          SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING.
        </Typography>

        <Typography variant="body1" component="h2" sx={{ mt: 2 }}>
          The use of Platform and/or availing of our Services is subject to the following Terms of Use:
        </Typography>

        <Typography variant="body1" paragraph>
          1. To access and use the Services, you agree to provide true, accurate, and complete information 
          to us during and after registration, and you shall be responsible for all acts done through the 
          use of your registered account on the Platform.
        </Typography>

        <Typography variant="body1" paragraph>
          2. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, 
          timeliness, performance, completeness, or suitability of the information and materials offered 
          on this website or through the Services, for any specific purpose. You acknowledge that such 
          information and materials may contain inaccuracies or errors and we expressly exclude 
          liability for any such inaccuracies or errors to the fullest extent permitted by law.
        </Typography>

        <Typography variant="body1" paragraph>
          3. Your use of our Services and the Platform is solely and entirely at your own risk and 
          discretion for which we shall not be liable to you in any manner. You are required to 
          independently assess and ensure that the Services meet your requirements.
        </Typography>

        <Typography variant="body1" paragraph>
          4. The contents of the Platform and the Services are proprietary to us and are licensed to us. 
          You will not have any authority to claim any intellectual property rights, title, or interest in 
          its contents. The contents include and are not limited to the design, layout, look, and graphics.
        </Typography>

        <Typography variant="body1" paragraph>
          5. You acknowledge that unauthorized use of the Platform and/or the Services may lead to 
          action against you as per these Terms of Use and/or applicable laws.
        </Typography>

        <Typography variant="body1" paragraph>
          6. You agree to pay us the charges associated with availing the Services.
        </Typography>

        <Typography variant="body1" paragraph>
          7. You agree not to use the Platform and/ or Services for any purpose that is unlawful, illegal or 
          forbidden by these Terms, or Indian or local laws that might apply to you.
        </Typography>

        <Typography variant="body1" paragraph>
          8. You agree and acknowledge that the website and the Services may contain links to other third-party websites. On accessing these links, you will be governed by the terms of use, privacy policy, and other policies of such third-party websites. These links are provided for your convenience for further information.
        </Typography>

        <Typography variant="body1" paragraph>
          9. You understand that upon initiating a transaction for availing the Services, you are entering into a legally binding and enforceable contract with the Platform Owner for the Services.
        </Typography>

        <Typography variant="body1" paragraph>
        10. You shall indemnify and hold harmless Platform Owner, its affiliates, group companies (as 
applicable) and their respective officers, directors, agents, and employees, from any claim or 
demand, or actions including reasonable attorney's fees, made by any third party or penalty 
imposed due to or arising out of Your breach of this Terms of Use, privacy Policy and other 
Policies, or Your violation of any law, rules or regulations or the rights (including 
infringement of intellectual property rights) of a third party
        </Typography>

        <Typography variant="body1" paragraph>
        11. Notwithstanding anything contained in these Terms of Use, the parties shall not be liable for 
any failure to perform an obligation under these Terms if performance is prevented or 
delayed by a force majeure event.
        </Typography>


        <Typography variant="body1" paragraph>
          12. These Terms and any dispute or claim relating to them, or their enforceability, shall be governed by and construed in accordance with the laws of India.
        </Typography>

        <Typography variant="body1" paragraph>
          13. All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Kolkatta and West Bengal.
        </Typography>

        <Typography variant="body2" sx={{ mt: 4 }}>
          14. All concerns or communications relating to these Terms must be communicated to us using 
the contact information provided on this website

        </Typography>
      </Paper>
    </Container>
  );
};

export default TC;
