/*
  # Create Landing Page Content Management Tables

  1. New Tables
    - `sectors` - Business sectors/industries
    - `capabilities` - Security capabilities/services
    - `certifications` - Security certifications
    - `frameworks` - Compliance frameworks
    - `page_content` - Dynamic page content and copy

  2. Security
    - Enable RLS on all tables
    - Public read access for all content
    - Admin-only write access (future implementation)

  3. Features
    - Structured content storage for future dynamic rendering
    - Support for multiple certifications and frameworks
    - Extensible design for future content additions
*/

CREATE TABLE IF NOT EXISTS sectors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS capabilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  risk_statement text NOT NULL,
  description text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text DEFAULT 'Certifications',
  description text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS frameworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text DEFAULT 'Frameworks',
  description text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS page_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_section text NOT NULL,
  key text NOT NULL,
  value text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(page_section, key)
);

ALTER TABLE sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE capabilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE frameworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Sectors are publicly readable"
  ON sectors FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Capabilities are publicly readable"
  ON capabilities FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Certifications are publicly readable"
  ON certifications FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Frameworks are publicly readable"
  ON frameworks FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Page content is publicly readable"
  ON page_content FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO sectors (name, description, display_order) VALUES
  ('Finance', 'Regulated financial institutions', 1),
  ('SaaS', 'Cloud-native platforms', 2),
  ('Healthcare', 'HIPAA-compliant systems', 3),
  ('E-commerce', 'Payment processing systems', 4),
  ('Infrastructure', 'DevOps and cloud operations', 5)
ON CONFLICT DO NOTHING;

INSERT INTO capabilities (title, risk_statement, description, display_order) VALUES
  ('Infrastructure Hardening', 'Reduces lateral movement and persistence', 'Systematic hardening of cloud infrastructure, networks, and systems to eliminate common attack paths.', 1),
  ('Application Security Reviews', 'Reduces exploitability and data exposure', 'Deep code and architecture analysis to identify and remediate security vulnerabilities before production.', 2),
  ('Monitoring & Detection', 'Reduces dwell time and incident impact', 'Continuous threat monitoring and detection to identify compromises in hours, not months.', 3),
  ('Access & Identity Controls', 'Reduces credential abuse and unauthorized access', 'Zero-trust architecture and identity governance to prevent privilege escalation and lateral movement.', 4)
ON CONFLICT DO NOTHING;

INSERT INTO certifications (name, category, display_order) VALUES
  ('ISO 27001', 'Certifications', 1),
  ('SOC 2 Type II', 'Certifications', 2)
ON CONFLICT DO NOTHING;

INSERT INTO frameworks (name, category, display_order) VALUES
  ('NIST Cybersecurity Framework', 'Frameworks', 1),
  ('OWASP Top 10', 'Frameworks', 2),
  ('CIS Controls', 'Frameworks', 3)
ON CONFLICT DO NOTHING;

INSERT INTO page_content (page_section, key, value) VALUES
  ('hero', 'headline', 'Reducing Attack Surface Across Modern Infrastructure'),
  ('hero', 'subheading', 'Protect cloud infrastructure, APIs, internal tools, and data pipelines from modern security threats with precision-driven security architecture.'),
  ('hero', 'supporting_text', 'Preventing breaches before they become incidents through proactive threat detection and systematic hardening.'),
  ('trust', 'tagline', 'Trusted by teams operating in regulated and high-risk environments'),
  ('capabilities', 'heading', 'Systematic Risk Reduction'),
  ('proof', 'heading', 'Industry-Recognized Frameworks'),
  ('contact', 'heading', 'Discuss Your Security Requirements'),
  ('contact', 'subheading', 'Connect with our security team to explore how systematic risk reduction applies to your infrastructure.')
ON CONFLICT DO NOTHING;
