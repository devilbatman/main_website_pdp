import { redirect } from 'next/navigation';
import { TEMPLATE_GRATIS_PATH } from '@/data/freeResources';

export default function ResourcesRedirectPage() {
  redirect(TEMPLATE_GRATIS_PATH);
}
