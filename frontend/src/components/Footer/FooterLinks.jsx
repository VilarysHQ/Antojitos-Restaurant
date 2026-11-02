import { motion } from "motion/react"

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function FooterLink({ href, children }) {
  return (
    <a href={href} className="group inline-flex w-fit items-center gap-2 text-[13px] leading-6 text-[#d8c7bd] transition-colors duration-200 hover:text-[#ffb400] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb400]">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb400] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">
        {children}
      </span>
    </a>
  )
}

export default function FooterLinks({ title, links, reduceMotion }) {
  return (
    <motion.div variants={reduceMotion ? undefined : itemVariants} className="min-w-0">
      <h3 className="mb-5 text-[14px] font-extrabold text-white">{title}</h3>
      <nav aria-label={title} className="flex flex-col gap-2.5">
        {links.map((link) => (
          <FooterLink key={link.id} href={link.href}>{link.label}</FooterLink>
        ))}
      </nav>
    </motion.div>
  )
}