/**
 * Analytics In-Memory Store
 * Professional Data Storage mit Persistence Support
 */

import { AnalyticsEvent } from '@/types/analytics';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

class AnalyticsStore {
  private events: AnalyticsEvent[] = [];
  private readonly maxEvents = 10000; // Keep last 10k events in memory
  private readonly storageDir = path.join(process.cwd(), '.analytics');
  private readonly storageFile = path.join(this.storageDir, 'events.json');
  private persistenceInterval: NodeJS.Timeout | null = null;

  constructor() {
    this.loadFromDisk();
    this.startPersistence();
  }

  /**
   * Add new analytics event
   */
  async addEvent(event: Omit<AnalyticsEvent, 'id' | 'timestamp'>): Promise<AnalyticsEvent> {
    const newEvent: AnalyticsEvent = {
      ...event,
      id: this.generateId(),
      timestamp: new Date().toISOString(),
    };

    this.events.push(newEvent);

    // Keep only last maxEvents
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    return newEvent;
  }

  /**
   * Get all events
   */
  getEvents(filter?: {
    type?: AnalyticsEvent['type'];
    startDate?: string;
    endDate?: string;
    city?: string;
    service?: string;
  }): AnalyticsEvent[] {
    let filtered = [...this.events];

    if (filter) {
      if (filter.type) {
        filtered = filtered.filter(e => e.type === filter.type);
      }
      if (filter.startDate) {
        filtered = filtered.filter(e => e.timestamp >= filter.startDate!);
      }
      if (filter.endDate) {
        filtered = filtered.filter(e => e.timestamp <= filter.endDate!);
      }
      if (filter.city) {
        filtered = filtered.filter(e => e.city === filter.city);
      }
      if (filter.service) {
        filtered = filtered.filter(e => e.service === filter.service);
      }
    }

    return filtered;
  }

  /**
   * Get events count
   */
  getCount(filter?: Parameters<typeof this.getEvents>[0]): number {
    return this.getEvents(filter).length;
  }

  /**
   * Clear all events
   */
  clearEvents(): void {
    this.events = [];
    this.persistToDisk();
  }

  /**
   * Generate unique ID
   */
  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Load events from disk
   */
  private async loadFromDisk(): Promise<void> {
    try {
      if (existsSync(this.storageFile)) {
        const data = await readFile(this.storageFile, 'utf-8');
        this.events = JSON.parse(data);
        console.log(`✅ Loaded ${this.events.length} analytics events from disk`);
      }
    } catch (error) {
      console.error('❌ Failed to load analytics from disk:', error);
      this.events = [];
    }
  }

  /**
   * Persist events to disk
   */
  private async persistToDisk(): Promise<void> {
    try {
      // Ensure directory exists
      if (!existsSync(this.storageDir)) {
        await mkdir(this.storageDir, { recursive: true });
      }

      await writeFile(this.storageFile, JSON.stringify(this.events, null, 2));
    } catch (error) {
      console.error('❌ Failed to persist analytics to disk:', error);
    }
  }

  /**
   * Start automatic persistence
   */
  private startPersistence(): void {
    // Save every 5 minutes
    this.persistenceInterval = setInterval(() => {
      this.persistToDisk();
    }, 5 * 60 * 1000);
  }

  /**
   * Stop persistence
   */
  stopPersistence(): void {
    if (this.persistenceInterval) {
      clearInterval(this.persistenceInterval);
      this.persistenceInterval = null;
    }
  }
}

// Singleton instance
let storeInstance: AnalyticsStore | null = null;

export function getAnalyticsStore(): AnalyticsStore {
  if (!storeInstance) {
    storeInstance = new AnalyticsStore();
  }
  return storeInstance;
}

export { AnalyticsStore };

