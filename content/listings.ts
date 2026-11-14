/**
 * listings.ts: YOUR CATALOG (you edit this file in Session 1)
 *
 * Each { ... } block below is one card in your catalog. Change the values,
 * add a block, or delete one. Put matching pictures in public/images/ and set
 * image_url to "/images/your-file-name.png".
 *
 * Before Session 2, the catalog shows these listings directly. In Session 2 you
 * copy them into your database from the /setup page, and from then on the
 * catalog reads from the database.
 *
 * Fields:
 *   - slug:         short name used in the page address (lowercase-with-dashes)
 *   - category:     CONSULTING | WEB_DEV | CUSTOM_SOFTWARE
 *   - inquiry_type: DEMO | QUOTE | INQUIRE  (decides which contact form shows)
 *   - image_url:    "/images/" + a file name in public/images/ (lowercase, exact)
 *
 * Editing tips (so the file keeps working):
 *   - Change only the words between the double quotes " ".
 *   - Keep the quotes, the comma at the end of each line, and the + that joins
 *     long text across lines.
 *   - Apostrophes are fine ("We're open"). For a quote inside your text, use
 *     single quotes ("Our 'quick start' plan").
 *   - Every slug must be different. When you copy a block to add a listing,
 *     change its slug first. Two listings with the same slug open the same page.
 *   - Red error screen after saving? You probably deleted a quote or a comma.
 *     Press Ctrl+Z (Cmd+Z on Mac), save, and it comes back.
 */

export type ListingCategory = "CONSULTING" | "WEB_DEV" | "CUSTOM_SOFTWARE";

export type InquiryType = "DEMO" | "QUOTE" | "INQUIRE";

export interface Listing {
  /** Stable slug used in the detail page URL. */
  slug: string;
  title: string;
  category: ListingCategory;
  description: string;
  inquiry_type: InquiryType;
  /** Site-relative path under /images/ (file must exist in public/images/). */
  image_url: string;
}

export const listings: Listing[] = [
  {
    slug: "physical-exam-consulting",
    title: "Physical Exam Consulting",
    category: "CONSULTING",
    description:
      "Asses your physical health with us. " +
      "Book now!",
    inquiry_type: "INQUIRE",
    image_url: "/images/placeholder-consulting.svg",
  },
  {
    slug: "mental-health-consulting",
    title: "Mental Health Consulting",
    category: "CONSULTING",
    description:
      "Support your mental health journey with our expert consultants. " +
      "Book a session today.",
    inquiry_type: "CONSULTING",
    image_url: "/images/placeholder-web-dev.svg",
  },
  {
    slug: "emotional-wellness-consulting",
    title: "Emotional Wellness Consulting",
    category: "CONSULTING",
    description:
      "Work with our consultants to improve your emotional well-being and develop healthy coping strategies. " +
      "Book a session today.",
    inquiry_type: "DEMO",
    image_url: "/images/placeholder-custom-software.svg",
  },
];
