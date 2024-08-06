### Roster Details<br />
Team Name: Imperial fe<br />
Roster: ANa, Kat, tory, twenty3, zAAz<br />
Global Rank: [50](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1074.8<br />
<br />
Final Rank Value (1074.8) = Starting Rank Value (1039.3) + Head To Head Adjustments (35.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.532[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.351[<sup>2</sup>](#table1)

The average of these factors is 0.311<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1039.3
- 400 + ( ( 0.311 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1039.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |       55 | 2024-08-04 | NIP Impact    | W   | 1.000      | 0.273        | 0.008 (0.002)    | 0.219 (0.060)    | 0 (0.000) |     4.28 | ANa, Kat, tory, twenty3, zAAz |
|           26 |      104 | 2024-08-03 | NIP Impact    | W   | 1.000      | 0.273        | 0.008 (0.002)    | 0.219 (0.060)    | 0 (0.000) |     4.23 | ANa, Kat, tory, twenty3, zAAz |
|           25 |      123 | 2024-08-02 | Astralis W    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.01 | ANa, Kat, tory, twenty3, zAAz |
|           24 |     1615 | 2024-06-02 | Let Her Cook  | W   | 0.768      | 0.524        | 0.060 (0.024)    | 0.137 (0.055)    | 1 (0.768) |     7.98 | ANa, Kat, tory, twenty3, zAAz |
|           23 |     1622 | 2024-06-02 | panelinha     | W   | 0.767      | 0.524        | 0.032 (0.013)    | 0.146 (0.058)    | 1 (0.767) |     6.37 | ANa, Kat, tory, twenty3, zAAz |
|           22 |     1678 | 2024-05-31 | BIG EQUIPA    | W   | 0.755      | 0.524        | 0.017 (0.007)    | 0.142 (0.056)    | 1 (0.755) |     4.53 | ANa, Kat, tory, twenty3, zAAz |
|           21 |     1695 | 2024-05-31 | HSG fe        | W   | 0.753      | 0.524        | 0.031 (0.012)    | 0.066 (0.026)    | 1 (0.753) |     5.63 | ANa, Kat, tory, twenty3, zAAz |
|           20 |     1997 | 2024-05-19 | NAVI Javelins | L   | 0.673      | -            | -                | -                | -         |   -15.73 | ANa, Kat, tory, twenty3, zAAz |
|           19 |     2007 | 2024-05-19 | NIP Impact    | W   | 0.672      | 0.281        | 0.008 (0.001)    | 0.219 (0.041)    | 0 (0.000) |     3.13 | ANa, Kat, tory, twenty3, zAAz |
|           18 |     2024 | 2024-05-18 | Crescent fe   | W   | 0.667      | -            | -                | -                | 0 (0.000) |     1.97 | ANa, Kat, tory, twenty3, zAAz |
|           17 |     2407 | 2024-05-05 | Crescent fe   | W   | 0.579      | -            | -                | -                | 0 (0.000) |     1.75 | ANa, Kat, tory, twenty3, zAAz |
|           16 |     2574 | 2024-04-27 | NIP Impact    | W   | 0.526      | 0.252        | -                | 0.219 (0.029)    | -         |     2.46 | ANa, Kat, tory, twenty3, zAAz |
|           15 |     2577 | 2024-04-27 | Spirit fe     | W   | 0.526      | -            | -                | -                | -         |     1.59 | ANa, Kat, tory, twenty3, zAAz |
|           14 |     2770 | 2024-04-19 | Astralis W    | W   | 0.474      | -            | -                | -                | -         |     1.64 | ANa, Kat, tory, twenty3, zAAz |
|           13 |     2895 | 2024-04-16 | NAVI Javelins | L   | 0.454      | -            | -                | -                | -         |   -11.08 | ANa, Kat, tory, twenty3, zAAz |
|           12 |     2929 | 2024-04-14 | NIP Impact    | W   | 0.440      | 0.303        | -                | 0.219 (0.029)    | -         |     2.09 | ANa, Kat, tory, twenty3, zAAz |
|           11 |     2947 | 2024-04-13 | NAVI Javelins | W   | 0.433      | 0.303        | 0.026 (0.003)    | 0.179 (0.023)    | -         |     2.97 | ANa, Kat, tory, twenty3, zAAz |
|           10 |     2983 | 2024-04-11 | Astralis W    | W   | 0.420      | -            | -                | -                | -         |     1.08 | ANa, Kat, tory, twenty3, zAAz |
|            9 |     3030 | 2024-04-10 | Astralis W    | W   | 0.413      | -            | -                | -                | -         |     1.07 | ANa, Kat, tory, twenty3, zAAz |
|            8 |     3117 | 2024-04-08 | Crescent fe   | W   | 0.399      | -            | -                | -                | -         |     1.36 | ANa, Kat, tory, twenty3, zAAz |
|            7 |     3147 | 2024-04-07 | NIP Impact    | W   | 0.393      | -            | -                | -                | -         |     1.83 | ANa, Kat, tory, twenty3, zAAz |
|            6 |     3151 | 2024-04-07 | BIG EQUIPA    | W   | 0.392      | 0.262        | 0.017 (0.002)    | -                | -         |     2.26 | ANa, Kat, tory, twenty3, zAAz |
|            5 |     3167 | 2024-04-06 | ENCE Athena   | W   | 0.385      | -            | -                | -                | -         |     1.15 | ANa, Kat, tory, twenty3, zAAz |
|            4 |     3387 | 2024-03-27 | ENCE Athena   | W   | 0.321      | -            | -                | -                | -         |     0.98 | ANa, Kat, tory, twenty3, zAAz |
|            3 |     3624 | 2024-03-14 | BIG EQUIPA    | W   | 0.234      | 0.331        | 0.017 (0.001)    | -                | -         |     1.38 | ANa, Kat, tory, twenty3, zAAz |
|            2 |     3802 | 2024-03-07 | NIP Impact    | W   | 0.187      | -            | -                | -                | -         |     0.83 | ANa, Kat, tory, twenty3, zAAz |
|            1 |     4033 | 2024-02-26 | 500           | L   | 0.118      | -            | -                | -                | -         |    -3.24 | ANa, Kat, tory, twenty3, zAAz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,175.04)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $1,353.00      | $1,353.00       |
| 2024-06-02 |      0.768 | $50,000.00     | $38,395.79      |
| 2024-05-19 |      0.673 | $800.00        | $538.60         |
| 2024-05-05 |      0.579 | $750.00        | $434.48         |
| 2024-04-27 |      0.526 | $535.00        | $281.48         |
| 2024-04-16 |      0.454 | $1,500.00      | $680.73         |
| 2024-04-07 |      0.393 | $1,250.00      | $490.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
