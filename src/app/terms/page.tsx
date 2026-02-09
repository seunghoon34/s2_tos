import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — S2",
};

export default function TermsOfService() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
      <p className="text-sm text-gray-500">Last updated: February 9, 2025</p>

      <p>
        Welcome to S2. These Terms of Service (&quot;Terms&quot;) govern your
        use of the S2 application (the &quot;App&quot;). By creating an account
        or using the App, you agree to be bound by these Terms. If you do not
        agree, do not use the App.
      </p>

      <h2 className="mt-10 text-xl font-semibold">1. Eligibility</h2>
      <p>
        You must be at least 18 years old to use S2. By using the App, you
        represent and warrant that you are at least 18 years of age. If we
        discover that a user is under 18, we will terminate their account
        immediately.
      </p>

      <h2 className="mt-10 text-xl font-semibold">2. Your Account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account. You
        agree to provide accurate and complete information when creating your
        profile. You must not create fake profiles or impersonate any person.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        3. User-Generated Content
      </h2>
      <p>
        You are solely responsible for the content you post, upload, or share
        on the App, including profile photos, videos, bio text, and chat
        messages (&quot;User Content&quot;). By posting User Content, you grant
        S2 a non-exclusive, worldwide, royalty-free license to use, display,
        and distribute that content within the App for the purpose of operating
        and providing the service.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        4. Prohibited Conduct
      </h2>
      <p>You agree not to:</p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
        <li>
          <strong>Harass or bully</strong> other users. Any form of harassment,
          threats, intimidation, or bullying is strictly prohibited.
        </li>
        <li>
          <strong>Post hate speech</strong> or content that promotes
          discrimination, violence, or hatred against any individual or group
          based on race, ethnicity, religion, gender, sexual orientation,
          disability, or any other characteristic.
        </li>
        <li>
          <strong>Share inappropriate content,</strong> including sexually
          explicit material, graphic violence, or any content that is illegal or
          harmful.
        </li>
        <li>
          <strong>Spam or deceive</strong> other users, including sending
          unsolicited promotional messages or using the App for commercial
          purposes.
        </li>
        <li>
          <strong>Create fake profiles</strong> or impersonate another person.
        </li>
        <li>
          <strong>Attempt to exploit</strong> the App, including reverse
          engineering, scraping, or interfering with the App&apos;s
          infrastructure.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">
        5. Content Moderation and Removal
      </h2>
      <p>
        We reserve the right, but are not obligated, to review, monitor, and
        remove User Content at our sole discretion. We may remove any content
        that we determine violates these Terms or is otherwise objectionable. We
        are not responsible for any User Content posted by users of the App.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        6. Account Termination
      </h2>
      <p>
        We reserve the right to suspend or terminate your account at any time,
        with or without notice, for any reason, including but not limited to a
        violation of these Terms. You may also delete your account at any time
        from within the App. Upon termination, your right to use the App ceases
        immediately, and we may delete your data in accordance with our Privacy
        Policy.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        7. No Warranty
      </h2>
      <p>
        The App is provided on an &quot;as is&quot; and &quot;as available&quot;
        basis without warranties of any kind, either express or implied,
        including but not limited to implied warranties of merchantability,
        fitness for a particular purpose, and non-infringement. We do not
        warrant that the App will be uninterrupted, secure, or error-free.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        8. Limitation of Liability
      </h2>
      <p>
        To the maximum extent permitted by applicable law, S2 and its
        operators, officers, employees, and agents shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or
        any loss of profits or revenue, whether incurred directly or indirectly,
        or any loss of data, use, goodwill, or other intangible losses,
        resulting from:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
        <li>Your use of or inability to use the App.</li>
        <li>
          Any conduct or content of any other user of the App.
        </li>
        <li>
          Unauthorized access, use, or alteration of your content or
          information.
        </li>
        <li>
          Any interactions with other users, whether online or offline.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">
        9. Indemnification
      </h2>
      <p>
        You agree to indemnify, defend, and hold harmless S2 and its operators
        from and against any claims, liabilities, damages, losses, and expenses
        arising out of or in any way connected with your use of the App or
        violation of these Terms.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        10. Changes to These Terms
      </h2>
      <p>
        We may update these Terms from time to time. We will notify you of
        material changes by posting the updated Terms on this page and updating
        the &quot;Last updated&quot; date. Your continued use of the App after
        any changes constitutes acceptance of the new Terms.
      </p>

      <h2 className="mt-10 text-xl font-semibold">11. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a
          href="mailto:s2.shootyourshot@gmail.com"
          className="underline hover:text-black"
        >
          s2.shootyourshot@gmail.com
        </a>
        .
      </p>
    </article>
  );
}
