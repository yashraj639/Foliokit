import { TemplateGallery } from "@/components/template-gallery";
import { templates } from "@/lib/templates";

export function TemplateShowcase() {
  return <TemplateGallery templates={templates} />;
}
