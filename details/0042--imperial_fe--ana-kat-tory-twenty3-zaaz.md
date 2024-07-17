### Roster Details<br />
Team Name: Imperial fe<br />
Roster: ANa, Kat, tory, twenty3, zAAz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [42](../standings_global.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
Final Rank Value:  1157.5<br />
<br />
Final Rank Value (1157.5) = Starting Rank Value (1149.6) + Head To Head Adjustments (7.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.586[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.415[<sup>2</sup>](#table1)

The average of these factors is 0.349<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1149.6
- 400 + ( ( 0.349 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1149.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      877 | 2024-06-02 | Let Her Cook  | W   | 0.902      | 0.524        | 0.092 (0.043)    | 0.185 (0.087)    | 1 (0.902) |     8.76 | ANa, Kat, tory, twenty3, zAAz    |
|           25 |      884 | 2024-06-02 | Fluxo Demons  | W   | 0.900      | 0.524        | 0.048 (0.023)    | 0.210 (0.099)    | 1 (0.900) |     6.84 | ANa, Kat, tory, twenty3, zAAz    |
|           24 |      940 | 2024-05-31 | BIG EQUIPA    | W   | 0.888      | 0.524        | 0.027 (0.012)    | 0.210 (0.097)    | 1 (0.888) |     4.53 | ANa, Kat, tory, twenty3, zAAz    |
|           23 |      957 | 2024-05-31 | HSG fe        | W   | 0.886      | 0.524        | 0.048 (0.022)    | 0.088 (0.041)    | 1 (0.886) |     5.93 | ANa, Kat, tory, twenty3, zAAz    |
|           22 |     1259 | 2024-05-19 | NAVI Javelins | L   | 0.807      | -            | -                | -                | -         |   -19.44 | ANa, Kat, tory, twenty3, zAAz    |
|           21 |     1269 | 2024-05-19 | NIP Impact    | W   | 0.806      | 0.281        | 0.008 (0.002)    | 0.191 (0.043)    | 0 (0.000) |     2.79 | ANa, Kat, tory, twenty3, zAAz    |
|           20 |     1286 | 2024-05-18 | Crescent fe   | W   | 0.800      | 0.281        | 0.007 (0.002)    | -                | 0 (0.000) |     1.60 | ANa, Kat, tory, twenty3, zAAz    |
|           19 |     1669 | 2024-05-05 | Crescent fe   | W   | 0.713      | -            | -                | -                | 0 (0.000) |     1.45 | ANa, Kat, tory, twenty3, zAAz    |
|           18 |     1836 | 2024-04-27 | NIP Impact    | W   | 0.660      | 0.252        | -                | 0.191 (0.032)    | 0 (0.000) |     2.26 | ANa, Kat, tory, twenty3, zAAz    |
|           17 |     1839 | 2024-04-27 | Spirit fe     | W   | 0.659      | -            | -                | -                | 0 (0.000) |     1.22 | ANa, Kat, tory, twenty3, zAAz    |
|           16 |     2032 | 2024-04-19 | ex-GUILD fe   | W   | 0.607      | -            | -                | -                | 0 (0.000) |     1.53 | ANa, Kat, tory, twenty3, zAAz    |
|           15 |     2157 | 2024-04-16 | NAVI Javelins | L   | 0.587      | -            | -                | -                | -         |   -14.92 | ANa, Kat, tory, twenty3, zAAz    |
|           14 |     2191 | 2024-04-14 | NIP Impact    | W   | 0.574      | 0.303        | 0.008 (0.001)    | 0.191 (0.033)    | -         |     1.96 | ANa, Kat, tory, twenty3, zAAz    |
|           13 |     2209 | 2024-04-13 | NAVI Javelins | W   | 0.566      | 0.303        | 0.042 (0.007)    | 0.251 (0.043)    | -         |     3.27 | ANa, Kat, tory, twenty3, zAAz    |
|           12 |     2245 | 2024-04-11 | Astralis W    | W   | 0.554      | -            | -                | -                | -         |     0.90 | ANa, Kat, tory, twenty3, zAAz    |
|           11 |     2292 | 2024-04-10 | Astralis W    | W   | 0.547      | -            | -                | -                | -         |     0.90 | ANa, Kat, tory, twenty3, zAAz    |
|           10 |     2379 | 2024-04-08 | Crescent fe   | W   | 0.533      | -            | -                | -                | -         |     1.23 | ANa, Kat, tory, twenty3, zAAz    |
|            9 |     2409 | 2024-04-07 | NIP Impact    | W   | 0.526      | 0.262        | -                | 0.191 (0.026)    | -         |     1.71 | ANa, Kat, tory, twenty3, zAAz    |
|            8 |     2413 | 2024-04-07 | BIG EQUIPA    | W   | 0.526      | 0.262        | 0.027 (0.004)    | 0.210 (0.029)    | -         |     2.43 | ANa, Kat, tory, twenty3, zAAz    |
|            7 |     2429 | 2024-04-06 | ENCE Athena   | W   | 0.519      | -            | -                | -                | -         |     1.06 | ANa, Kat, tory, twenty3, zAAz    |
|            6 |     2649 | 2024-03-27 | ENCE Athena   | W   | 0.455      | -            | -                | -                | -         |     0.97 | ANa, Kat, tory, twenty3, zAAz    |
|            5 |     2886 | 2024-03-14 | BIG EQUIPA    | W   | 0.368      | 0.331        | 0.027 (0.003)    | -                | -         |     1.76 | ANa, Kat, tory, twenty3, zAAz    |
|            4 |     3064 | 2024-03-07 | NIP Impact    | W   | 0.321      | -            | -                | -                | -         |     0.95 | ANa, Kat, tory, twenty3, zAAz    |
|            3 |     3295 | 2024-02-26 | 500           | L   | 0.252      | -            | -                | -                | -         |    -7.18 | ANa, Kat, tory, twenty3, zAAz    |
|            2 |     3716 | 2024-02-05 | Sampi         | L   | 0.113      | -            | -                | -                | -         |    -2.68 | ANa, Kat, tory, twenty3, zAAz    |
|            1 |     3875 | 2024-01-29 | ex-Sprout     | L   | 0.065      | -            | -                | -                | -         |    -1.99 | ANa, hyskeee, Kat, tory, twenty3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,152.23)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.902 | $50,000.00     | $45,079.66      |
| 2024-05-19 |      0.807 | $800.00        | $645.54         |
| 2024-05-05 |      0.713 | $750.00        | $534.73         |
| 2024-04-27 |      0.660 | $535.00        | $353.00         |
| 2024-04-16 |      0.587 | $1,500.00      | $881.24         |
| 2024-04-07 |      0.526 | $1,250.00      | $658.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
