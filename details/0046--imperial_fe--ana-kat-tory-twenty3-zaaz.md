### Roster Details<br />
Team Name: Imperial fe<br />
Roster: ANa, Kat, tory, twenty3, zAAz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [46](../standings_global.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
Final Rank Value:  1096.2<br />
<br />
Final Rank Value (1096.2) = Starting Rank Value (1077.9) + Head To Head Adjustments (18.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.561[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.400[<sup>2</sup>](#table1)

The average of these factors is 0.335<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1077.9
- 400 + ( ( 0.335 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1077.9


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
|           26 |     1165 | 2024-06-02 | Let Her Cook  | W   | 0.854      | 0.524        | 0.077 (0.035)    | 0.170 (0.076)    | 1 (0.854) |     8.64 | ANa, Kat, tory, twenty3, zAAz    |
|           25 |     1172 | 2024-06-02 | Fluxo Demons  | W   | 0.853      | 0.524        | 0.040 (0.018)    | 0.188 (0.084)    | 1 (0.853) |     6.89 | ANa, Kat, tory, twenty3, zAAz    |
|           24 |     1228 | 2024-05-31 | BIG EQUIPA    | W   | 0.841      | 0.524        | 0.022 (0.010)    | 0.186 (0.082)    | 1 (0.841) |     4.80 | ANa, Kat, tory, twenty3, zAAz    |
|           23 |     1245 | 2024-05-31 | HSG fe        | W   | 0.839      | 0.524        | 0.040 (0.018)    | 0.081 (0.036)    | 1 (0.839) |     6.05 | ANa, Kat, tory, twenty3, zAAz    |
|           22 |     1547 | 2024-05-19 | NAVI Javelins | L   | 0.760      | -            | -                | -                | -         |   -17.91 | ANa, Kat, tory, twenty3, zAAz    |
|           21 |     1557 | 2024-05-19 | NIP Impact    | W   | 0.758      | 0.281        | 0.007 (0.002)    | 0.216 (0.046)    | 0 (0.000) |     3.10 | ANa, Kat, tory, twenty3, zAAz    |
|           20 |     1574 | 2024-05-18 | Crescent fe   | W   | 0.753      | 0.281        | 0.006 (0.001)    | -                | 0 (0.000) |     1.88 | ANa, Kat, tory, twenty3, zAAz    |
|           19 |     1957 | 2024-05-05 | Crescent fe   | W   | 0.666      | -            | -                | -                | 0 (0.000) |     1.69 | ANa, Kat, tory, twenty3, zAAz    |
|           18 |     2124 | 2024-04-27 | NIP Impact    | W   | 0.613      | 0.252        | -                | 0.216 (0.033)    | 0 (0.000) |     2.50 | ANa, Kat, tory, twenty3, zAAz    |
|           17 |     2127 | 2024-04-27 | Spirit fe     | W   | 0.612      | -            | -                | -                | 0 (0.000) |     1.45 | ANa, Kat, tory, twenty3, zAAz    |
|           16 |     2320 | 2024-04-19 | ex-GUILD fe   | W   | 0.560      | -            | -                | -                | 0 (0.000) |     1.72 | ANa, Kat, tory, twenty3, zAAz    |
|           15 |     2445 | 2024-04-16 | NAVI Javelins | L   | 0.540      | -            | -                | -                | -         |   -13.40 | ANa, Kat, tory, twenty3, zAAz    |
|           14 |     2479 | 2024-04-14 | NIP Impact    | W   | 0.527      | 0.303        | 0.007 (0.001)    | 0.216 (0.034)    | -         |     2.16 | ANa, Kat, tory, twenty3, zAAz    |
|           13 |     2497 | 2024-04-13 | NAVI Javelins | W   | 0.519      | 0.303        | 0.035 (0.005)    | 0.227 (0.036)    | -         |     3.33 | ANa, Kat, tory, twenty3, zAAz    |
|           12 |     2533 | 2024-04-11 | Astralis W    | W   | 0.507      | -            | -                | -                | -         |     1.12 | ANa, Kat, tory, twenty3, zAAz    |
|           11 |     2580 | 2024-04-10 | Astralis W    | W   | 0.500      | -            | -                | -                | -         |     1.12 | ANa, Kat, tory, twenty3, zAAz    |
|           10 |     2667 | 2024-04-08 | Crescent fe   | W   | 0.486      | -            | -                | -                | -         |     1.41 | ANa, Kat, tory, twenty3, zAAz    |
|            9 |     2697 | 2024-04-07 | NIP Impact    | W   | 0.479      | 0.262        | -                | 0.216 (0.027)    | -         |     1.89 | ANa, Kat, tory, twenty3, zAAz    |
|            8 |     2701 | 2024-04-07 | BIG EQUIPA    | W   | 0.479      | 0.262        | 0.022 (0.003)    | 0.186 (0.023)    | -         |     2.56 | ANa, Kat, tory, twenty3, zAAz    |
|            7 |     2717 | 2024-04-06 | ENCE Athena   | W   | 0.472      | -            | -                | -                | -         |     1.21 | ANa, Kat, tory, twenty3, zAAz    |
|            6 |     2937 | 2024-03-27 | ENCE Athena   | W   | 0.407      | -            | -                | -                | -         |     1.08 | ANa, Kat, tory, twenty3, zAAz    |
|            5 |     3174 | 2024-03-14 | BIG EQUIPA    | W   | 0.321      | 0.331        | 0.022 (0.002)    | -                | -         |     1.76 | ANa, Kat, tory, twenty3, zAAz    |
|            4 |     3352 | 2024-03-07 | NIP Impact    | W   | 0.274      | -            | -                | -                | -         |     1.01 | ANa, Kat, tory, twenty3, zAAz    |
|            3 |     3583 | 2024-02-26 | 500           | L   | 0.205      | -            | -                | -                | -         |    -5.69 | ANa, Kat, tory, twenty3, zAAz    |
|            2 |     4004 | 2024-02-05 | Sampi         | L   | 0.066      | -            | -                | -                | -         |    -1.50 | ANa, Kat, tory, twenty3, zAAz    |
|            1 |     4163 | 2024-01-29 | ex-Sprout     | L   | 0.018      | -            | -                | -                | -         |    -0.55 | ANa, hyskeee, Kat, tory, twenty3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,562.64)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.854 | $50,000.00     | $42,718.40      |
| 2024-05-19 |      0.760 | $800.00        | $607.76         |
| 2024-05-05 |      0.666 | $750.00        | $499.31         |
| 2024-04-27 |      0.613 | $535.00        | $327.73         |
| 2024-04-16 |      0.540 | $1,500.00      | $810.40         |
| 2024-04-07 |      0.479 | $1,250.00      | $599.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
