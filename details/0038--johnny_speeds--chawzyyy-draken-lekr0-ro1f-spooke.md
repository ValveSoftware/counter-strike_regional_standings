### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: chawzyyy, draken, Lekr0, Ro1f, spooke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [38](../standings_global.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
Final Rank Value:  1226.5<br />
<br />
Final Rank Value (1226.5) = Starting Rank Value (1295.4) + Head To Head Adjustments (-68.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.519[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.161[<sup>2</sup>](#table1)
- LAN Wins: 0.719[<sup>2</sup>](#table1)

The average of these factors is 0.441<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1295.4
- 400 + ( ( 0.441 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1295.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       58 | 2024-06-15 | Lilmix          | W   | 1.000      | 0.377        | 0.030 (0.011)    | -                | 1 (1.000) |     3.97 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           29 |       98 | 2024-06-14 | Lilmix          | W   | 1.000      | 0.377        | 0.030 (0.011)    | -                | 1 (1.000) |     3.94 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           28 |      140 | 2024-06-13 | Kappa Bar       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.79 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           27 |      239 | 2024-06-09 | Alliance        | W   | 1.000      | 0.347        | 0.018 (0.006)    | 0.432 (0.150)    | 1 (1.000) |     4.96 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           26 |      278 | 2024-06-09 | Preasy          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.81 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           25 |      552 | 2024-06-04 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -24.70 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           24 |      571 | 2024-06-03 | brazylijski luz | W   | 1.000      | 0.371        | -                | 0.306 (0.113)    | 0 (0.000) |     3.78 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           23 |      573 | 2024-06-03 | Zero Tenacity   | W   | 1.000      | 0.371        | 0.153 (0.057)    | 1.000 (0.371)    | 0 (0.000) |    13.32 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           22 |      665 | 2024-05-31 | UNiTY           | L   | 1.000      | -            | -                | -                | -         |   -25.02 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           21 |      770 | 2024-05-26 | Preasy          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.56 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           20 |      868 | 2024-05-22 | Permitta        | W   | 1.000      | 0.371        | 0.039 (0.014)    | 0.885 (0.328)    | -         |     4.08 | bobeksde, draken, Lekr0, Ro1f, spooke     |
|           19 |     1181 | 2024-05-14 | kONO            | L   | 0.967      | -            | -                | -                | -         |   -26.78 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           18 |     1197 | 2024-05-13 | UNiTY           | W   | 0.962      | 0.333        | 0.038 (0.012)    | 0.288 (0.092)    | -         |     5.70 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           17 |     1203 | 2024-05-13 | ECLOT           | W   | 0.960      | 0.333        | 0.107 (0.034)    | 0.478 (0.153)    | -         |    11.48 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           16 |     1214 | 2024-05-12 | Verdant         | W   | 0.956      | 0.333        | -                | 0.308 (0.098)    | -         |     2.85 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           15 |     1227 | 2024-05-12 | Preasy          | L   | 0.954      | -            | -                | -                | -         |   -28.09 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |     1243 | 2024-05-11 | Lilmix          | W   | 0.949      | 0.319        | 0.030 (0.009)    | -                | 1 (0.949) |     3.06 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           13 |     1257 | 2024-05-11 | Flying Angels   | W   | 0.947      | -            | -                | -                | 1 (0.947) |     0.48 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           12 |     1275 | 2024-05-10 | FAVBET          | W   | 0.940      | 0.333        | -                | 0.397 (0.124)    | -         |     2.40 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           11 |     1799 | 2024-04-18 | UNiTY           | W   | 0.794      | 0.333        | 0.038 (0.010)    | 0.288 (0.076)    | -         |     4.78 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |     1864 | 2024-04-16 | Viperio         | W   | 0.781      | -            | -                | -                | -         |     0.77 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |     2110 | 2024-04-07 | Alliance        | W   | 0.722      | 0.330        | -                | 0.432 (0.103)    | -         |     2.77 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            8 |     2118 | 2024-04-07 | Metizport       | L   | 0.720      | -            | -                | -                | -         |   -17.23 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            7 |     2128 | 2024-04-06 | JANO            | W   | 0.715      | -            | -                | -                | -         |     0.83 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     2729 | 2024-03-09 | Alliance        | L   | 0.528      | -            | -                | -                | -         |   -14.87 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            5 |     2830 | 2024-03-05 | B8              | L   | 0.503      | -            | -                | -                | -         |   -10.77 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            4 |     2836 | 2024-03-05 | Insilio         | W   | 0.503      | -            | -                | -                | -         |     2.04 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     2843 | 2024-03-05 | Sashi           | W   | 0.502      | 0.143        | 0.200 (0.014)    | -                | -         |     3.92 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     4225 | 2024-01-09 | Enterprise      | L   | 0.129      | -            | -                | -                | -         |    -3.44 | chawzyyy, draken, HugoXD, RuStY, spooke   |
|            1 |     4247 | 2024-01-09 | UNiTY           | W   | 0.129      | -            | -                | -                | -         |     0.68 | chawzyyy, draken, HugoXD, RuStY, spooke   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,494.67)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-15 |      1.000 | $11,615.00     | $11,615.00      |
| 2024-06-09 |      1.000 | $7,224.00      | $7,224.00       |
| 2024-06-06 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-16 |      0.980 | $500.00        | $489.97         |
| 2024-05-13 |      0.960 | $6,000.00      | $5,762.28       |
| 2024-05-11 |      0.949 | $4,170.00      | $3,959.20       |
| 2024-04-18 |      0.794 | $6,000.00      | $4,765.11       |
| 2024-04-07 |      0.722 | $940.00        | $679.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
