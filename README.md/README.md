# Gym Booking System – Mini Project

## 1. Problem Statement
Gymmet hanterar bokningar manuellt, vilket leder till osäkerhet om pass är fulla. Medlemmar vill boka pass enkelt online utan att behöva ringa eller stå i kö.  

**Lösning:**  
Ett webbaserat mini-system där medlemmar kan se tillgängliga pass och boka dem direkt, med tydlig feedback om bokningen lyckades eller om passet är fullt.

---

## 2. Stakeholders
- **Member** – bokar pass online.  
- **Admin** – skapar och hanterar pass (modell).  
- **Gym Owner** – vill ha överblick över bokningar.  
- **Guest** – kan se pass men inte boka.

---

## 3. Kravlista

### Funktionella krav (minst 5)
1. Visa en lista med tillgängliga pass.  
2. Medlem kan boka ett pass.  
3. Visa om ett pass är fullt.  
4. Admin kan skapa nytt pass (modell).  
5. Visa bokningsstatus efter klick.

### Icke-funktionella krav (minst 3)
6. Webbsidan ska vara responsiv.  
7. Semantisk HTML ska användas (header, nav, main, section, article, footer).  
8. Bokning ska ske utan omladdning (JS micro interaction).

---

## 4. Prioritering (MoSCoW)

**Must have:**  
- Visa pass, boka pass, visa status  

**Should have:**  
- Visa om pass är fullt, responsiv layout  

**Could have:**  
- Filterfunktion  

**Won’t have:**  
- Betalning, inloggning  

---

## 5. Use Case – Book Gym Class

**Actor:** Member  

**Preconditions:**  
- Pass finns i systemet.  
- Medlem är på bokningssidan.

**Main Flow:**  
1. Member öppnar passlistan.  
2. Klickar på **Book**.  
3. Systemet registrerar bokningen och uppdaterar UI.  
4. Bekräftelse visas.

**Alternate Flow:**  
- Om passet är fullt visas **Class Full**.

**Postconditions:**  
- Medlem är bokad.  
- Antal platser minskar.

---

## 6. Change Notes
1. Lade till “Spots left” som räknas ner när man bokar → tydligare feedback.  
2. Gjorde components.html för att visa alla UI-komponenter

---

## 7. UI-prototyp
- **index.html** – passlista med bokningsknappar.  
- **page2.html** – bokningsformulär med val av pass.  
- **components.html** – showcase av kort, knappar och formulär.  
- **style.css** – konsekvent design, spacing, typografi.  
- **script.js** – micro interaction för bokning.