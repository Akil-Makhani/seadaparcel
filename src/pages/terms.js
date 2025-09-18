import { motion, useScroll } from "framer-motion";

const TERMS_TEXT = `
1. Definitions
In these conditions:

1.1. “the Act” means the Contract and Commercial Law Act 2017, as modified from time to time.

1.2. “Carrier” means the regional franchisee, courier franchisee, or sub-contractor that has agreed to provide carriage services in respect of the Goods as specified from time to time.

1.3. “Customer” means the individual or entity being either the shipper, consignor, owner of the goods, consignee, receiver, or their authorised agent who has engaged the Carrier to provide the Services.

1.4. “Goods” means the items provided by the Customer for carriage by the Carrier or otherwise in relation to the provision of the Services.

1.5. “Parcel Connect Agent” means the agent of the Carrier, at whose premises the Carrier may leave the Goods for collection by the Receiver.

1.6. “Services” means the services provided by the Carrier in connection with the carriage of the Goods including (without limitation), the carriage, storage, loading, unloading, packing, unpacking, freight forwarding, and all other services relating to the transport and/or storage of the Goods plus any incidental services as defined in the Act.

1.7. “Perishable Items” means goods of a perishable nature, refrigerated items, and/or items which need to be delivered within a limited time span, such as meat, fish, vegetables, fruits, agricultural items (e.g., bees and flowers including cut flowers).

1.8. “Safe Place” means somewhere out of the public eye, a dry, secure, and easily accessible location for the Carrier (e.g., at the back door or in the letterbox if the parcel is small enough to fit without force).

1.9. “Artwork” means collectables, antiques, paintings, sculpture, or other works of art.

1.10. “Personal Effects” means privately owned items, which are used/second-hand and usually worn/carried on the person, such as clothing and jewellery, and objects imbued with sentimental significance.

2. Interpretation
Words denoting the singular include the plural and vice versa; any gender includes the other gender; and persons include corporations and bodies politic and include their legal personal representatives and assigns.

3. Application of the Act
3.1. Sections 193, 248-253, 259 and 260, and 274-275 of the Act shall apply to these Conditions only to the extent that they extend or enlarge the Carrier’s rights and powers under these Conditions. Section 260 is modified by clause 12 of these Conditions, and Sections 274 and 275 are modified by clause 18 of these Conditions, and the relevant sections shall, in relation to any matter arising out of the provisions of those sections, have effect subject to the express terms contained hereunder.

3.2. No person has any authority from the Carrier to waive or vary these Conditions unless such waiver or the variation is in writing and signed by the Carrier (if a natural person) or an executive officer of the Carrier.

3.3. The terms of any other documentation with the Customers shall not diminish or negate the application of these Conditions to the provision of the Services.

3.4. All rights and limitations of liability in these Conditions shall continue in full force and effect notwithstanding any breach of these Conditions.

4. Sub-contractors
4.1. The Carrier and any Sub-contractor may sub-contract, on such terms as they think fit, the whole or any part of the services.

4.2. Every exemption, limitation, or condition contained in these conditions and every right, power, authority, exemption from liability, defense, and immunity applicable to the Carrier or to which the Carrier is entitled shall also be available to and extend to protect:

4.2.1. Any Sub-contractors,

4.2.2. Every Agent, servant, or officer of the Carrier and every Sub-contractor,

4.2.3. Every other person by whom any part of the services is performed, and

4.2.4. All persons who are or may be vicariously liable for the acts or omissions of any of these persons in (4.2.1), (4.2.2), or (4.2.3) and/or the Carrier, and for the purpose of this clause the Carrier is or shall be deemed to be acting as an agent or trustee on behalf of each such persons who shall to that extent be deemed to be parties to this contract of carriage.

5. Ownership of Goods
The Customer expressly warrants to the Carrier that the Customer is the owner or the authorised agent of the owner of the Goods and is authorised to and does accept these Conditions not only for the Customer but also for and on behalf of all other persons who are or may hereafter become interested in the goods.

6. Insurance
Insurance of the Goods is the sole responsibility of the Customer, not the Carrier.

7. Differentiation of Services
The Customer acknowledges that the Carrier offers a range of different products and services, which collectively form the Service. Those services include:

7.1. Authority to Leave Service – the Goods are automatically authorised to be left in a deemed safe place, as reasonably determined by the Carrier. If no safe place is determined, the Carrier will deliver the Goods to the nearest Parcel Connect Agent for collection by the receiving Customer.

7.2. Signature on Delivery – the Carrier will attempt to obtain a signature when delivering the Goods. If a signature cannot be obtained, the Carrier will deliver the Goods to the nearest Parcel Connect Agent for collection by the receiving Customer.

7.3. Secure Pin Service – the Carrier will attempt to obtain a PIN from the receiver when delivering the Goods. If the receiver cannot enter the PIN into the scanning device for any reason, the Carrier will deliver the Goods back to the local Aramex depot. The goods will not be left unattended. Further arrangements are to be made for:
a. The Receiver to collect Goods from the depot OR
b. The Receiver to arrange redelivery.

7.4. Parcel Connect – Services sold through Parcel Connect are automatically authorized to be left in a deemed safe place as reasonably determined by the Carrier. No attempt to obtain a signature will be made.

8. The Customer Warranties
8.1. The Customer warrants that:

8.1.1. It or the person who tenders the Goods for carriage has the authority to deliver the Goods to the Carrier and sign any consignment note or other documentation relating to the Services. The Customer accepts that once the Goods are provided to the Carrier or a payment is made, or a credit is uploaded, these Conditions are binding upon it.

8.1.2. Where the sending Customer is not the owner of the Goods, it warrants it has full authority to act as agent of the owner of the Goods, or any other person having an interest in the Goods for all purposes in connection with the carriage of the Goods by the Carrier under these conditions and indemnifies and shall keep indemnified the Carrier in respect of all liability whatsoever or howsoever arising (including without limitation any loss or damage caused by the Goods during the provision of the Services by the Carrier or caused from the negligent or wilful act or default of any third party) in connection with the Goods.

8.1.3. It has complied with all laws and regulations relating to the nature, packaging, labelling, and carriage of the goods, and that the goods are packed in a manner to withstand the ordinary risks associated with the Services and the Linehaul trucking operation having regard to the nature of the goods. Goods that do not comply with all laws and regulations and which are insufficiently packaged by the Customer, shall not be covered by any limited liability compensation scheme available to the Carrier. Packaging requirements can be found on the carrier’s website.

8.1.4. The accuracy of all markings, branding, and labelling of the goods, descriptions, value, and other particulars furnished to the Carrier for carriage, customs, consular, or any other purpose, and indemnifies and shall keep indemnified the Carrier against all loss, damage, expense, and fines arising from any inaccuracy or omission in that respect.

8.1.5. The Customer acknowledges that if it does not comply with these Conditions, the Carrier may charge an additional fee to facilitate compliance of these Conditions and also acknowledges that the Carrier reserves the right not to carry any non-compliant Goods.

8.1.6. It has complied and shall comply with all requirements of any Act, Regulation or otherwise, and specifically (without limiting the generality of the foregoing) section 70G of the Transport Act 1962, all IATA regulations for items offered for carriage by air, other provisions of the Transport Act 1962 relating to the transportation of hazardous substances, the Hazardous Substances and New Organisms Act 1996, and the Land Transport Rule: Dangerous Goods 2005 (Rule 45001).

8.1.7. It has complied with and shall continue to comply with the Prohibited Items Policy and Firearms Policy listed on the Carrier’s website.

8.1.8. If sending items internationally, it will comply with all laws, regulations, and the Terms & Conditions in relation to international consignments available on the Carrier’s website.

9. Delivery
9.1. The Carrier is authorized to deliver the Goods to the address nominated by the Customer, and the Carrier may release the Goods to any person who presents himself to the Carrier as the Customer, its agent, or accepts the Goods on behalf of the Customer.

9.2. The Carrier shall be conclusively presumed to have delivered the Goods in accordance with these Conditions if the Carrier:

9.2.1. Can provide a GPS pin drop in relation to the delivery of the Goods at the address listed on the consignment or, if applicable, obtains a receipt or signature confirming receipt of the Goods.
9.2.2. Obtains a signature or signed delivery sheet acknowledging receipt from any person who presents themselves to the Carrier as the Customer or its agent or are otherwise authorized to accept the Goods on the Customer’s behalf.
9.2.3. Delivers the Goods at the address given by the Customer without obtaining a signature, where the Consignor has purchased a non-signature service.
9.2.4. Is provided with a written or electronic Authority to Leave (ATL or eATL), either permanent or per consignment, allowing delivery without signature.
9.2.5. In the case of perishables, physically deposits the Goods at the address given by the Customer.
9.3. The Customer acknowledges that any delivery address outside of the Aramex (New Zealand) network will attract a surcharge inclusive of on-forwarder costs.

9.4. If the nominated place of delivery is unattended at the time of delivery attempt (and there is no ATL or eATL in place), or if delivery cannot otherwise be effected, the Carrier may, without obligation, store the Goods at the risk and expense of the Customer, so that:

9.4.1. The Carrier may attempt one more re-delivery of the Goods from the place of storage.
9.4.2. At the Customer’s direction, deliver the Goods to an alternate address provided by the Customer, for an additional fee.
9.4.3. Deliver the Goods to a Parcel Connect Agent and leave a calling card at the delivery address, notifying the Customer to collect the Goods from the relevant Parcel Connect Agent.
9.4.4. Request that the Customer attend the Carrier’s premises to collect the Goods.
9.4.5. If neither re-delivery nor pick-up by the Customer is effected within 7 days from the first delivery attempt, the Carrier may return the Goods to the sending Customer.
9.5. Where Goods are collected or consigned for collection, the Carrier may release the Goods to any person who presents themselves as the receiving Customer, its agent, or are otherwise authorized, and the Carrier shall be conclusively presumed to have delivered the Goods in accordance with these Conditions if the Carrier obtains a receipt, declaration, or signature from that person.

9.6. The Customer acknowledges that delivery to a rural address (as defined by Aramex (New Zealand)) will attract an additional fee and be handled as follows:

9.6.1. If a rural delivery label is placed on the Goods, they will be delivered to a rural contractor’s depot or agent for further delivery.
9.6.2. Goods will be delivered to the nearest Aramex (New Zealand) depot or agent for delivery by them.
9.7. Any damage or loss of Goods delivered outside the Aramex (New Zealand) network, including rural delivery, is not covered by Aramex (New Zealand). The Customer must address any claims in accordance with the rural delivery agent’s terms.

9.8. In all cases, no electronic signature or signed delivery sheet will be obtained for rural deliveries.

9.9. Goods left for later inspection will be conclusively deemed to have been delivered in accordance with these Conditions.

10. Variable Fuel Rate (VFR)
10.1. The Carrier charges a Variable Fuel Rate (VFR) as per the formula listed on the Carrier’s website at www.aramex.co.nz/tools/additional-fees-and-charges/.

10.2. The VFR applies to all Services and is non-refundable or transferable.

10.3. For any under-ticketed Goods, the VFR will apply to the additional fee that would have been applicable if the Goods were correctly charged.

11. Under-declared Items and Invoicing
11.1. The Customer must accurately declare the dead and cubic weight for all Goods and not under-declare these values.

11.2. The Carrier will charge the greater of an item’s dead or cubic weight.

11.3. The Customer must ensure that correct labels, satchels, and electronic labels are used.

11.4. If the Carrier detects under-declared Goods, it will apply the correct charges and raise an invoice for the difference, which must be paid immediately. The Carrier will also charge a fuel allowance and administrative fee.

11.5. The Carrier reserves the right not to provide Services until the correct amount for the carriage is paid.

12. Responsibility for Charges
12.1. The Customer is responsible for paying all charges, including card charges, fuel rates, administrative fees, and third-party costs.

12.2. The Carrier’s charges, including variable fuel rates and third-party costs, are deemed fully earned as soon as the Goods are picked up, received, or accepted by or on behalf of the Carrier and are immediately payable.

12.3. All charges are non-refundable and must be paid in accordance with the Carrier’s payment terms.

12.4. The Customer cannot offset, defer, or withhold payment due to any claims against the Carrier.

12.5. The Customer is liable for any legal fees or collection costs incurred to recover outstanding charges.

12.6. Prepaid labels, dynamic labels, electronic labels, and satchels are non-transferable and non-refundable. Payment is due immediately.

12.7. The Carrier reserves the right to review charges and introduce surcharges to cover service costs, with 30 days’ notice provided to the Customer.

13. Lien
The Carrier shall have a lien on the Goods (and any documents relating to the Goods) and any other items (and any documents relating thereto) of the Customer in the custody or control of the Carrier for any monies owing to the Carrier by the Customer whether in connection with the carriage of Goods or otherwise. The Carrier may sell the Goods or any of those items by public auction or private treaty without further notice to the Customer or any other person having an interest in them towards satisfaction of that obligation and all costs incurred by the Carrier for storage, cartage or in relation to the sale, including legal costs on a full indemnity basis. Any such sale shall not prejudice or extinguish the right of the Carrier to recover all the monies to which the Carrier may be entitled. The Carrier will use reasonable endeavours to obtain market value for the Goods and any additional proceeds of sale, after the Carrier has deducted its fees and costs, will be paid to the Customer. Any unsold portion of the Goods will be returned to the Customer at their sole expense.

14. Nature of Goods
14.1 It is the Customer’s responsibility to ensure that the Goods fit the Carrier’s freight profile. Any Goods that are outside of the Carrier’s freight profile may be refused at pick-up and a futile pick-up fee may be charged to the Customer, reflective of the additional time and associated cost incurred by the Carrier.

14.2 The Customer shall not tender for carriage or storage:

14.2.1 Any Goods with a deadweight of more than 25kg or a cubic weight of more than 40kg or a length of more than 2.4m (inclusive of packaging) or such other dead or cubic weight or length as advised by the Carrier in writing prior to acceptance of the Goods or whereby the destination is deemed rural by the Carrier, the deadweight or cubic weight cannot exceed 25kg and the maximum length cannot exceed 1.5m.

14.2.2 Any volatile spirits, explosive goods or goods which are or may become dangerous, inflammable or offensive (including radioactive materials) without also presenting a full description disclosing the nature of the Goods or Dangerous Goods to the Carrier. The Customer is liable for all loss, damage, or destruction caused by the Dangerous Goods. The Carrier is entitled to refuse to accept for carriage any Dangerous Goods or, if accepted, without the nature of the Dangerous Goods being fully disclosed to the Carrier, to notify the sending Customer that it must arrange for collection of the Dangerous Goods at its cost once the nature of the Dangerous Goods is discovered by the Carrier.

If, in the reasonable opinion of the Carrier, the Goods are or are liable to become dangerous, flammable, offensive, explosive, or of a volatile nature, or otherwise likely to cause damage to property or persons, the Carrier may take any steps reasonably necessary to protect persons and property and render the Dangerous Goods harmless, including but not limited to the destruction, disposal, or abandonment of the Goods at the cost of the Customer, and without prejudice to the Carrier’s rights to its charges under these Conditions. The Carrier will not be required to pay any compensation to the Customer in respect of any such action taken, including the loss or damage of the Dangerous Goods.

14.2.3 Goods which may damage or become liable to damage any property whatsoever without providing to the Carrier a full description disclosing the nature of the Goods, and in any event shall be liable for all loss, damage, or destruction caused thereby (including any fines or other penalties incurred by the Carrier under any law).

14.3 The Customer will indemnify and keep indemnified the Carrier from and against all actions, suits, costs, damages, claims, proceedings, or injunctions made or brought against the Carrier, including any fines or other penalties imposed upon the Carrier following any prosecution, arising out of the carriage, storage, spillage, escape, destruction, disposal, or abandonment of any Goods referred to in clauses 12.1 and 12.2 or arising out of the actions of the Customer contrary to the provisions of clause 8.1.6.

14.4 The Carrier does not accept for carriage livestock, vehicle windscreens, ceramics, porcelain, cash or other similar valuables, antiques, memorabilia, personal effects (privately owned items such as clothing and jewellery normally worn or carried on the person), works of art (including paintings, sculptures, photography), and any such items consigned are carried wholly at the risk of the Customer without any obligation being accepted in respect thereof by the Carrier. Goods of this type consigned by the Customer via the Carrier shall not be covered by any limited liability compensation scheme available to the Carrier. If the Customer requires insurance cover for these Goods, it must take out its own coverage at its cost.

14.4.1 The Carrier will accept for carriage perishables, second-hand motor vehicle and engine parts, surfboards, snowboards, skis, and jewellery (including watches, gems, medallions, precious metals, and stones) on the following conditions:

14.4.2 Items of a perishable nature will be covered only in the case of damage where the damage has been caused by mistreatment by the Carrier or total loss. There will be no obligation accepted for items that have perished due to transit time whether outside advertised transit times or not.

14.4.3 Second-hand motor vehicle parts will be covered in cases of loss only. There will be no obligations accepted for any kind of damage sustained to the items.

14.4.4 Jewellery (including watches, gems, medallions, precious metals, and stones) will be covered providing that there is sufficient evidence of the value of the item at the time of shipping (for example, a TradeMe auction listing, purchase receipt, etc.).

14.4.5 Surfboards, snowboards, skis, and the like will be claimable for loss only, and no claims will be entertained for damage of any kind.

14.4.6 Framing glass and mirrors will be covered provided that the Customer ensures that the Goods are sufficiently packaged, with at least manufacturer’s packaging to protect the Goods; otherwise, the Goods shall not be covered.

14.4.7 Vouchers, tickets, and coupons will be covered providing that there is sufficient evidence of the value of the item at the time of shipping (a TradeMe auction listing, purchase receipt, etc.).

15. Prohibited Items
15.1 The Carrier has the sole discretion to declare certain items as Prohibited Items, which it does not carry under any circumstances. The list of Prohibited Items is available on the Carrier’s website, which may be amended from time to time. The Customer must regularly review the list of Prohibited Items to ensure it does not attempt to send any such items through the Aramex (New Zealand) network.

15.2 If the Customer attempts to send any Prohibited Items via the Aramex (New Zealand) network, the Carrier has the right to refuse pick-up or delivery of that item. The Carrier has the sole discretion to either return the item(s) to the Customer at the Customer’s sole expense, which will include a freight handling fee plus the applicable freight charges, or require the sending Customer to pick the freight up from the depot.

15.3 The Customer will indemnify and keep indemnified the Carrier from and against all actions, suits, costs, damages, claims, proceedings, or injunctions made or brought against the Carrier, including any fines or other penalties imposed upon the Carrier for any reason in relation to the transportation of any Prohibited Items.

16. Firearms and Ammunition
16.1 The Carrier has strict policies in relation to the transportation of firearms and ammunition. If the Customer wishes to arrange the transport of such items, it must strictly comply with the Firearms policy available on the Carrier’s website, which may be amended from time to time. The Customer must regularly review the Carrier’s Firearms policy to ensure strict compliance before arranging the transportation of any firearms or ammunition with the Carrier.

16.2 The Carrier has the sole discretion to refuse to pick up or deliver any firearms or ammunition, and for any reason. The Customer must comply with all reasonable requests by the Carrier in relation to the transportation of such items and complete any documentation or provide evidence of all valid licences and other evidence as requested by the Carrier.

16.3 If the Carrier does not wish to transport any firearms or ammunition, the Carrier has the sole discretion to either return the item(s) to the Customer at the Customer’s sole expense, which will include a freight handling fee plus the applicable freight charges, or require the sending Customer to pick the freight up from the depot in accordance with the Firearms policy.

16.4 The Customer will indemnify and keep indemnified the Carrier from and against all actions, suits, costs, damages, claims, proceedings, or injunctions made or brought against the Carrier, including any fines or other penalties imposed upon the Carrier for any reason in relation to the transportation of firearms or ammunition.

17. Performance of Services
17.1. The Customer may request that the Carrier provides the Services in a particular way (whether in relation to means of carriage, place of storage, or otherwise). Whilst the Carrier may agree to take reasonable steps to comply with such requests, it reserves the right to provide the Services in the way it reasonably considers appropriate in the circumstances.

17.2. The Customer authorises any Services to be provided in accordance with the route of carriage or place of storage (if any) as the Carrier may, in its absolute discretion, deem appropriate or necessary.

18. Additional Fees and Charges
18.1. Customers should refer to the Carrier’s website in relation to any additional fees or charges that may be applicable in relation to the Services.

18.2. Additional fees or charges may include, but are not limited to:

18.2.1. Parcel or satchel consignments that have an incorrect service code may incur a freight handling charge in addition to the correct service code fee (if applicable).

18.2.2. In the event that the Carrier has to reprint a label, or manually generate a label to enable delivery, an additional charge may apply.

18.2.3. Duplicate labels (being labels showing barcodes used for previous consignments) should not be used. In the event that the Carrier is required to replace a duplicate label, a duplicate label fee may apply in addition to the correct freight charge.

18.2.4. Accurate consignment data is due on the day of dispatch before the Goods are collected. If consignment data is not provided by this time, or if that data is inaccurate, an additional fee may apply.

18.2.5. All goods should be labelled with accurate pickup and delivery addresses. In the event that inaccurate and/or insufficient address details have been supplied, an additional fee may apply and any agreed service level agreement between the parties is void for the item(s) concerned.

18.2.6. Incomplete consignments at the time of the arranged pickup may incur an incomplete consignment fee.

18.2.7. If the Goods are returned to sender, a freight handling fee per consignment plus the applicable freight charges may apply.

18.2.8. Redirection fees may apply to all consignments which the Carrier is requested to undertake.

18.2.9. Any credit note request for uncancelled consignments will incur a cancellation fee per consignment that will be deducted from the credit note.

18.2.10. The Customer shall pay any charge for demurrage at the rate charged to the Carrier directly or indirectly by any railway or shipping authority or other person.

The Customer acknowledges that any of the above charges are not a penalty, but a true measure of the additional costs incurred by the Carrier.

19. Ownership
The Customer acknowledges that the business of the Carrier is owned and operated independently from that of Fastway Couriers (NZ) Limited, its subsidiaries, parent and related entities, successors, servants, officers, agents (“Fastway Couriers (NZ)”), and other operators (including Regional Franchisees, Courier Franchisees, sub-contractors and all other owner/drivers) in the Aramex (New Zealand) network, and that the Customer shall have no right of action whatsoever against Fastway Couriers (NZ) or any of its franchisees other than the actual Carrier arising out of the carriage of Goods pursuant to this contract of carriage.

20. Export control and customs
20.1. The Customer authorises the Carrier to act as the Customer’s agent for export control and customs purposes and to complete all documents as may be necessary or desirable in connection with the provision of the services on any terms provided that the Carrier shall not be liable to act as the Customer’s agent in this respect.

20.2. The Carrier may (but without obligation to do so) advance any duties, taxes, imports, outlays, or charges at any port or place in respect of the goods, and the Customer shall on demand pay any amounts so paid by the Carrier.

21. Enforceability
All rights, powers, authorities, immunities, and limitations of liability in these conditions shall continue to have full force and effect in all circumstances and notwithstanding any breach of these conditions or negligence of any person entitled to the benefit of these conditions or any of their respective agents, servants, or officers.

22. Indemnity
The Customer indemnifies and shall keep indemnified the Carrier, its agents, servants, and officers in respect of all liabilities arising from any breach of these conditions by the Customer or the provision of the service except for liabilities expressly assumed by the Carrier under these conditions.

23. Limitation of Liability
23.1. This contract for carriage is at limited carrier’s risk, and subject to the provisions of the Act imposing liability in respect of the loss of or damage to the Goods. Subject to the following sub-clauses, the Carrier is not liable for:

23.1.1. injury or damage to or destruction or loss of the Goods or any other property arising out of or incidental to the provision of the Services; or

23.1.2. the mis-delivery, delay in delivery, or non-delivery of the Goods.

23.2. The Customer will indemnify and keep indemnified the Carrier from and against all claims of any kind whatsoever, howsoever caused or arising and (without limiting the generality of the foregoing) whether caused or arising as a result of the negligence of the Carrier, breach of contract, or otherwise, brought by any person in connection with any matter or thing done, said, or omitted by the Carrier in connection with the Goods.

23.3. The Carrier will be liable to the Customer in respect of injury or damage to or destruction or loss of the Goods directly caused by the Carrier in providing the Services up to the amount of $2,000 as a total maximum liability for all of the Goods, the subject of the consignment note (Cap). The parties agree that any such liability shall be based on, in the case of lost goods, the net cost to purchase or manufacture like goods (including any depreciation in the value of the goods lost from the date of original purchase), or in the case of damaged goods, the net cost for repair. The parties agree that neither party is liable for any consequential loss however caused.

23.4. The claims process and evidentiary requirements can be found on the Carrier’s website, which forms part of these Conditions.

23.5. The limitations referred to in this clause are subject to law, and in particular do not limit the Carrier’s liability for any consumer guarantees under the Consumer Guarantees Act.

23.6. The Carrier will not collect cash or any other payment on delivery of the Goods from the receiving Customer, and the sending Customer remains liable for payment of the Services.

23.7. As the liability of the Carrier is limited as provided in these Conditions, the Customer is advised to secure their own additional insurance cover generally. No insurance will be effected by the Carrier for the benefit of the Customer.

24. Actions Against the Carrier
24.1. The Carrier shall be under no liability whatsoever unless:

24.1.1. in the case of damage to the Goods, written notice of any claim, giving full particulars of any alleged damage or destruction, is received by the Carrier within seven (7) days after the delivery of goods; or

24.1.2. in the case of loss of the Goods, within thirty (30) days of the date of despatch; or

24.1.3. an action shall have been commenced by the Customer in a Court of competent jurisdiction within twelve (12) months from the date of despatch of the Goods.

All information reasonably requested by the Carrier, or any third-party claims administrator, in relation to the claim must be provided in writing within thirty (30) days of the request being made.

25. Claims
25.1. Neither party shall be liable, in any event, for any consequential or special damages or other indirect loss, however arising, whether or not the party had knowledge that such damages might be incurred, including but not limited to loss of income, profits, interest, or loss of market.

25.2. No claim or proceeding whatsoever may be made against Fastway Couriers (NZ) or any of its regional or courier franchisees other than the actual Carrier.

26. Amendment of Conditions
26.1. The Carrier may amend these Conditions at any time, which will take effect once notice has been provided to the Customer. Any amended Conditions will apply to all future Services.

26.2. The Customer acknowledges that notification includes the update of these Conditions on the Carrier’s website at www.aramex.co.nz and agrees to regularly review these Conditions to ensure it is aware of any changes.

27. Cubic Conversions
When calculating the weight and measurement profile of any Goods submitted by the Customer to the Carrier for domestic services within NZ, the Carrier will use the conversion of 200kg per cubic metre. Refer to the International Terms & Conditions for international cubic conversion.

28. Severance
If any clause or part of any clause in these Conditions is or becomes unenforceable, that unenforceability will not affect the enforceability of the remaining clause(s) or any other part of these Conditions.

29. Notice
Any notice given under this contract shall be deemed to be received if delivered or forwarded by registered post to the registered office of the party to which it is addressed or the usual or last known place of residence or business of that party.

30. Privacy Act 2020
Pursuant to the provisions of the Privacy Act 2020, the Customer authorises any person, agency, or company to provide the Carrier with such information as the Carrier may require at any time in response to the Carrier’s credit inquiries concerning any aspect of its dealings with the Customer. The Customer also authorises the Carrier to furnish to any third party details of any application being actioned by the Carrier and/or any subsequent details concerning the Carrier’s credit inquiries.

31. Paramount Clause – Consumer Guarantees Act 1993
Where the provisions of the Consumer Guarantees Act 1993 apply, the provisions of these Conditions will be read subject to that Act, and in the case of any conflict, the provisions of that Act prevail.

32. Electronic Messages
If the Customer has supplied their email address on the Customer Information form, the Carrier may occasionally email the Customer with information about their products, services, and promotions on offer. In accordance with the Unsolicited Electronic Messages Act 2007, the Customer may, at any time, choose to opt out of receiving emails about products, services, and promotions by selecting the ‘unsubscribe facility’ in any email received. The Customer’s email will then be removed from any future emails about products, services, and promotions on offer.

33. Force Majeure
33.1. The Carrier is not liable for loss or damage to the Goods where the loss or damage wholly or partly resulted from causes beyond the control of the Carrier, including but not limited to natural disasters, acts of war, civil unrest, strikes, lockouts, industrial disputes, government restrictions or intervention, transport delays, acts of God, breakdown of any equipment including vehicles, shortage of supplies or labour, or accidents.

33.2. In circumstances beyond the Carrier’s control, which include but are not limited to pandemics, natural disasters, acts of war, civil unrest, strikes, lockouts, industrial disputes, government restrictions or intervention, transport delays, or acts of God, the Carrier has the right to immediately amend its Services, requirements of the Customer, and/or process for an interim period. Notification of any such changes shall be provided on the Carrier’s website. Therefore, the Customer should regularly review the Carrier’s website to ensure it is aware of any changes.`;

