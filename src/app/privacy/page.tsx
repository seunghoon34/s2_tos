import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — S2",
};

export default function PrivacyPolicy() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last updated: February 9, 2025</p>

      <p>
        S2 (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates a
        video-based social application (the &quot;App&quot;). This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you use our App. Please read this policy carefully. By using S2, you
        agree to the collection and use of information in accordance with this
        policy.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        1. Information We Collect
      </h2>

      <h3 className="mt-6 text-lg font-medium">
        1.1 Information You Provide
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
        <li>
          <strong>Account information:</strong> email address and password used
          for authentication.
        </li>
        <li>
          <strong>Profile information:</strong> name, username, birthdate, bio,
          height, location, and lifestyle preferences.
        </li>
        <li>
          <strong>Media content:</strong> profile photos and video content you
          upload to the App.
        </li>
        <li>
          <strong>Messages:</strong> chat messages exchanged between you and
          other matched users.
        </li>
      </ul>

      <h3 className="mt-6 text-lg font-medium">
        1.2 Information Collected Automatically
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
        <li>
          <strong>Location data:</strong> we collect your location to match you
          with nearby users. You may disable location services in your device
          settings, but this may limit App functionality.
        </li>
        <li>
          <strong>Device information:</strong> device type, operating system,
          unique device identifiers, and general diagnostic data.
        </li>
        <li>
          <strong>Push notification tokens:</strong> used to deliver
          notifications to your device.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">
        2. How We Use Your Information
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
        <li>To create and manage your account.</li>
        <li>
          To match you with other users based on your profile and location.
        </li>
        <li>To enable messaging between matched users.</li>
        <li>To send push notifications about matches, messages, and updates.</li>
        <li>To enforce our Terms of Service and community guidelines.</li>
        <li>To improve and maintain the App.</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">
        3. Third-Party Services
      </h2>
      <p>We use the following third-party services:</p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
        <li>
          <strong>Supabase:</strong> provides our database, user authentication,
          and file storage infrastructure. Your data is stored on Supabase
          servers.
        </li>
        <li>
          <strong>Expo:</strong> used to deliver push notifications to your
          device.
        </li>
        <li>
          <strong>Google OAuth:</strong> available as an optional sign-in method.
          When you sign in with Google, we receive your name and email address
          from your Google account.
        </li>
      </ul>
      <p>
        These services have their own privacy policies, and we encourage you to
        review them.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        4. Data Sharing and Disclosure
      </h2>
      <p>
        We do not sell your personal information. We may share your information
        only in the following circumstances:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
        <li>
          <strong>With other users:</strong> your profile information, photos,
          and videos are visible to other users of the App as part of the
          matching and social features.
        </li>
        <li>
          <strong>Service providers:</strong> with the third-party services
          listed above, solely to operate the App.
        </li>
        <li>
          <strong>Legal requirements:</strong> if required by law, regulation, or
          legal process.
        </li>
        <li>
          <strong>Safety:</strong> to protect the rights, safety, or property of
          our users or the public.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">5. Data Storage</h2>
      <p>
        Your data is stored on Supabase servers. We implement reasonable
        security measures to protect your information, but no method of
        electronic storage is 100% secure.
      </p>

      <h2 className="mt-10 text-xl font-semibold">6. Age Requirement</h2>
      <p>
        You must be at least 18 years old to use S2. We do not knowingly collect
        information from anyone under 18. If we learn that we have collected
        personal information from a user under 18, we will delete that
        information promptly.
      </p>

      <h2 className="mt-10 text-xl font-semibold">
        7. Your Rights and Choices
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
        <li>
          <strong>Access and update:</strong> you can view and update your
          profile information at any time within the App.
        </li>
        <li>
          <strong>Delete your account:</strong> you can delete your account and
          all associated data directly from within the App. Once deleted, your
          data cannot be recovered.
        </li>
        <li>
          <strong>Location:</strong> you can disable location services through
          your device settings.
        </li>
        <li>
          <strong>Notifications:</strong> you can manage push notification
          preferences in your device settings.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">
        8. Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new policy on this page and updating the
        &quot;Last updated&quot; date. Your continued use of the App after
        changes constitutes acceptance of the updated policy.
      </p>

      <h2 className="mt-10 text-xl font-semibold">9. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
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
