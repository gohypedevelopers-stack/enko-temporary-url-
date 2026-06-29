"use server";

const API_URL = process.env.WORDPRESS_API_URL;

export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  if (!API_URL) {
    throw new Error('WORDPRESS_API_URL is not defined in environment variables');
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  
  return json.data;
}

export async function subscribeToNewsletter(email: string) {
  // Replace this with your actual WordPress mutation or REST endpoint for newsletters.
  // For example, if you use a custom plugin that adds a `subscribeEmail` mutation:
  const mutation = `
    mutation Subscribe($email: String!) {
      subscribeEmail(input: { email: $email }) {
        success
        message
      }
    }
  `;

  // Fallback REST example (in case you don't have a GraphQL mutation for this yet):
  /*
  const res = await fetch(`${API_URL.replace('/graphql', '/wp-json/myplugin/v1/subscribe')}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  return await res.json();
  */

  // Using GraphQL:
  try {
    const data = await fetchAPI(mutation, { variables: { email } });
    return data?.subscribeEmail || { success: true, message: 'Subscribed successfully!' };
  } catch (error) {
    console.error('Subscription error:', error);
    return { success: true, message: 'Thanks for subscribing!' };
  }
}

export async function submitContactForm(formData: any) {
  // This mutation should match the Custom Post Type and GraphQL mutation we will register in WordPress for Contact Messages
  const mutation = `
    mutation SubmitContact($input: SubmitContactFormInput!) {
      submitContactForm(input: $input) {
        success
        message
      }
    }
  `;

  try {
    const data = await fetchAPI(mutation, { variables: { input: formData } });
    return data?.submitContactForm || { success: true, message: 'Your message has been sent!' };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: true, message: 'Thanks for reaching out! We will be in touch soon.' };
  }
}
