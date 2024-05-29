import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const accordionList = [
  {
    title: "ПРАВИЛА ПОСЕЩЕНИЯ ДИЛЕРСКИХ ЦЕНТРОВ",
    content: `
	 	<p>Уважаемые посетители, ознакомьтесь пожалуйста с «Правилами посещения дилерского центра». Просим вас соблюдать «Правила посещения дилерского центра» для того, чтобы ваше пребывание было безопасным и максимально комфортным. Дилерские центры оборудованы системой видеонаблюдения, фиксирующей посетителей и их действия, с целью обеспечения порядка и безопасности посетителей.</p> <br/>
	 	<p>C целью безопасного и комфортного пребывания настоящие «Правила посещения дилерского центра» «Haval Motor Kazakhstan» регламентируют общий порядок поведения для всех посетителей в помещениях и/или на территории дилерских центров.</p> <br/>
		 <ol>
		 <li>В помещения дилерского центра посетители могут войти только через специально предназначенные и оборудованные входы/выходы и имеют возможность находиться только в часы работы (с учетом режима работы) дилерского центра;</li>
		 <li>Мы рекомендуем при визите в дилерский центр соблюдать требования предупреждающих знаков, указателей, разметок, инструкций или других обозначений;</li>
		 <li>Лично заботиться о своем здоровье/жизни и безопасности своего имущества. Убедительно просим вас не оставлять в помещениях и/или на территории дилерского центра, в демонстрационном автомобиле свои личные вещи, администрация дилерского центра не несет ответственности за оставленные вещи;</li>
		 <li>Вести себя таким образом, чтобы не ставить под угрозу себя и окружающих, не причинять вред, не нарушать права и законные интересы;</li>
		 <li>Убедительно просим смотреть за несовершеннолетними детьми во избежание совершения последними неосторожных действий, влекущих причинение вреда здоровью самого ребенка, ущерба имуществу дилерского центра, его работников, посетителей и иных лиц.</li>
		 <li>Учитывать и выполнять указания администрации дилерского центра, сотрудников охраны, уполномоченных лиц, обеспечивающих общественную безопасность; покинуть территорию дилерского центра в случае предъявления такого требования администрацией и/или сотрудником охраны или в случае срабатывании пожарной сигнализации и иных сигналов оповещения угрозы;</li>
		 <li>Соблюдать установленные требования пожарной, антитеррористической, общественной, санитарной безопасности и иные требования, предусмотренные законодательством Республики Казахстан в сфере обеспечения безопасности;</li>
		 <li>Немедленно информировать работников дилерского центра и/или сотрудников охраны дилерского центра о действиях и/или происшествиях, и/или обстоятельствах, которые являются/являлись причиной нанесения вреда здоровью, жизни, имуществу посетителя(-ей) или других лиц;</li>
		 <li>Курить только в специально для этого отведенных и обозначенных местах дилерского центра;</li>
		 <li>На автостоянке дилерского центра убедительно просим размещать транспортные средства в соответствии с требованиями и ограничениями оборудованных знаков. Велосипеды и самокаты необходимо оставлять только в местах, специально отведенных для таких целей;</li>
		 <li>Посетители дилерского центра должны соблюдать правила дорожного движения. Мы настоятельно просим не оставлять свои транспортные средства на местах для парковки на автостоянке дилерского центра на более длительное время, чем указано в графике работы дилерского центра. Администрация дилерского центра имеет право сообщить сотрудникам полиции о нарушителях правил дорожного движения.</li>
	  </ol>
	  `,
  },
  {
    title: "ПОСЕТИТЕЛЯМ ДИЛЛЕРСКОГО ЦЕНТРА НЕ РАЗРЕШАЕТСЯ",
    content: `
		 <ol>
			<li>Ставить под угрозу свое здоровье, жизнь или безопасность, а также здоровье, жизнь или безопасность окружающих;</li>
			<li>Оставлять несовершеннолетних детей без надзора взрослых;</li>
			<li>Создавать конфликтные ситуации, инициировать ссоры, драки, иные противоправные действия, принимать в них участие, проявлять агрессию к окружающим, совершать хулиганские действия, проявлять неуважение и допускать оскорбления в адрес других посетителей и работников дилерского центра;</li>
			<li>Бегать, прыгать, залезать на непредназначенные для этого конструкции или сооружения (перегородки, стены, барьеры и др.);</li>
			<li>В помещениях дилерского центра кататься на роликовых коньках, самокатах, велосипедах, скейтбордах, скутерах (гироскутерах), сегвеях и другой роликовой и колёсной технике, так как это небезопасно;</li>
			<li>Портить и/или ломать или иначе повреждать имущество дилерского центра и других посетителей;</li>
			<li>Входить в служебные помещения или в закрытые для посетителей помещения дилерского центра;</li>
			<li>Разбрасывать и оставлять мусор в помещениях и на территории дилерского центра;</li>
			<li>На территорию(-и) дилерского центра проносить, распивать алкогольные и слабоалкогольные напитки, употреблять любые наркотические средства, психотропные вещества, их аналоги и прекурсоры, оборот которых ограничен действующим законодательством Республики Казахстан;</li>
			<li>Заниматься бродяжничеством и(или) попрошайничеством на территории дилерского центра;</li>
			<li>В помещения дилерского центра заходить с животными, кроме собак-поводырей, а также животных, находящихся в специальных переносках;</li>
			<li>Приносить предметы, которые могут привести к возгоранию или взрыву (горючие и взрывчатые вещества, взрывчатки, амуниция и др.), кроме тех случаев, если упомянутые предметы были приобретены в дилерском центре;</li>
			<li>В помещениях или на территории дилерского центра предлагать приобрести косметические средства, сувениры, напитки, продукты питания, одежду, рекламную атрибутику и другие коммерческие товары и/или оказывать какие-либо услуги, за исключением тех услуг и товаров, которые оказываются/реализуются с согласия администрации дилерского центра;</li>
			<li>Без отдельного письменного разрешения администрации дилерского центра в помещениях или на территории дилерского центра раздавать рекламные листовки, брошюры, буклеты и/или другой информационный/рекламный материал;</li>
			<li>Организовывать какие-либо митинги, собрания и/или другие подобные мероприятия на территории дилерского центра;</li>
			<li>Организовывать рекламные акции, опросы, сбор подписей и/или другие акции, а также осуществлять другую деятельность, которая заранее в письменной форме не согласована с администрацией дилерского центра;</li>
			<li>Закрываться (в том числе, путем блокировки замков дверей), в салонах автомобилей, принадлежащих дилерскому центру, запускать двигатели на демонстрационных автомобилях, находящихся в помещениях дилерского центра;</li>
			<li>Осуществлять любительскую фото- и (или) видеосъемку, а также аудиозапись работников и других посетителей дилерского центра, без предварительного письменного согласия со стороны администрации дилерского центра и без согласия таких работников и посетителей, за исключением случаев, когда такая фото- и (или) видеосъемка осуществляется в рамках стандартов оказания услуг производителя (в том числе, при процедуре выдачи автомобиля); В помещениях и на территории дилерского центра нашим посетителям допускается производить фото- и (или) видеосъемку товаров (автомобилей, запасных частей, аксессуаров и тому подобное), прайс-листов, буклетов, каталогов, брошюр и тому подобных материалов, исключительно в личных целях, при условии соблюдения ограничений, установленных действующим законодательством Республики Казахстан;</li>
			<li>Посещать и (или) находиться на территории ремонтной зоны без сопровождения работников дилерского центра и без прохождения инструктажа по технике безопасности;</li>
			<li>Производить денежные расчеты за приобретенные товары (автомобили, запасные части, технические жидкости и тому подобное), оказанные услуги (выполненные работы) вне кассы дилерского центра;</li>
			<li>Осуществлять вознаграждение работнику (работникам) дилерского центра в виде денег (в любой форме), ценных бумаг, ссуд, услуг, оплаты развлечений, отдыха, транспортных и иных расходов;</li>
			<li>Парковать транспортные средства в местах, предназначенных для высадки/посадки пассажиров или в других целях.</li>
		 </ol>
	  `,
  },
  {
    title: "ПРАВИЛА ПОСЕЩЕНИЯ ДИЛЕРСКОГО ЦЕНТРА ВО ВРЕМЯ КАРАНТИННОГО РЕЖИМА",
    content: `
	  <ol>
		 <li>В помещениях дилерского центра установлены системы пожарной сигнализации, автоматические системы пожаротушения и аудиосистемы (далее – Системы), по которым транслируются аудио сообщения, то есть сообщения, информирующие, как должны себя вести посетители дилерского центра и/или другие третьи лица, если в дилерском центре случилась авария или сложилась другая чрезвычайная ситуация;</li>
		 <li>Отключать, заслонять или иначе ограничивать действие этих Систем строго запрещается. Заметив порчу этих Систем, необходимо немедленно сообщить работникам дилерского центра или работникам охраны дилерского центра;</li>
		 <li>При возникновении чрезвычайной ситуации в дилерском центре, например, в случае пожара или взрыва в помещениях дилерского центра, стихийных бедствий или катастрофических явлений (сильный ветер), диверсии или террористического акта, посетители дилерского центра обязаны соблюдать указания работников охраны дилерского центра, полиции, пожарно-спасательной службы и других служб или работников администрации дилерского центра;</li>
		 <li>Заметив очаг возгорания или дым, немедленно сообщить об этом работникам дилерского центра или охраны дилерского центра и пожарно-спасательной службе;</li>
		 <li>В случае обнаружения подозрительных предметов, оставленных без присмотра, взрывчатых, химических или радиоактивных веществ, немедленно сообщить об этом работникам дилерского центра или охраны дилерского центра. До прибытия работников охраны дилерского центра и/или другой службы огородить опасное место и самим не принимать никаких действий по локализации и обезвреживанию;</li>
		 <li>Администрация дилерского центра вправе немедленно, без предварительного предупреждения закрыть дилерский центр (или любую его часть), если возникает угроза безопасности, здоровью или жизни, имуществу работников, посетителей дилерского центра, включая пожар, взрыв, утечку газа и другую опасность, чтобы избежать возможного ущерба и вреда.</li>
	  </ol>
	`,
  },
  {
    title: "ПРАВИЛА ПОСЕЩЕНИЯ ДИЛЕРСКОГО ЦЕНТРА ВО ВРЕМЯ КАРАНТИННОГО РЕЖИМА",
    content: `
	  <ol>
		 <li>Рекомендуем по возможности осуществлять посещение дилерского центра без сопровождающих лиц, если не требуется специальное сопровождение;</li>
		 <li>Если у вас есть симптомы простудного заболевания и/или повышенная температура тела, то, пожалуйста, воздержитесь от посещения дилерского центра;</li>
		 <li>В целях вашей безопасности и профилактики от COVID-19 мы рекомендуем при визите в дилерский центр соблюдать социальное дистанцирование и обязательный масочный режим;</li>
		 <li>Также, мы просим вас воздержаться от рукопожатий. При входе в дилерский центр вы сможете продезинфицировать руки антисептическим средством и осуществить контроль температуры.</li>
	  </ol>
	`,
  },
  {
    title: "ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ",
    content: `
	  <ol>
		 <li>Настоящие «Правила посещения дилерского центра» являются обязательными условиями публичных договоров, заключаемых с дилерским центром (купли-продажи, оказания сервисных (ремонтных) услуг, поставки запасных частей и тому подобное), и распространяются на всех посетителей дилерских центров.</li>
		 <li>Фактом посещения дилерского центра посетитель соглашается с настоящими «Правилами посещения дилерского центра», принимает их и обязуется неукоснительно их соблюдать.</li>
		 <li>Сотрудники охраны дилерского центра вправе информировать/предупредить о нарушении «Правил посещения дилерского центра», попросить посетителей покинуть дилерский центр, а также принимать другие необходимые и законные меры, чтобы гарантировать безопасность работников и посетителей дилерского центра и/или других лиц, также безопасность их здоровья, жизни, имущества. За нарушения общественного порядка и «Правил посещения дилерского центра» предусмотрена ответственность в установленном законодательством порядке.</li>
		 <li>С настоящими «Правилами посещения дилерского центра» любой посетитель может ознакомиться на официальном сайте компании, клиентской зоне, ресепшен или зоне приемки дилерского центра.</li>
	  </ol>
	`,
  },
];

export const VisitorsAccordion = () => {
  return (
    <Container sx={{ padding: "50px 10px" }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontSize: "clamp(36px, 4vw, 52px)" }}
      >
        Информация для посетителей автосалона
      </Typography>
      <Box sx={{ marginTop: "40px" }}>
        {accordionList.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {item.title}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "20px 60px " }}>
              <Typography component="div" sx={{ textAlign: "justify" }}>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};
