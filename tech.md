---
layout: doc
---
# My experiences with coding languages and empirical analysis tools
## Python <Badge type="tip" text="Proficient" />
- Python was the first programming language I had learned, immensely powerful but also incredibly simple. It had powered nearly all my research and coursework. Some interesting projects I had done with Python:
    - In project "The Impact of Corporate Political Activity on Innovation: A Stakeholder-alignment Perspective", the pipeline of data collection are written in Python. I wrote many functions in Python to handle different data collection procedures, such as name and employer based fuzzy matching, and donation record query using CRP IDs.

        - I might write a tech blog about the methodology. If I did, I'll put a link here.

    - In exploration of an idea, I modified `SECEDGAR`, an open-source tool, to automate download of firm's SEC filings. 
        - The code accepts a list of CIK indexes, a timespan, and filing type (e.g. `10-K` for annual reports, `DEFM 14A` for proxy statements), and stores the text of filing contents into individual files or SQL database (SQLite or a PostgreSQL Instance). 
        - For annual reports, it can also extract certain parts (e.g. MD&A, although it doesn't always work).
    - In "Research on optimization of elevator dispatch under time-varying environment", a college students’ innovation project, I partnered with firends from MIS to develop a simulation program in Python
        - I handled the non-core parts, such as configuration file, logging, data analysis, and GUI.
## R <Badge type="info" text="Intermediate" />
- In project "Timing Matters: A Configurational Analysis of Top-Down and Bottom-Up Forces Shaping Firm's Adoption of LGBTQ-Friendly Human Resource Practices":
    - Due to the limitations of `fsQCA`, the software pack commonly used in QCA analysis, I created an analysis pipeline in R utilizing the `QCA` package, that greatly reduced manual labor in analysis.
    - On one click, my code automatically performs calibration for all variables with pre-specified methods. Fine-tuning of parameters, such as anchor points for direct method, is also available. Manual labor of extracting percentile points - inputting them to fsQCA's calibration dialog - calibration for each variable is completely unnecessary. This has proved incredibly useful as the sample and calibration methods for variables constantly changed in early stages of analysis.
    ::: details Why I had to do so (Click to Expand)
    - QCA had two steps, calibration and analysis. Calibration turns data into "set membership", which is a continuous variable between $[0,1]$. Then, analysis is performed on calibrated variables to determine the sufficient conditions for outcome.
        - The goal of calibration is to obtain set membership score, which represents how much the observation is conceptually "in the set". In practice, however, the method of this transformation is left for the researcher to determine. 
            - For continuous variable, a "direct method" can be used. Researcher sets anchor points for logistic function, usually at 95%, 50%, and 5% percentiles of the sample. If logistic function is considered not conceptually correct, then the researcher has to create mapping functions themselves. 
            - For other types of data, manual mapping is required.
        - However, `fsQCA` can only accept three values in a dialog as parameters, it cannot calculate percentiles on its own. As a result, in the beginning stage of analysis, me and another RA had to use Stata to calculate percentiles, then input the parameters to Excel to generate a calibration command, which saved some time. 
        - Nevertheless, it was still extremely painful, so I decided to do something about it. I had no experience in R at that time, but what I had was courage and free time. 
            - The (quick and dirty) first version took around five hours, it had limited features and lots of hard-coded control flags. But it worked. 
            - Then I gradually cleaned the code up, offering more fine-grained controls. 
        - This had helped dramatically in preparing the first version of draft for submission for IACMR-SMS PDW in May 2023. 
            - The sample still changed frequently and we did not know what were the most accurate ways of calibration. 
            - Being able to change some control flags and then calibrate with a click saved tremendous amount of time.
    :::
## SQL <Badge type="info" text="Intermediate" />
- Currently, I maintain a database of U.S. political donations from CRP (OpesSecrets.org)'s Bulk Data.
    - During which, I accumulated experience in choosing appropriate types of indexes for queries.
    - I am able to customize database views for specific research uses.
    - PostgreSQL stored procedures are also heavily used in my data collection pipeline.
- I am familiar with common query syntax.
## Stata <Badge type="info" text="Intermediate" />
- In my bachelor's thesis, I used `reghdfe` to conduct high-dimensional fixed effect regression (with clustered standard errors)
- In project "The Impact of Corporate Political Activity on Innovation: A Stakeholder-alignment Perspective", Stata was the tool for data analysis, commands such as `frontier` and `reghdfe` were heavily used in analysis. Complex index generation is also performed with `foreach`.
## $\LaTeX$ <Badge type="info" text="Beginner" />
Good enough to control formatting, type out equations, and insert pictures for assignments in HKU.