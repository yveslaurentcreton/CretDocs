import type { CollectionEntry } from 'astro:content';

export type SoftwareEntry = CollectionEntry<'software'>;

/**
 * Get all unique tags from a collection of software entries
 */
export function getAllTags(entries: SoftwareEntry[]): string[] {
  const tagSet = new Set<string>();
  for (const entry of entries) {
    for (const tag of entry.data.tags ?? []) {
      tagSet.add(tag);
    }
  }
  return [...tagSet].sort();
}

/**
 * Get all entry slugs for quick lookup
 */
export function getEntrySlugs(entries: SoftwareEntry[]): Set<string> {
  return new Set(entries.map(e => e.id));
}

/**
 * Check if a tag references another entry (is a "linked" tag)
 */
export function isLinkedTag(tag: string, slugs: Set<string>): boolean {
  return slugs.has(tag);
}

/**
 * Separate tags into linked (reference other entries) and plain tags
 */
export function categorizeTags(
  tags: string[],
  slugs: Set<string>
): { linked: string[]; plain: string[] } {
  const linked: string[] = [];
  const plain: string[] = [];

  for (const tag of tags) {
    if (slugs.has(tag)) {
      linked.push(tag);
    } else {
      plain.push(tag);
    }
  }

  return { linked: linked.sort(), plain: plain.sort() };
}

/**
 * Get count of entries per tag
 */
export function getTagCounts(entries: SoftwareEntry[]): Map<string, number> {
  const counts = new Map<string, number>();

  for (const entry of entries) {
    for (const tag of entry.data.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return counts;
}

/**
 * Get entries that reference a specific slug (reverse lookup / "Used by")
 */
export function getUsedBy(slug: string, entries: SoftwareEntry[]): SoftwareEntry[] {
  return entries.filter(entry =>
    entry.data.tags?.includes(slug)
  ).sort((a, b) =>
    a.data.name.toLowerCase().localeCompare(b.data.name.toLowerCase())
  );
}

/**
 * Get entry by slug
 */
export function getEntryBySlug(
  slug: string,
  entries: SoftwareEntry[]
): SoftwareEntry | undefined {
  return entries.find(e => e.id === slug);
}

/**
 * Sort entries alphabetically by name
 */
export function sortByName(entries: SoftwareEntry[]): SoftwareEntry[] {
  return [...entries].sort((a, b) =>
    a.data.name.toLowerCase().localeCompare(b.data.name.toLowerCase())
  );
}
