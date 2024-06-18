### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, innocent, kisserek, olimp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [56](../standings_global.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
Final Rank Value:  1070.0<br />
<br />
Final Rank Value (1070.0) = Starting Rank Value (1105.2) + Head To Head Adjustments (-35.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.441[<sup>1</sup>](#table2)
- Bounty Collected: 0.447[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.235[<sup>2</sup>](#table1)

The average of these factors is 0.347<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1105.2
- 400 + ( ( 0.347 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1105.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      127 | 2024-06-13 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -23.18 | casey, Flayy, innocent, kisserek, olimp |
|           42 |      152 | 2024-06-12 | PERA              | L   | 1.000      | -            | -                | -                | -         |   -19.28 | casey, Flayy, innocent, kisserek, olimp |
|           41 |      194 | 2024-06-10 | Permitta          | W   | 1.000      | 0.379        | 0.039 (0.015)    | 0.885 (0.335)    | 0 (0.000) |    10.24 | casey, Flayy, innocent, kisserek, olimp |
|           40 |      233 | 2024-06-09 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |   -18.72 | casey, Flayy, kisserek, olimp, SZPERO   |
|           39 |      358 | 2024-06-07 | BLEED             | W   | 1.000      | 0.500        | 0.347 (0.174)    | 0.946 (0.473)    | 0 (0.000) |    22.98 | casey, Flayy, innocent, kisserek, olimp |
|           38 |      478 | 2024-06-05 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.49 | casey, Flayy, innocent, kisserek, olimp |
|           37 |      670 | 2024-05-30 | PERA              | W   | 1.000      | 0.379        | 0.058 (0.022)    | 0.455 (0.172)    | 0 (0.000) |    11.73 | casey, Flayy, innocent, kisserek, olimp |
|           36 |      710 | 2024-05-29 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -21.08 | casey, Flayy, innocent, kisserek, olimp |
|           35 |      797 | 2024-05-25 | kONO              | W   | 1.000      | 0.371        | -                | 0.395 (0.146)    | 0 (0.000) |     7.75 | casey, Flayy, innocent, kisserek, olimp |
|           34 |      911 | 2024-05-21 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -20.03 | casey, Flayy, innocent, kisserek, olimp |
|           33 |      934 | 2024-05-20 | The Prodigies     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.22 | casey, Flayy, innocent, kisserek, olimp |
|           32 |     1003 | 2024-05-18 | B8                | L   | 0.994      | -            | -                | -                | -         |   -11.63 | casey, Flayy, innocent, kisserek, olimp |
|           31 |     1033 | 2024-05-17 | Gaimin Gladiators | W   | 0.988      | 0.384        | 0.076 (0.029)    | 0.632 (0.240)    | -         |    18.35 | casey, Flayy, innocent, kisserek, olimp |
|           30 |     1525 | 2024-04-28 | Aurora            | L   | 0.860      | -            | -                | -                | -         |    -1.94 | casey, Flayy, innocent, kisserek, olimp |
|           29 |     1574 | 2024-04-26 | MIBR              | W   | 0.846      | 0.500        | 0.281 (0.119)    | 0.688 (0.291)    | 1 (0.846) |    25.31 | casey, Flayy, innocent, kisserek, olimp |
|           28 |     1576 | 2024-04-25 | Rooster           | W   | 0.845      | -            | -                | -                | 1 (0.845) |     5.92 | casey, Flayy, innocent, kisserek, olimp |
|           27 |     1729 | 2024-04-19 | brazylijski luz   | L   | 0.803      | -            | -                | -                | -         |   -19.87 | casey, Flayy, innocent, kisserek, olimp |
|           26 |     1908 | 2024-04-13 | Monte             | L   | 0.762      | -            | -                | -                | -         |    -6.88 | casey, Flayy, innocent, kisserek, olimp |
|           25 |     2040 | 2024-04-09 | B8                | W   | 0.736      | 0.500        | 0.229 (0.084)    | 1.000 (0.368)    | -         |    12.59 | casey, Flayy, innocent, kisserek, olimp |
|           24 |     2183 | 2024-04-04 | ALTERNATE aTTaX   | W   | 0.702      | 0.500        | 0.046 (0.016)    | 0.573 (0.201)    | -         |     7.95 | casey, Flayy, innocent, kisserek, olimp |
|           23 |     2233 | 2024-04-03 | SINNERS           | L   | 0.694      | -            | -                | -                | -         |   -10.55 | casey, Flayy, innocent, kisserek, olimp |
|           22 |     2317 | 2024-03-28 | ex-Sprout         | W   | 0.656      | -            | -                | -                | -         |     1.15 | casey, Flayy, innocent, kisserek, olimp |
|           21 |     2350 | 2024-03-27 | B8                | L   | 0.650      | -            | -                | -                | -         |    -8.06 | casey, Flayy, innocent, kisserek, olimp |
|           20 |     2360 | 2024-03-27 | Sashi             | W   | 0.649      | 0.143        | 0.200 (0.019)    | -                | -         |    10.91 | casey, Flayy, innocent, kisserek, olimp |
|           19 |     2390 | 2024-03-25 | Aurora            | L   | 0.636      | -            | -                | -                | -         |    -1.01 | casey, Flayy, innocent, kisserek, olimp |
|           18 |     2585 | 2024-03-14 | brazylijski luz   | L   | 0.564      | -            | -                | -                | -         |   -14.85 | casey, Flayy, kisserek, olimp, SZPERO   |
|           17 |     2857 | 2024-03-04 | BLEED             | L   | 0.496      | -            | -                | -                | -         |    -2.95 | casey, Flayy, kisserek, olimp, sNx      |
|           16 |     2891 | 2024-03-03 | Sangal            | W   | 0.489      | 0.500        | 0.216 (0.053)    | 0.884 (0.216)    | -         |     8.25 | casey, Flayy, kisserek, olimp, sNx      |
|           15 |     2903 | 2024-03-02 | Aurora            | L   | 0.482      | -            | -                | -                | -         |    -0.75 | casey, Flayy, kisserek, olimp, sNx      |
|           14 |     2938 | 2024-02-29 | Sangal            | W   | 0.469      | 0.500        | 0.216 (0.051)    | 0.884 (0.207)    | -         |     8.21 | casey, Flayy, kisserek, olimp, sNx      |
|           13 |     3429 | 2024-02-04 | Falcons           | L   | 0.303      | -            | -                | -                | -         |    -0.52 | casey, Flayy, kisserek, olimp, sNx      |
|           12 |     3466 | 2024-02-03 | FaZe              | L   | 0.295      | -            | -                | -                | -         |    -0.07 | casey, Flayy, kisserek, olimp, sNx      |
|           11 |     3488 | 2024-02-02 | M80               | W   | 0.290      | -            | -                | -                | 1 (0.290) |     6.76 | casey, Flayy, kisserek, olimp, sNx      |
|           10 |     3540 | 2024-01-31 | Eternal Fire      | L   | 0.276      | -            | -                | -                | -         |    -0.15 | casey, Flayy, kisserek, olimp, sNx      |
|            9 |     3545 | 2024-01-31 | Cloud9            | W   | 0.275      | -            | -                | -                | 1 (0.275) |     6.95 | casey, Flayy, kisserek, olimp, sNx      |
|            8 |     3585 | 2024-01-28 | 9 Pandas          | L   | 0.256      | -            | -                | -                | -         |    -3.29 | casey, Flayy, kisserek, olimp, sNx      |
|            7 |     3671 | 2024-01-23 | Viperio           | L   | 0.222      | -            | -                | -                | -         |    -6.73 | casey, Flayy, kisserek, olimp, sNx      |
|            6 |     3672 | 2024-01-23 | PERA              | L   | 0.222      | -            | -                | -                | -         |    -4.59 | casey, Flayy, kisserek, olimp, sNx      |
|            5 |     3692 | 2024-01-22 | Sampi             | L   | 0.216      | -            | -                | -                | -         |    -4.83 | casey, Flayy, kisserek, olimp, sNx      |
|            4 |     3697 | 2024-01-22 | ALTERNATE aTTaX   | W   | 0.216      | -            | -                | -                | -         |     3.03 | casey, Flayy, kisserek, olimp, sNx      |
|            3 |     3701 | 2024-01-22 | ex-Guild Eagles   | L   | 0.215      | -            | -                | -                | -         |    -4.91 | casey, Flayy, kisserek, olimp, sNx      |
|            2 |     3973 | 2024-01-16 | Passion UA        | L   | 0.177      | -            | -                | -                | -         |    -3.27 | casey, Flayy, kisserek, olimp, sNx      |
|            1 |     3983 | 2024-01-16 | Gucci Academy     | W   | 0.176      | -            | -                | -                | -         |     0.20 | casey, Flayy, kisserek, olimp, sNx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,176.31)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      1.000 | $1,089.00      | $1,089.00       |
| 2024-06-09 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-18 |      0.996 | $2,000.00      | $1,991.96       |
| 2024-04-28 |      0.860 | $10,000.00     | $8,603.17       |
| 2024-02-11 |      0.349 | $10,000.00     | $3,492.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
