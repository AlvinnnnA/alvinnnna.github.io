---
layout: doc
---
This page provides more detail on my research experience to date, along with my own reflections. It serves as a complement to my [CV](./cv)).

::: info RESEARCH PROJECT
#### Timing Matters: A Configurational Analysis of Top-Down and Bottom-Up Forces Shaping Firm's Adoption of LGBTQ-Friendly Human Resource Practices <Badge type="tip" text="Ongoing" />
Work started in July 2022, currently ongoing.

Supervisor: Prof. Dongdong Huang at Nankai University

**Co-author for conference submission, draft accepted for AOM 2024 & AIB 2024.**
:::

- Intellectual Contributions
    - Drafted the paper (in Methods and Literature Review (Top-down) sections) (although these sections are ***heavily*** modified by my supervisors in final versions).
    - Helped in initial model development, particularly top-down institutional pressure. 
        - I actively participated in discussions with supervisors around the model, and provided great input in formulation of final model.
- Data Contributions
    - Hand-collected detailed data on NGOs based on Columbia University's NGO dataset.
        - Joint work with another RA. This project was my first experience in working with others, and it had taught me collaboration (nearly) from scratch, maintaining inter-coder consistency, cross-checking, setting clear standards for manual work, etc.
    - Developed one-click calibration and analysis pipeline to analyze data with Qualitative Comparative Analysis (QCA) method in R independently.
        - [View my tech experience in detail](./tech)
    - Collected and processed data from the WRDS platform (BoardEx, Compustat) to form research-oriented indexes.
        - Most data handled by me. Once again, this was my first project using these databases and processing data. 

::: info RESEARCH EXPERIENCE
#### Research Assistant for Prof. Muhan Zhang at Chinese University of Hong Kong <Badge type="tip" text="Ongoing" />
Work started in August 2024, currently ongoing.

**Part-time Research Assistant**
:::

- Built pipelines for CEO-Level, Executive-Level, Organization-Level, and Board-Level political ideology from scratch using Python and SQL.
    - CEO-Level and Executive-Level ideology uses process similar to previous projects.
    - Organization-Level and Board-Level are ***completely*** built from scratch:
        - Includes historical names of firms using CRSP records (similar to [DISCERN](https://discern-project.com) patent database). 
        - Includes subsidiaries of firms using WRDS Subsidiaries Database (Consistent with [Gupta et al. (2016)](https://onlinelibrary.wiley.com/doi/abs/10.1002/smj.2550)).
        - Extracts "real" employment for independent directors using BoardEx data.
- Performed large-scale ethnicity recognition using photos to support research projects.
    - Built a pipeline in Python to analyze photos using [FairFace](https://github.com/dchen236/FairFace) model.
    - Conducted pilot analysis using a smaller sub-sample to compare different models (e.g. DeepFace) and produced detailed report.

::: info RESEARCH PROJECT
#### The Impact of Corporate Political Activity on Innovation: A Stakeholder-alignment Perspective <Badge type="info" text="Inactive" />
Work started in December 2022, currently inactive.

Supervisor: Prof. Dongdong Huang at Nankai University

**Research Assistant**
:::

- I was asked to help with this project in December 2022, since the RA working on this project could not handle the political donation and lobbying dataset.
    - It was quite a challenging task, mainly due to:
        - The large data size (Over 90 million entries for individual contributions).
        - Fuzzy matching needed to extract data from the dataset.
        - Papers using these data (understandably) don't discuss the implementation details, only describes the overall process.
    - So I went liberal (pun intended) and built my own implementation using PostgreSQL and Python. 
    - Sadly Prof. Huang and RAs (me and a classmate of mine) all decided this project wasn't a really good idea (vague causality and endogeneity problems), and work terminated just after I had a prototype implementation of Organizational- and Board-level ideology.
- Other than political ideology, this project was also an exercise in data processing and management, it used both common datasets (Compustat, BoardEx, etc.) and less common ones (Patent datasets such as [DISCERN](https://discern-project.com) and [GCPD](https://patents.darden.virginia.edu), and at one point I also explored "Philanthropic CPA" from [Bertrand et al.](https://www.aeaweb.org/articles?id=10.1257/aer.20180615)). 
- Stata was used much more heavily in this project.


