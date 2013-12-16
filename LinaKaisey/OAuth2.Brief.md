 
The OAuth 2.0 Authorization Framework, and Bearer Token Usage
 
# [Problem](#problem-1)
# [Proposed Solution](#proposed-solution-1)
# [Method of Implementation](#method-of-implementation-1)
# [Scenarios in Context](#scenarios-in-context-1)
# [Possible Issues](#possible-issues-1)
# [Ways to Mitigate Possible Issues](#ways-to-mitigate-possible-issues-1)
# [Further Considerations](#further-considerations-1)

# Briefing 

The OAuth 2.0 Authorization Framework, and Bearer Token Usage are IETF specifications for user authorized access to protected resources. 

Authoritative Sources: 
* Internet Engineering Task Force (IETF) Request for Comments 6749 (available at [http://tools.ietf.org/html/rfc6749](http://tools.ietf.org/html/rfc6749))
* Internet Engineering Task Force (IETF) Request for Comments 6750 (available at [http://tools.ietf.org/html/rfc6750](http://tools.ietf.org/html/rfc6750)
* Privacy Requirements for IETF Protocols (available at [https://datatracker.ietf.org/doc/draft-cooper-ietf-privacy-requirements/?include_text=1](https://datatracker.ietf.org/doc/draft-cooper-ietf-privacy-requirements/?include_text=1))


# Problem
* In the traditional client-server authentication model, the client requests an access-restricted resource (protected resource) on the server by authenticating with the server using the resource owner's credentials.  In order to provide third-party applications access to restricted resources, the resource owner shares its credentials with the third party.  This creates several problems and limitations:
 
   * Third-party applications are required to store the resource
  	owner's credentials for future use, typically a password in
  	clear-text.
 
   *  Servers are required to support password authentication, despite
  	the security weaknesses inherent in passwords.
 
   *  Third-party applications gain overly broad access to the resource
  	owner's protected resources, leaving resource owners without any
  	ability to restrict duration or access to a limited subset of
  	resources.
 
   *  Resource owners cannot revoke access to an individual third party
  	without revoking access to all third parties, and must do so by
  	changing the third party's password.
 
   * Compromise of any third-party application results in compromise of
  	the end-user's password and all of the data protected by that
  	password.
 
# Proposed Solution
  * OAuth introduces authorization layer and separates the role of the client from that of the resource owner.  In OAuth, the client requests access to resources controlled by the resource owner and hosted by the resource server, and is issued a different set of credentials than those of the resource owner.
 
  * Instead of using the resource owner's credentials to access protected resources, the client obtains an access token -- a string denoting a specific scope, lifetime, and other access attributes.  Access tokens are issued to third-party clients by an authorization server with the approval of the resource owner.  The client uses the access token to access the protected resources hosted by the resource server.




 
# Method of Implementation
* OAuth steps:
 
   (A)  The client requests authorization from the resource owner.  The
    	authorization request can be made directly to the resource owner , or preferably indirectly via the authorization server as an intermediary.
 
   (B)  The client receives an authorization grant, which is a credential representing the resource owner's authorization. The authorization grant type depends on the method used by the client to request authorization and the types supported by the authorization server.
 
   (C)  The client requests an access token by authenticating with the authorization server and presenting the authorization grant.
 
   (D)  The authorization server authenticates the client and validates the authorization grant, and if valid, issues an access token.
 
   (E)  The client requests the protected resource from the resource server and authenticates by presenting the access token.
 
   (F)  The resource server validates the access token, and if valid, serves the request.

# Scenarios in Context
## General Description of People 
* “Rights Holder” – Customer (in the business sense); Principal (in the legal sense); Resource Owner (in the technical sense). This party owns the information (stored by the Information Holder), and authorizes the Temporary Access Holder to access that information on her behalf.

* “Information Holder” - Information Host (in the business sense); Agent (in the legal sense); Resource Server and Authorization Server (in the technical sense). This party stores the information belonging to the Rights Holder. 

* “Temporary Access Holder” - Requesting Party (in the business sense); Agent (in the legal sense); Client (in the technical sense). This party provides a service to the Rights Holder that requires information stored by the Information Holder. 

## General Description of Interactions

* First, the Temporary Access Holder registers with the Information Holder as one of many trusted temporary access holders
* At this point, the Rights Holder may authorize the Temporary Access Holder to access her specific information held by the Information Holder. 
* Once the Rights Holder authorizes the Temporary Access Holder to access information on her behalf, the Information Holder validates this request with the Rights Holder and provides the stored information to the Temporary Access Holder. 


## Specific Scenario 1
* Alice uses Google Picasa to store her photos, and Twitter to broadcast her thoughts. She would like to post a photo from Picasa to Twitter.

### People: 
* The Rights Holder: Alice. From a business perspective, Alice is the customer. From a legal perspective, Alice is the principal. From a technical perspective, Alice is the Resource Owner
* The Information Holder: Picasa. From a business perspective, Picasa is a data host. From a legal perspective, Picasa is an agent. From a technical perspective, Picasa is the Resource Server as well as the Authorization Server.
* The Temporary Access Holder: Twitter. From a business perspective, Twitter is a social media site. From a legal perspective, Twitter is an agent. From a technical perspective, Twitter is the Client.

### Interaction: 
* Business interaction: Alice signs up for both Picasa and Twitter. She signs onto Twitter and requests that a picture be posted from Picasa to Twitter.

* Legal interaction: Alice gives Actual Authorization to Picasa to act as a General Agent on her behalf. This allows Picasa to engage in a series of transactions over a continuous period of time, ie, receiving and granting authorization requests from other Agents such as Twitter. Alice gives Actual Authorization to Twitter to act as a Special Agent on her behalf. This allows Twitter to engage in a single transaction or limited series of transactions, ie, requesting authorization to access a particular picture Alice has stored on Picasa. Alice’s legal authorizations impose upon Picasa and Twitter particular duties as her agents: duties not to engage in self-dealing, a duty to avoid conflicts of interest with Alice, and a duty to only act within the scope of their agency agreement with Alice. For example, Twitter may not access Alice’s photos for a longer period than Alice authorizes, and Picasa may not release Alice’s photos to requesting agents besides Twitter (and any other agents Alice authorizes).

* Technical Interaction: Twitter requests authorization from Picasa. Picasa receives an authorization grant from Picasa. Alice invokes Twitter’s authorization to access her photo on Picasa. Twitter presents the authorization grant to Picasa and requests an access token. Picasa authenticates Twitter and requests that Alice validate the authorization grant. Once Alice validates the authorization grant, Picasa issues an access token to Twitter.

## Specific Scenario 2
* Alice is a graduate of MIT, and is applying for a job at UCLA. She would like MIT to provide her transcript to UCLA.

### People: 
* The Rights Holder: Alice. From a business perspective, Alice is the graduate. From a legal perspective, Alice is the principal. From a technical perspective, Alice is the Resource Owner.
* The Information Holder: MIT. From a business perspective, MIT is a University. From a legal perspective, MIT is an agent. From a technical perspective, MIT is the Resource Server as well as the Authorization Server.
* The Temporary Access Holder: UCLA. From a business perspective, UCLA is a prospective employer. From a legal perspective, UCLA is an agent. From a technical perspective, UCLA is the Client.

### Interaction: 
* Business interaction: Alice has enrolled at MIT. She applies for employment at UCLA and other institutions, and would like MIT to grant access to her academic transcript to prospective employers that request it.

* Legal interaction: Alice gives Actual Authorization to MIT to act as a Specific Agent on her behalf. This allows MIT to engage in a series of transactions over a continuous period of time, ie, receiving and granting authorization requests for Alice’s transcript from other Agents such as UCLA. Alice gives Actual Authorization to UCLA to act as a Special Agent on her behalf. This allows UCLA to engage in a single transaction, ie, requesting authorization to access Alice’s transcript at MIT. Alice’s legal authorizations impose upon MIT and UCLA particular duties as her agents: duties not to engage in self-dealing, a duty to avoid conflicts of interest with Alice, and a duty to only act within the scope of their agency agreement with Alice. For example, UCLA may not access other information about Alice that MIT might be able to make available, and MIT may not release any of Alice’s information besides that which she has authorized to be transmitted to UCLA.

* Technical Interaction: UCLA requests authorization from MIT. MIT receives an authorization grant from UCLA. Alice invokes authorization for UCLA to access her transcript from MIT. UCLA presents the authorization grant to MIT and requests an access token. MIT authenticates UCLA and requests that Alice validate the authorization grant. Once Alice validates the authorization grant, MIT issues an access token to UCLA and sends the electronic transcripts.

 
# Possible Issues

 * There are inherent privacy risks with protocols that allow the
   communicating parties to store personal data, transport personal
   data, or are vulnerable to other parties observing the personal data
   in the exchanged communications.  Most Internet communications
   involve such risks, which can allow entities to build large databases
   of information that by themselves or in conjunction with other
   databases can identify people and their actions in invasive ways.
 
* Token manufacture/modification:  An attacker may generate a bogustoken or modify the token contents (such as the authentication or attribute statements) of an existing token, causing the resource server to grant inappropriate access to the client.  For example, an attacker may modify the token to extend the validity period; a malicious client may modify the assertion to gain access to information that they should not be able to view.
 
 *  Token disclosure:  Tokens may contain authentication and attribute statements that include sensitive information.
 
  * Token redirect:  An attacker uses a token generated for consumption by one resource server to gain access to a different resource server that mistakenly believes the token to be for it.
 
 *  Token replay:  An attacker attempts to use a token that has already been used with that resource server in the past.
 
# Ways to Mitigate Possible Issues
* Recommending that IETF protocols define
   mechanisms for opportunistic encryption can increase the availability
   of confidentiality protection to legitimate users without
   significantly changing the set of tools that attackers already use to
   shield their traffic from being identified and their attacks from
   being thwarted.

* To the extent consistent with basic protocol operation and
   management, standards-track IETF protocols that involve transmission
   of personal data:

   1.  MUST minimize their use of such personal data, and

   2.  where personal data is sent, MUST have well-defined and
       interoperable ways to send such data encrypted for the intended
       recipient(s).

*opportunistic encryption MUST be well-
   defined for new IETF standards track protocols.  This requirement can
   be waived only in exceptional circumstances where the protocol's
   utility would be eliminated or severely diminished if opportunistic encryption were defined. 
   
* A large range of threats can be mitigated by protecting the contents
   of the token by using a digital signature or a Message Authentication
   Code (MAC).  Alternatively, a bearer token can contain a reference to
   authorization information, rather than encoding the information
   directly.
* Safeguard bearer tokens by ensuring that bearer tokens are not leaked to unintended parties,
* Validate TLS certificate chains, and always use TLS (https) when making requests with bearer tokens. 
* Don't store bearer tokens in cookies: 
* Issue short-lived (one hour or less) bearer tokens, particularly when
  	issuing tokens to clients that run within a web browser or other
  	environments where information leakage may occur
* Issue scoped bearer tokens that contain an audience restriction, scoping their use to to intended relying party or set of relying parties.
* Don't pass bearer tokens in page URLs
 
# Further Considerations
* How will this be manageable from the individual user’s point of view?
* Are there administrability issues with respect to implementation and widespread use?
 

 
 

