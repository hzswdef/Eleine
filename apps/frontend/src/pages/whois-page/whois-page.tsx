import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@components/shadcn-ui/accordion.tsx";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@components/shadcn-ui/table.tsx";
import { Textarea } from "@components/shadcn-ui/textarea.tsx";
import { TypographyH1 } from "@components/shadcn-ui/typography.tsx";
import styles from "@pages/whois-page/whois-page.module.css";

const WhoisPage = () => {
	return (
		<div>
			<TypographyH1 className="mb-3">Whois</TypographyH1>

			<Textarea placeholder="Domains..." spellCheck="false" />

			<Accordion
				type="multiple"
				className="w-full"
				defaultValue={["NameCheap, Inc.", "MarkMonitor, Inc."]}
			>
				<AccordionItem value="NameCheap, Inc.">
					<AccordionTrigger className={styles.accordionTrigger}>
						<img
							className={styles.registrarLogo}
							src="http://www.namecheap.com/favicon.ico"
							alt="NameCheap, Inc."
						/>
						<span>NameCheap, Inc.</span>
					</AccordionTrigger>
					<AccordionContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className={styles.domainHead}>Domain</TableHead>
									<TableHead className={styles.registeredHead}>
										Registered
									</TableHead>
									<TableHead className={styles.expirationHead}>
										Expiration
									</TableHead>
									<TableHead>Status</TableHead>
									<TableHead className={styles.actionsHead}>Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-geist-mono font-medium">
										example.com
									</TableCell>
									<TableCell>08/10/2025</TableCell>
									<TableCell>08/10/2026</TableCell>
									<TableCell className="font-geist-mono">
										clientTransferProhibited
									</TableCell>
									<TableCell className={styles.actionsCell}>
										<button className={styles.actionsCellButton}>Lookup</button>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-geist-mono font-medium">
										namecheap.com
									</TableCell>
									<TableCell>08/11/2000</TableCell>
									<TableCell>08/11/2026</TableCell>
									<TableCell className="font-geist-mono">
										clientTransferProhibited, serverDeleteProhibited...
									</TableCell>
									<TableCell className={styles.actionsCell}>
										<button className={styles.actionsCellButton}>Lookup</button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="MarkMonitor, Inc.">
					<AccordionTrigger className={styles.accordionTrigger}>
						<img
							className={styles.registrarLogo}
							onError={event => {
								event.currentTarget.src =
									"data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNMTYgOGguMDEiIC8+CiAgPHBhdGggZD0iTTEyIDEyaC4wMSIgLz4KICA8cGF0aCBkPSJNOCAxNmguMDEiIC8+Cjwvc3ZnPgo=";
							}}
							src="http://www.markmonitor.com/favicon.ico"
							alt="MarkMonitor, Inc."
						/>
						<span>MarkMonitor, Inc.</span>
					</AccordionTrigger>
					<AccordionContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className={styles.domainHead}>Domain</TableHead>
									<TableHead className={styles.registeredHead}>
										Registered
									</TableHead>
									<TableHead className={styles.expirationHead}>
										Expiration
									</TableHead>
									<TableHead>Status</TableHead>
									<TableHead className={styles.actionsHead}>Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-geist-mono font-medium">
										google.com
									</TableCell>
									<TableCell>09/15/1997</TableCell>
									<TableCell>09/14/2028</TableCell>
									<TableCell className="font-geist-mono">
										clientTransferProhibited, clientUpdateProhibited...
									</TableCell>
									<TableCell className={styles.actionsCell}>
										<button className={styles.actionsCellButton}>Lookup</button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default WhoisPage;