function renderStyledTerms(text) {
  const lines = text.split("\n");
  const mainHeadingRe = /^\d+\.\s/;
  const subpointRe = /^\d+\.\d+\./;
  const alphaRe = /^[a-zA-Z]\.\s/;
  return lines.map((line, i) => {
    if (line.trim() === "") return <div key={i} className="h-3" />;
    if (mainHeadingRe.test(line)) return <div key={i} className="mt-8 mb-2 text-xl md:text-2xl font-semibold text-ink dark:text-white">{line}</div>;
    if (subpointRe.test(line)) return <div key={i} className="pl-1 md:pl-1.5 font-medium text-ink dark:text-slate-100">{line}</div>;
    if (alphaRe.test(line)) return <div key={i} className="pl-6 md:pl-8 text-slate-700 dark:text-slate-300">{line}</div>;
    return <div key={i} className="text-slate-700 dark:text-slate-300">{line}</div>;
  });
}

export default function Terms() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen flex flex-col bg-white text-ink dark:bg-surface dark:text-slate-200">
      <section className="relative overflow-hidden surface">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky to-white dark:from-[#0B1220] dark:to-[#0B1220]" />
        <motion.div className="fixed left-0 right-0 top-0 h-1 origin-left bg-primary/80 z-40" style={{ scaleX: scrollYProgress }} />
        <div className="container-section py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Legal
            </span>
            <h1 className="headline mt-4 text-3xl md:text-5xl font-extrabold">
              Terms <span className="gradient-text-static">and Conditions</span>
            </h1>
            <p className="mt-3 text-muted max-w-3xl mx-auto">
              This contract governs the supply of services undertaken by Fastway Couriers (NZ) Ltd t/as Aramex (New Zealand), its related entities, franchisees, sub-contractors, and all other nominees in relation to the carriage, storage, loading, unloading, packing, unpacking, freight forwarding, and all other services relating to the transport of goods ("Conditions").
            </p>
          </motion.div>

          <div className="mt-10 md:mt-14">
            <div className="relative max-w-4xl mx-auto pl-5 md:pl-7">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary via-pink-500 to-blue-600" />
              <div className="leading-8 md:leading-9 text-[15px] md:text-[17px] tracking-normal space-y-1">
                {renderStyledTerms(TERMS_TEXT)}
              </div>
            </div>
          </div>

          <motion.div
            className="mt-12 md:mt-16 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#contact" className="btn btn-outline">Contact support</a>
          </motion.div>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-soft hover:shadow-glow transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        </div>
      </section>
    </div>
  );
}


