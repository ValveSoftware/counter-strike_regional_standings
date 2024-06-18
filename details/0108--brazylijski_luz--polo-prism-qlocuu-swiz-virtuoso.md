### Roster Details<br />
Team Name: brazylijski luz<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [108](../standings_global.md)<br />
Regional Rank: [76]( ../standings_europe.md)<br />
Final Rank Value:  849.1<br />
<br />
Final Rank Value (849.1) = Starting Rank Value (794.4) + Head To Head Adjustments (54.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.124[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 794.4
- 400 + ( ( 0.194 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 794.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      539 | 2024-06-04 | The Prodigies     | L   | 1.000      | -            | -                | -                | -         |   -26.18 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           30 |      571 | 2024-06-03 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -3.78 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           29 |      597 | 2024-06-02 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -17.64 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           28 |      689 | 2024-05-30 | Enterprise        | W   | 1.000      | 0.371        | 0.046 (0.017)    | 0.575 (0.213)    | 0 (0.000) |    19.66 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           27 |      707 | 2024-05-29 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -7.98 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           26 |      755 | 2024-05-27 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.92 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           25 |      815 | 2024-05-23 | GL Academy        | W   | 1.000      | 0.379        | 0.013 (0.005)    | 0.144 (0.055)    | 0 (0.000) |    12.58 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           24 |      826 | 2024-05-23 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -5.85 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           23 |     1356 | 2024-05-06 | Grannys Knockers  | L   | 0.913      | -            | -                | -                | -         |   -16.85 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           22 |     1514 | 2024-04-28 | VP.Prodigy        | W   | 0.862      | 0.396        | 0.033 (0.011)    | 0.518 (0.177)    | 0 (0.000) |    14.07 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           21 |     1523 | 2024-04-28 | Nexus             | W   | 0.861      | 0.396        | 0.012 (0.004)    | 0.397 (0.136)    | 0 (0.000) |    14.07 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           20 |     1687 | 2024-04-20 | Sangal            | L   | 0.809      | -            | -                | -                | -         |    -4.85 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           19 |     1729 | 2024-04-19 | Rebels            | W   | 0.803      | 0.500        | 0.054 (0.022)    | 0.450 (0.181)    | 0 (0.000) |    19.87 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           18 |     1775 | 2024-04-18 | BetBoom           | L   | 0.796      | -            | -                | -                | -         |    -0.49 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           17 |     1781 | 2024-04-18 | Ninjas in Pyjamas | W   | 0.795      | 0.143        | 0.315 (0.036)    | 0.497 (0.057)    | 0 (0.000) |    24.83 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           16 |     1986 | 2024-04-10 | Betera            | W   | 0.743      | 0.500        | -                | 0.089 (0.033)    | 0 (0.000) |     8.99 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           15 |     2039 | 2024-04-09 | FORZE             | L   | 0.736      | -            | -                | -                | -         |    -4.41 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           14 |     2318 | 2024-03-28 | Aurora            | L   | 0.656      | -            | -                | -                | -         |    -0.24 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           13 |     2585 | 2024-03-14 | Rebels            | W   | 0.564      | 0.500        | 0.054 (0.015)    | 0.450 (0.127)    | 0 (0.000) |    14.85 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           12 |     2676 | 2024-03-11 | SINNERS           | W   | 0.542      | 0.500        | 0.045 (0.012)    | 0.782 (0.212)    | 0 (0.000) |    14.28 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           11 |     2792 | 2024-03-06 | ALTERNATE aTTaX   | L   | 0.510      | -            | -                | -                | -         |    -3.81 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           10 |     2911 | 2024-03-02 | Sashi             | L   | 0.482      | -            | -                | -                | -         |    -2.15 | Furlan, phr, POLO, Prism, Qlocuu          |
|            9 |     2977 | 2024-02-27 | Spirit Academy    | L   | 0.456      | -            | -                | -                | -         |    -9.78 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|            8 |     3052 | 2024-02-24 | The Chosen Few    | W   | 0.435      | -            | -                | -                | -         |     4.81 | Furlan, phr, POLO, Prism, Qlocuu          |
|            7 |     3182 | 2024-02-18 | ARCRED            | W   | 0.396      | 0.358        | 0.048 (0.007)    | 0.346 (0.049)    | -         |     7.56 | Furlan, phr, POLO, Prism, Qlocuu          |
|            6 |     3435 | 2024-02-04 | ALTERNATE aTTaX   | L   | 0.302      | -            | -                | -                | -         |    -2.04 | Furlan, phr, POLO, Prism, Qlocuu          |
|            5 |     4224 | 2024-01-09 | Gaimin Gladiators | L   | 0.129      | -            | -                | -                | -         |    -0.40 | Furlan, phr, POLO, Prism, Qlocuu          |
|            4 |     4237 | 2024-01-09 | Nemiga            | W   | 0.129      | 0.143        | 0.486 (0.009)    | -                | -         |     3.82 | Furlan, phr, POLO, Prism, Qlocuu          |
|            3 |     4262 | 2023-12-29 | Alliance          | L   | 0.054      | -            | -                | -                | -         |    -0.59 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     4265 | 2023-12-28 | VP.Prodigy        | L   | 0.047      | -            | -                | -                | -         |    -0.54 | Furlan, phr, POLO, Qlocuu, swiz           |
|            1 |     4268 | 2023-12-27 | Rhyno             | W   | 0.041      | -            | -                | -                | -         |     1.01 | Furlan, phr, POLO, Qlocuu, swiz           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,500.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
