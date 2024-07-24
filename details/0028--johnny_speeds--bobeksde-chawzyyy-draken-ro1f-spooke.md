### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, chawzyyy, draken, Ro1f, spooke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [28](../standings_global.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
Final Rank Value:  1207.8<br />
<br />
Final Rank Value (1207.8) = Starting Rank Value (1333.9) + Head To Head Adjustments (-126.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.552[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.709[<sup>2</sup>](#table1)

The average of these factors is 0.461<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1333.9
- 400 + ( ( 0.461 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1333.9


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
|           46 |      125 | 2024-07-20 | Nexus           | W   | 1.000      | 0.333        | -                | 0.480 (0.160)    | 0 (0.000) |     2.82 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           45 |      144 | 2024-07-20 | Illuminar       | L   | 1.000      | -            | -                | -                | -         |   -26.44 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           44 |      158 | 2024-07-19 | Preasy          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.50 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           43 |      220 | 2024-07-18 | 9INE            | W   | 1.000      | 0.333        | -                | 0.480 (0.160)    | 0 (0.000) |     4.06 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           42 |      227 | 2024-07-18 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -24.38 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           41 |      347 | 2024-07-16 | Young Ninjas    | W   | 1.000      | -            | -                | -                | -         |     2.20 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           40 |      394 | 2024-07-15 | Endpoint        | W   | 1.000      | 0.371        | -                | 0.466 (0.173)    | -         |     3.65 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           39 |      441 | 2024-07-12 | TSM             | L   | 1.000      | -            | -                | -                | -         |   -26.39 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           38 |      479 | 2024-07-10 | Sashi           | W   | 1.000      | 0.358        | 0.234 (0.084)    | 1.000 (0.358)    | -         |    12.94 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           37 |      481 | 2024-07-10 | Endpoint        | W   | 1.000      | 0.358        | -                | 0.466 (0.167)    | -         |     3.36 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           36 |      502 | 2024-07-09 | 9INE            | W   | 1.000      | 0.371        | -                | 0.480 (0.178)    | -         |     3.49 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           35 |      504 | 2024-07-09 | Revenant        | L   | 1.000      | -            | -                | -                | -         |   -28.62 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           34 |      527 | 2024-07-07 | lajtbitexe      | W   | 1.000      | -            | -                | -                | -         |     1.44 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           33 |      535 | 2024-07-05 | kONO            | W   | 1.000      | 0.333        | 0.036 (0.012)    | 0.559 (0.186)    | -         |     3.26 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           32 |      545 | 2024-06-30 | Young Gods      | W   | 1.000      | -            | -                | -                | -         |     1.37 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           31 |      567 | 2024-06-27 | Revenant        | W   | 1.000      | 0.333        | 0.033 (0.011)    | -                | -         |     2.50 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           30 |      571 | 2024-06-25 | Revenant        | W   | 1.000      | 0.333        | 0.033 (0.011)    | -                | -         |     2.42 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           29 |      578 | 2024-06-23 | los kogutos     | W   | 0.992      | -            | -                | -                | -         |     0.24 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           28 |      646 | 2024-06-15 | Lilmix          | W   | 0.939      | 0.377        | 0.029 (0.010)    | -                | 1 (0.939) |     3.31 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           27 |      686 | 2024-06-14 | Lilmix          | W   | 0.932      | 0.377        | 0.029 (0.010)    | -                | 1 (0.932) |     3.26 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           26 |      728 | 2024-06-13 | Kappa Bar       | W   | 0.925      | -            | -                | -                | 1 (0.925) |     0.58 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           25 |      827 | 2024-06-09 | Alliance        | W   | 0.900      | -            | -                | -                | 1 (0.900) |     2.96 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           24 |      866 | 2024-06-09 | Preasy          | W   | 0.898      | -            | -                | -                | 1 (0.898) |     2.05 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           23 |     1140 | 2024-06-04 | Enterprise      | L   | 0.865      | -            | -                | -                | -         |   -23.38 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           22 |     1159 | 2024-06-03 | brazylijski luz | W   | 0.859      | -            | -                | -                | -         |     2.33 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           21 |     1161 | 2024-06-03 | Zero Tenacity   | W   | 0.859      | 0.371        | 0.173 (0.055)    | 1.000 (0.318)    | -         |     8.46 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           20 |     1251 | 2024-05-31 | UNiTY           | L   | 0.838      | -            | -                | -                | -         |   -22.43 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           19 |     1356 | 2024-05-26 | Preasy          | W   | 0.805      | -            | -                | -                | -         |     1.63 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           18 |     1454 | 2024-05-22 | Permitta        | W   | 0.778      | 0.371        | 0.032 (0.009)    | 0.790 (0.228)    | -         |     2.26 | bobeksde, draken, Lekr0, Ro1f, spooke     |
|           17 |     1767 | 2024-05-14 | kONO            | L   | 0.724      | -            | -                | -                | -         |   -20.99 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           16 |     1783 | 2024-05-13 | UNiTY           | W   | 0.719      | -            | -                | -                | -         |     3.22 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           15 |     1789 | 2024-05-13 | ECLOT           | W   | 0.718      | 0.333        | 0.084 (0.020)    | 0.510 (0.122)    | -         |     6.23 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |     1800 | 2024-05-12 | Verdant         | W   | 0.714      | -            | -                | -                | -         |     2.71 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           13 |     1813 | 2024-05-12 | Preasy          | L   | 0.711      | -            | -                | -                | -         |   -21.23 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           12 |     1829 | 2024-05-11 | Lilmix          | W   | 0.707      | -            | -                | -                | 1 (0.707) |     1.99 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           11 |     1843 | 2024-05-11 | Flying Angels   | W   | 0.705      | -            | -                | -                | 1 (0.705) |     0.27 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |     1861 | 2024-05-10 | FAVBET          | W   | 0.698      | -            | -                | -                | -         |     1.19 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |     2385 | 2024-04-18 | UNiTY           | W   | 0.552      | -            | -                | -                | -         |     2.43 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            8 |     2450 | 2024-04-16 | Viperio         | W   | 0.539      | -            | -                | -                | -         |     0.38 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            7 |     2696 | 2024-04-07 | Alliance        | W   | 0.480      | -            | -                | -                | -         |     1.16 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     2704 | 2024-04-07 | Metizport       | L   | 0.478      | -            | -                | -                | -         |   -13.17 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            5 |     2714 | 2024-04-06 | JANO            | W   | 0.472      | -            | -                | -                | -         |     0.40 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            4 |     3314 | 2024-03-09 | Alliance        | L   | 0.285      | -            | -                | -                | -         |    -8.35 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     3415 | 2024-03-05 | B8              | L   | 0.260      | -            | -                | -                | -         |    -6.51 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     3421 | 2024-03-05 | Insilio         | W   | 0.260      | -            | -                | -                | -         |     0.70 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            1 |     3428 | 2024-03-05 | Sashi           | W   | 0.260      | 0.143        | 0.234 (0.009)    | -                | -         |     2.06 | chawzyyy, draken, Lekr0, Ro1f, spooke     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,514.98)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-07-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-30 |      1.000 | $662.00        | $662.00         |
| 2024-06-27 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-15 |      0.939 | $11,615.00     | $10,908.96      |
| 2024-06-09 |      0.900 | $7,224.00      | $6,500.33       |
| 2024-06-06 |      0.878 | $1,000.00      | $878.46         |
| 2024-05-13 |      0.718 | $6,000.00      | $4,307.23       |
| 2024-05-11 |      0.707 | $4,170.00      | $2,947.94       |
| 2024-04-18 |      0.552 | $6,000.00      | $3,310.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
