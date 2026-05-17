'use client';

import { Activity, AlertOctagon, FileSearch, Server } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const criticalLines = [
  { level: 'critical', label: 'Rule: data-export-unusual', detail: 'akun svc-backup · 3 percobaan dalam 120s' },
  { level: 'high', label: 'Auth · multi-tenant API', detail: '429 dari subnet vendor #7' },
];

const monitoringLines = [
  { time: '12:41:02', msg: 'agent.connected · wazuh-agent-042 · kontrol heartbeat OK' },
  { time: '12:41:18', msg: 'decoders · syslog PDP-gateway · forwarder aktif' },
];

const auditLines = [
  { time: '12:38:55', actor: 'dpo@klien', action: 'policy.ack', resource: 'Retention Q3 2026' },
  { time: '12:39:41', actor: 'security@klien', action: 'access.review', resource: 'Prod DB read-only' },
];

export default function MonitoringStackPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
      <FadeIn delay={0.08} direction="none">
        <div className="card-premium overflow-hidden p-0 shadow-card ring-1 ring-slate-200/80">
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Activity className="h-4 w-4" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Alert kritis &amp; pemantauan</p>
                <p className="text-[10px] text-slate-500">Log terpusat · jejak audit · korelasi kejadian</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              Live
            </span>
          </div>

          <div className="grid gap-0 border-b border-slate-100 sm:grid-cols-3">
            <div className="border-slate-100 p-4 sm:border-r">
              <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-rose-600">
                <AlertOctagon className="h-3.5 w-3.5" />
                Critical
              </div>
              <ul className="space-y-2 font-mono text-[10px] leading-snug text-slate-700">
                {criticalLines.map((row) => (
                  <li key={row.label} className="rounded-md bg-rose-50/80 px-2 py-1.5 ring-1 ring-rose-100">
                    <span className="font-semibold text-rose-800">{row.level}</span>
                    <span className="text-slate-600"> · {row.label}</span>
                    <p className="mt-0.5 text-[9px] text-slate-500">{row.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-slate-100 p-4 sm:border-r">
              <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-600">
                <Server className="h-3.5 w-3.5" />
                Monitoring log
              </div>
              <ul className="space-y-2 font-mono text-[10px] leading-snug text-slate-600">
                {monitoringLines.map((row) => (
                  <li key={row.time} className="border-l-2 border-brand-200 pl-2">
                    <span className="text-slate-400">{row.time}</span> {row.msg}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700">
                <FileSearch className="h-3.5 w-3.5" />
                Audit log
              </div>
              <ul className="space-y-2 font-mono text-[10px] leading-snug text-slate-600">
                {auditLines.map((row) => (
                  <li key={`${row.time}-${row.action}`} className="rounded-md bg-slate-50 px-2 py-1.5">
                    <span className="text-slate-400">{row.time}</span>{' '}
                    <span className="font-medium text-slate-800">{row.actor}</span> {row.action} ·{' '}
                    <span className="text-slate-500">{row.resource}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="px-4 py-3 text-[10px] leading-relaxed text-slate-500">
            Ilustrasi postur visibilitas. Kami membantu merancang dan mendokumentasikan alur serupa—alert
            kritis, agregasi log, serta{' '}
            <span className="font-medium text-slate-700">audit trail</span> yang dapat ditunjukkan ke
            regulator dan mitra. Set referensi umum mencakup stack terbuka seperti{' '}
            <span className="font-medium text-slate-800">Wazuh</span> (SIEM/XDR) untuk korelasi dan retensi
            log.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
